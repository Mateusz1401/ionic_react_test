import { IAuth } from "./models";

export type AuthState = {
  data: IAuth;
  loading: boolean;
  errors: {};
};
