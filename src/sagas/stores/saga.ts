import { put, takeEvery, call } from 'redux-saga/effects';

import api from '../../api/endpoints';
import { fetch } from '../../api';
import { StoresActionType } from './actionTypes';
import * as actions from './actions';

function* getStores() {
  try {
    const { data } = yield call(fetch, { api: api.getStores });

    yield put(actions.getStoresDone(data.results));
  } catch (err) {
    const { response } = err;
    const errors = response.data;
    yield put(actions.getStoresFailed(errors));
  }
}

export const getStoresSaga = takeEvery(StoresActionType.GET_STORES_REQUEST, getStores);