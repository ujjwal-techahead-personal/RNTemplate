import {all, fork} from 'redux-saga/effects';
import {watchHomeSaga} from './homeSaga';

export function* rootSaga() {
    yield all([fork(watchHomeSaga)]);
}
