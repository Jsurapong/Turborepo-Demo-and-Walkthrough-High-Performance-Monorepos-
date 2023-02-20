import axios, { AxiosInstance } from "axios";

const instance = axios.create({
  baseURL: "https://min-api.cryptocompare.com/data/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export type Provider = {
  instance: AxiosInstance;
};
