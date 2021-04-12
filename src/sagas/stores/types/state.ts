import { IStore } from "./models";

export type StoresState = {
  data: IStore[];
  loading: boolean;
  errors: any;
};
