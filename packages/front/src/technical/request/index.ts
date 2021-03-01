import axios, { AxiosInstance, } from 'axios';

const API_HOST = 'http://localhost:3002';
const API_PATH = '/api';
const API_TIMEOUT = 12000;

export class RequestHandler {
  private static instance: RequestHandler;
  private client: AxiosInstance;

  private constructor () {
    this.client = axios.create({
      baseURL: `${API_HOST}${API_PATH}`,
      timeout: API_TIMEOUT,
      validateStatus: (status: number) => status >= 200 && status < 500,
      withCredentials: true,
    })
  };

  public static getInstance(): RequestHandler {
    if(!RequestHandler.instance) {
      RequestHandler.instance = new RequestHandler();
    }
    return RequestHandler.instance;
  };
  
  public getClient(): AxiosInstance {
    return this.client;
  }
}

export const handler = RequestHandler.getInstance();

const requestClient = handler.getClient();

export default requestClient;