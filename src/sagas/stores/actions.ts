import { StoresActionType } from "./actionTypes";
import { IStore } from "./types/models";

import { StoresRequestAction, StoresDoneAction, StoresFailedAction } from './types/actions';

export const getStoresRequest = (): StoresRequestAction => ({
  type: StoresActionType.GET_STORES_REQUEST
});

export const getStoresDone = (data: IStore[]): StoresDoneAction => ({
  type: StoresActionType.GET_STORES_DONE,
  data
});

export const getStoresFailed = (errors: any): StoresFailedAction => ({
  type: StoresActionType.GET_STORES_FAILED,
  errors
});
