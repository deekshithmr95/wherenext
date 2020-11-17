import { all } from 'redux-saga/effects';
import { HomeSaga } from '../Views/Home/homeSaga';

export function* rootSaga() {
  yield all([HomeSaga()]);
}
