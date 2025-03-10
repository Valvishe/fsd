/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

import { PREFIX } from "../../const/ApiUrl";

import { AxiosInterceptorProps } from "./AxiosInterceptor.props";
import { debounceRequests } from "./DebounceRequests";
import { handleRefreshToken } from "./HandleRefreshToken";

export const axiosInterceptor = (props: AxiosInterceptorProps) => {
  const {
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    setRefreshToken,
    removeAuthTokens,
    getIsRefreshSent,
    setIsRefreshSent,
  } = props;
  axios.defaults.baseURL = PREFIX;
  axios.defaults.headers["Content-Type"] = "application/json";

  axios.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();
      const isOnRefresh = getIsRefreshSent();

      if (accessToken && !isOnRefresh) {
        config.headers.authorization = `Bearer ${accessToken}`;
      }
      if (refreshToken && isOnRefresh) {
        config.headers.authorization = `Bearer ${refreshToken}`;
      }
      return config;
    },
    (error) =>
      // eslint-disable-next-line prefer-promise-reject-errors
      Promise.reject(
        `Произошла ошибка при использовании accessToken - ${error}, accessToken = ${getAccessToken()}`
      )
  );

  axios.interceptors.response.use(
    (response) => response,
    // eslint-disable-next-line consistent-return
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        // eslint-disable-next-line no-underscore-dangle
        originalRequest._retry = true;
        const config: AxiosRequestConfig = error?.config;
        const isSentToRefresh = getIsRefreshSent();

        if (isSentToRefresh) {
          const newConfig = await debounceRequests<AxiosRequestConfig>(
            config,
            getIsRefreshSent,
            getAccessToken,
            200,
            5000
          );
          return axios(newConfig);
        }
        setIsRefreshSent(true);

        try {
          const oldRefreshToken = getRefreshToken();
          const [accessToken, refreshToken] = await handleRefreshToken(oldRefreshToken);
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          if (config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
          return axios(config);
        } catch (error) {
          removeAuthTokens();
        } finally {
          setIsRefreshSent(false);
        }
      }
    }
  );
};
