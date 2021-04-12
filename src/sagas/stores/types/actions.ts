import { Action } from "redux";
import { StoresActionType } from "../actionTypes";
import { IStore } from "./models";

export interface StoresRequestAction
  extends Action<StoresActionType.GET_STORES_REQUEST> {}

export interface StoresDoneAction
  extends Action<StoresActionType.GET_STORES_DONE> {
  data: IStore[];
}

export interface StoresFailedAction
  extends Action<StoresActionType.GET_STORES_FAILED> {
  errors: any;
}

export type StoresActions =
  | StoresRequestAction
  | StoresDoneAction
  | StoresFailedAction;
