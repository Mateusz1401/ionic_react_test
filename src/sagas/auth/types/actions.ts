import { Action } from "redux";
import { AuthActionType } from "../actionTypes";
import { IAuth } from "./models";

export interface AuthRequestAction
  extends Action<AuthActionType.AUTH_REQUEST> {}

export interface AuthDoneAction
  extends Action<AuthActionType.AUTH_DONE> {
  data: IAuth;
}

export interface AuthFailedAction
  extends Action<AuthActionType.AUTH_FAILED> {
  errors: any;
}

export type StoresActions =
  | AuthRequestAction
  | AuthDoneAction
  | AuthFailedAction;
