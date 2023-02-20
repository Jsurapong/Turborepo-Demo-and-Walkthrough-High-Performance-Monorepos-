import { useGetCrypto } from "./hooks";

import axios, { AxiosInstance } from "axios";

const instance = axios.create({
  timeout: 1000,
  headers: { "X-Custom-Header": "local" },
});

import { createProvider, ProviderProps } from "coin";

export type { ProviderProps };

const localProvider = createProvider({ useGetCrypto, instance });

export default localProvider;
