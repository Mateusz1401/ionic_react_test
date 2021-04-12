import { combineReducers } from 'redux';

import { StoresState } from './stores/types/state';
import { AuthState } from './auth/types/state';

import { storesReducer } from './stores/reducers';
import { authReducer } from './auth/reducers';

export interface ApplicationState {
  auth: AuthState;
  stores: StoresState;
}

export default combineReducers<ApplicationState>({
  auth: authReducer,
  stores: storesReducer
});