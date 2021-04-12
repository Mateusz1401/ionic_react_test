import { all } from 'redux-saga/effects';

import { getStoresSaga } from './sagas/stores/saga';
import { authUserSaga } from './sagas/auth/saga';

function* rootSaga() {
  yield all([
    authUserSaga,
    getStoresSaga
  ]);
}

export default rootSaga;