import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
import { CloseIcon } from '../images/CloseIcon.jsx';
import { LoginIcon } from '../images/LoginIcon.jsx';
import { LogoIcon } from '../images/LogoIcon.jsx';
import { MenuIcon } from '../images/MenuIcon';
import useIsMobile from '../../hooks/useIsMobile.js';

export const Navbar = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true
    });
  };

  const getClass = ({ isActive }) => isActive ? `border-b-2 border-blue-500 ${!isOpen && "text-white"}` : 'text-gray-400 border-b-2 border-transparent hover:border-blue-500';

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <div className="container-sm m-auto p-2 flex justify-between items-center bg-gray-900 gap-5">
        <div className='flex items-center gap-2'>
          <LogoIcon />
          <h1 className="text-2xl font-bold font-heading text-white">
            Asociaciones
          </h1>
        </div>
        <nav className={isOpen ? "flex" : "hidden md:flex"}>
          <div className="flex bg-white absolute flex-col w-full p-2 text-center top-14 left-0 md:flex-row md:top-0 md:relative md:flex z-10 md:gap-5 md:bg-transparent">
            <NavLink className={({ isActive }) => getClass({ isActive })} to="/marvel">
              Marvel
            </NavLink>
            <NavLink className={({ isActive }) => getClass({ isActive })} to="/dc">
              DC
            </NavLink>
            <NavLink className={({ isActive }) => getClass({ isActive })} to="/search">
              Search
            </NavLink>
          </div>
          {isOpen && (
            <button className="border-t-2 border-black-100 w-full absolute bottom-0 left-0 p-2" onClick={onLogout}>
              Logout
            </button>
          )}
        </nav>

        <div style={{ position: 'relative' }}>
          <nav className="flex justify-end items-center bg-gray-900 text-white">
            <button className="hidden md:flex items-center space-x-5 items-center gap-2 text-white" onClick={toggleMenu}>
              <div className="flex items-center hover:text-gray-200 cursor-pointer">
                <LoginIcon />
              </div>
              {user?.name}
            </button>
          </nav>
          <nav className={isOpenMenu ? "absolute rounded md:bg-gray-100 z-10 mt-2 h-auto min-w-36" : "hidden"}>
            <button className='text-black-400 hover:bg-gray-200 hover:rounded w-full h-full p-2 text-sm' onClick={onLogout}>
              Logout
            </button>
          </nav>
        </div>

        <div className="md:hidden">
          <button className="flex justify-center items-center" onClick={toggleNavbar}>
            <MenuIcon isOpen={isOpen} />
            <CloseIcon isOpen={isOpen} />
          </button>
        </div>
      </div>

      {!isOpen && children}
    </>
  );
}