import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import fairyReducer from './fairy/fairy.duck';

const appReducer = (history) => {
  const reducers = {
    router: connectRouter(history),
    fairyReducer,
  };

  return combineReducers(reducers);
};

const Reducers = (history) => appReducer(history);

export default Reducers;
