import { all } from 'redux-saga/effects';

// eslint-disable-next-line import/no-cycle
import * as fairySaga from './fairy/fairy.saga';

function* Sagas() {
  yield all([fairySaga.watchSagas()]);
}

export default Sagas;
