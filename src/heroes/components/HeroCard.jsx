import React from 'react'

import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {

  if (alter_ego === characters) return (<></>);

  return <p>{characters}</p>
}

export const HeroCard = ({ hero }) => {
  const {
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters } = hero;

  const heroImageURL = `/assets/heroes/${id}.jpg`;

  return (
    <div className='p-2 animate__animated animate__fadeIn'>
      <div className='flex gap-4 border-2 rounded-2xl w-96'>
        <div>
          <img src={heroImageURL} className='w-44 h-56 rounded-lg' alt={superhero} />
        </div>

        <div className='py-6'>
          <h5>{superhero}</h5>
          <p className=''>{alter_ego}</p>

          <CharactersByHero characters={characters} alter_ego={alter_ego} />

          <p className='card-text'>
            <small className='text-muted'>{first_appearance}</small>
          </p>

          <Link to={`/hero/${id}`}>
            Más...
          </Link>

        </div>
      </div>
    </div>
  )
}