import {takeLatest} from 'redux-saga/effects';

import {types} from '../actionTypes';
import {dummySaga} from './dummySaga';

export function* watchHomeSaga() {
    yield takeLatest(types.DUMMY_SAGA, dummySaga);
}
