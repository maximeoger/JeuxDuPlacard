import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_URL;
const API_PATH = '/api';
const API_TIMEOUT = 12000;

const axiosInstance = axios.create({
  baseURL: `${API_HOST}${API_PATH}`,
  timeout: API_TIMEOUT,
  validateStatus: (status: number) => status >= 200 && status < 500,
  withCredentials: true,
})

export default axiosInstance;