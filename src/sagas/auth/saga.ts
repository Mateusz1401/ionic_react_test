import { put, takeEvery, call } from 'redux-saga/effects';

import { fetch } from '../../api';
import api from '../../api/endpoints';
import { AuthActionType } from './actionTypes';
import * as actions from './actions';

function* authUser() {
  try {
    const { data } = yield call(fetch, { api: api.auth });

    yield put(actions.authDone({ token: data.token }));
  } catch (err) {
    const { response } = err;
    const errors = response.data;
    yield put(actions.authFailed(errors));
  }
}

export const authUserSaga = takeEvery(AuthActionType.AUTH_REQUEST, authUser);