import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { history } from '../lib/core/routes';
import Reducers from './index.ducks';
import Sagas from './index.sagas';

const reduxDevTools =
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

export const store = createStore(
  Reducers(history),
  reduxDevTools
    ? compose(applyMiddleware(...middlewares), reduxDevTools)
    : compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(Sagas);
