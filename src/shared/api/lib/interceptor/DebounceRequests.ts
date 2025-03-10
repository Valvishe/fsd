import { AxiosRequestConfig } from "axios";

export async function debounceRequests<T extends AxiosRequestConfig<unknown>>(
  config: T,
  checker: () => boolean,
  getterAccess: () => string | null,
  timeout: number,
  maxTimeout: number
): Promise<T> {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const isRefreshing = checker();
      if (!isRefreshing) {
        const newConfig: T = config;
        const newAccessToken = getterAccess();
        if (newConfig.headers) {
          newConfig.headers.Authorization = `Bearer ${newAccessToken}`;
        }
        resolve(newConfig);
        clearInterval(interval);
      }
    }, timeout);
    setTimeout(() => {
      clearInterval(interval);
      reject(new Error("Error: MAX_TIMEOUT - превышено время ожидания обновления refreshToken"));
    }, maxTimeout);
  });
}
