import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context';
import { LogoIcon } from '../../ui/images/LogoIcon';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    // const lastPath = localStorage.getItem( 'lastPath' ) || '/';

    login('Manuel Garcia');

    navigate('/', {
      replace: true
    });
  };

  return (
    <div class="bg-image text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div class="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2 bg-black/70 p-2">
        <LogoIcon />
        Asociaciones
      </div>

      <div class="relative mt-12 w-full max-w-lg sm:mt-10 text-black">
        <div class="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
          bis_skin_checked="1"></div>
        <div class="bg-white mx-5 rounded-md">
          <div class="flex flex-col p-6">
            <h3 class="text-xl font-semibold leading-6 tracking-tighter">
              Bienvenido a Asociaciones
            </h3>
            <p class="mt-1.5 text-sm font-medium text-black/50">
              Página de aprendizaje.
            </p>
          </div>
          <div class="p-6 pt-0">
            <form>
              <div>
                <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <input
                    class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none sm:leading-7 text-foreground"
                    type="text"
                    name="username"
                    placeholder={'Manuel Garcia'}
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="mt-4">
                <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <div class="flex items-center">
                    <input
                      class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none sm:leading-7 text-foreground"
                      type="password"
                      name="password"
                      placeholder="********"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-4 flex justify-end">
                <button
                  class="border-2 hover:border-sky-200 hover:bg-gray-300/30 transition duration-300 rounded-md text-sm bg-white text-black h-10 px-4"
                  type="submit"
                  onClick={onLogin}
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};