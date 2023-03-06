import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL as string;
const instance = axios.create({ baseURL: apiURL });

export class Api {
  public async get<TResponse = void>(path: string): Promise<TResponse> {
    const response = await instance.get<TResponse>(path);
    return response.data;
  }
}

export const api = new Api();
