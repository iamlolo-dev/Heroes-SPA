import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) return;

  return heroes.filter(hero => hero.publisher === publisher);
}