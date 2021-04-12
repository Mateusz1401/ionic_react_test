import { Reducer } from "redux";
import { AuthActionType } from "./actionTypes";
import { StoresActions } from "./types/actions";
import { AuthState } from "./types/state";

const initialState: AuthState = {
  data: {
    token: ''
  },
  loading: false,
  errors: [],
};

export const authReducer: Reducer<AuthState, StoresActions> = (
  state = initialState,
  action
): AuthState => {
  switch (action.type) {
    case AuthActionType.AUTH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case AuthActionType.AUTH_DONE:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case AuthActionType.AUTH_FAILED:
      return {
        ...state,
        errors: action.errors,
        loading: false,
      };
    default:
      return state;
  }
};
