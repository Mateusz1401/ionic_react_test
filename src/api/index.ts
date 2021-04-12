import axios, { AxiosResponse, AxiosError, Method } from 'axios';
import { isEmpty } from 'lodash';

const API_URL: string = 'localhost:3001';

interface Api {
  url: string;
  method: string;
}

interface ApiProps {
  api: Api;
  data?: any;
  params?: any;
}

const getRequestHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': '*/*',
});

const handleResponse = (response: AxiosResponse) => {
  return response;
};

const handleError = (error: AxiosError) => {
  const response = error.response;

  if (response) {
    return {
      ...response,
      error: {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
      }
    };
  }
};

const getConfig = ({ api, data, params }: ApiProps) => ({
  url: api.url,
  method: api.method as Method,
  baseURL: API_URL,
  headers: getRequestHeaders(),
  ...(!isEmpty(params)) ? { params } : {},
  ...(!isEmpty(data)) ? { data } : {}
});

export const fetch = (apiProps: ApiProps): any => {
  return axios(getConfig(apiProps))
    .then(handleResponse)
    .catch(handleError);
};