import { AuthActionType } from "./actionTypes";
import { IAuth } from "./types/models";

import { AuthRequestAction, AuthDoneAction, AuthFailedAction } from './types/actions';

export const authRequest = (): AuthRequestAction => ({
  type: AuthActionType.AUTH_REQUEST
});

export const authDone = (data: IAuth): AuthDoneAction => ({
  type: AuthActionType.AUTH_DONE,
  data
});

export const authFailed = (errors: any): AuthFailedAction => ({
  type: AuthActionType.AUTH_FAILED,
  errors
});
