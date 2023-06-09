import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Context-type': 'application/json' },
});

export const imgInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Context-type': 'multipart/form-data' },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (!config.headers.Authorization) {
      const modifiedConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
      return modifiedConfig;
    }
    return config;
  },
  (error) => {
    if (error) {
      console.log(error.message);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default { instance, imgInstance };
