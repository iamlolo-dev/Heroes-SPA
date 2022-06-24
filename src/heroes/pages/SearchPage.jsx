import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { searchText, handleInputChange } = useForm({
        searchText: q
    });

    const ShowError = () => {
        
        if( q.length > 0 && heroes.length === 0) return  <div className='alert alert-danger animated__animated animated__fadeIn'> No hero with <b>{q}</b> </div>

        return '';
    }

    const ShowSearch = () => {

        if ( q.length === 0 ) return <div className='alert alert-primary animated__animated animated__fadeIn'> Search a hero.. </div>

        return '';
    }


    const onSearchSummit = (e) => {

        e.preventDefault();

        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className='row'>
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSummit}>
                        <input
                            type="text"
                            placeholder='Search...'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            className='btn btn-outline-info mt-1'

                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <ShowSearch />
                    <ShowError />

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} hero={hero} />
                        ))
                    }
                    {/* */}

                </div>
            </div>
        </>
    );
};
