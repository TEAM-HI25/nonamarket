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

instance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    /* eslint-disable-next-line no-param-reassign */
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }
  return config;
});

export default { instance };
