import axios, { AxiosRequestConfig } from "axios";
import { APP_BASE_URL } from "@/constants/common";

export const axiosInstance = axios.create({
  baseURL: APP_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // `refreshToken`을 여기서 전달받는 방식으로 변경합니다.
      const refreshToken = originalRequest.headers["x-refresh-token"];

      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const response = await axiosInstance.post(
          "/auth/refresh-token",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );

        const newAccessToken = response.data.accessToken;

        // 새로 발급된 accessToken으로 원래 요청을 다시 시도합니다.
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

const dispatcher = async (options: AxiosRequestConfig) => {
  const client = axiosInstance({ ...options });
  await client;
  return client;
};

export default dispatcher;
