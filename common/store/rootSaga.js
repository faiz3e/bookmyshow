import { all, fork } from 'redux-saga/effects';
import { movieListingSaga } from '../../screens/home/pages/LandingPage/saga';

export function* rootSaga() {
    yield all([fork(
      movieListingSaga
      )]);
}