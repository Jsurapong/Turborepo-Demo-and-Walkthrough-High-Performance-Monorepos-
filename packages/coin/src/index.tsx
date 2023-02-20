import axios, { AxiosInstance } from "axios";
import { useGetCrypto } from "./hooks";

const instance = axios.create({
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

type UseGetCryptoProps = { sym: "BTC" | "ETH" | "DOGE" };

export type ProviderProps = {
  instance: AxiosInstance;
  useGetCrypto: ({ sym }: UseGetCryptoProps) => readonly [number | null];
};

export const createProvider = (props: ProviderProps): ProviderProps => {
  return {
    instance: props.instance ?? instance,
    useGetCrypto: props.useGetCrypto ?? useGetCrypto,
  };
};
