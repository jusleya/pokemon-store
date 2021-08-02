import { all } from 'redux-saga/effects';

import * as pokemonSaga from './pokemon/pokemon.saga';

function* Sagas() {
  yield all([pokemonSaga.watchSagas()]);
}

export default Sagas;
