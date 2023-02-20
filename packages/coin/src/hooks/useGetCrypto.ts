import axios from "axios";
import { useEffect, useState } from "react";

type UseGetCryptoProps = { sym: "BTC" | "ETH" | "DOGE" };

export const useGetCrypto = ({ sym }: UseGetCryptoProps) => {
    const [usd, setUsd] = useState<null | number>(null);

    const fetch = async () => {
        const response = await axios(
            `https://min-api.cryptocompare.com/data/price?fsym=${sym}&tsyms=USD`
        );

        const price = response.data.usd ?? null;

        setUsd(price);
    };

    useEffect(() => {
        fetch();

        const interval = setInterval(() => {
            fetch();
        }, 10000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return [usd] as const;
};
