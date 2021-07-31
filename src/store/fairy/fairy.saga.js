import { takeLatest, put } from 'redux-saga/effects';
import { FairyType } from './fairy.duck';
import { GET } from '../../constants/verbs';
import { FAIRY } from '../../constants/endpoints';
import api from '../../services/api';

export function* getPlans() {
  try {
    const fairy = yield api({
      method: GET,
      url: FAIRY,
    });

    yield put({ fairy: fairy.data.pokemon, type: FairyType.GET_FAIRY_SUCCESS });
  } catch {
    yield put({ type: FairyType.GET_FAIRY_ERROR });
  }
}

export function* watchSagas() {
  yield takeLatest(FairyType.GET_FAIRY, getPlans);
}
