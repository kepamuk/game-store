import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { apiBaseURL } from '../constants/api';

const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig, unknown, AxiosError> =>
  async ({ url, method, data, params }) => {
    try {
      Axios.defaults.baseURL = apiBaseURL;
      const result = await Axios({
        url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error,
      };
    }
  };

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
