import { all } from 'redux-saga/effects';

import * as fairySaga from './fairy/fairy.saga';
import * as pokemonSaga from './pokemon/pokemon.saga';

function* Sagas() {
  yield all([fairySaga.watchSagas(), pokemonSaga.watchSagas()]);
}

export default Sagas;
