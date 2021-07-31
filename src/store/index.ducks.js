import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import fairyReducer from './fairy/fairy.duck';
import pokemonReducer from './pokemon/pokemon.duck';

const appReducer = (history) => {
  const reducers = {
    router: connectRouter(history),
    fairyReducer,
    pokemonReducer,
  };

  return combineReducers(reducers);
};

const Reducers = (history) => appReducer(history);

export default Reducers;
