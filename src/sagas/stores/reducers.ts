import { Reducer } from "redux";
import { StoresActionType } from "./actionTypes";
import { StoresActions } from "./types/actions";
import { StoresState } from "./types/state";

const initialState: StoresState = {
  data: [],
  loading: false,
  errors: {},
};

export const storesReducer: Reducer<StoresState, StoresActions> = (
  state = initialState,
  action
): StoresState => {
  switch (action.type) {
    case StoresActionType.GET_STORES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case StoresActionType.GET_STORES_DONE:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case StoresActionType.GET_STORES_FAILED:
      return {
        ...state,
        errors: action.errors,
        loading: false,
      };
    default:
      return state;
  }
};
