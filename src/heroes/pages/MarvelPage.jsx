import React from 'react'
import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1 className='text-2xl text-gray-900 md:text-4xl lg:text-5xl'>Marvel Comics</h1>
      <hr />

      <HeroList publisher={'Marvel Comics'} />
    </>
  );
};