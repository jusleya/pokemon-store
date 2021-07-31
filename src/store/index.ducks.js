import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const appReducer = (history) => {
  const reducers = {
    router: connectRouter(history),
  };

  return combineReducers(reducers);
};

const Reducers = (history) => appReducer(history);

export default Reducers;
