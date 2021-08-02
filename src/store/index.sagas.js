import { all } from 'redux-saga/effects';

import * as fairySaga from './fairy/fairy.saga';

function* Sagas() {
  yield all([fairySaga.watchSagas()]);
}

export default Sagas;
