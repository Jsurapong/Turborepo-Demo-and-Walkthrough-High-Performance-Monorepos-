import { useEffect, useState } from "react";
import axios from "axios";

import { Button, Header, Hero, CoinSection } from "ui";

export default function Web() {
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);
  const [doge, setDoge] = useState(0);

  async function getBitcoinPrice() {
    const response = await axios(
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD"
    );

    const price = response.data.USD;

    setBtc(price);
  }

  async function getEthereumPrice() {
    const response = await axios(
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
    );

    const price = response.data.USD;

    setEth(price);
  }

  async function getDogeCoinPrice() {
    const response = await axios(
      "https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD"
    );

    const price = response.data.USD;

    setDoge(price);
  }

  useEffect(() => {
    getBitcoinPrice();
    const interval = setInterval(() => {
      getBitcoinPrice();
    }, 10000);

    getEthereumPrice();
    const interval2 = setInterval(() => {
      getEthereumPrice();
    }, 10000);

    getDogeCoinPrice();
    const interval3 = setInterval(() => {
      getDogeCoinPrice();
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <>
      <Header
        menus={[
          {
            title: "BTC",
            onClick: () => {
              window.location.href = "#hero";
            },
          },
          {
            title: "ETH",
            onClick: () => {
              window.location.href = "#eth";
            },
          },
          {
            title: "DOGE",
            onClick: () => {
              window.location.href = "#doge";
            },
          },
        ]}
      />
      <Hero image="./images/btc.png" title={`BTC : ${btc}`} />
      <CoinSection title={`ETH : ${eth}`} image="./images/eth.png" id="eth" />
      <CoinSection
        title={`DOGE : ${doge}`}
        image="./images/doge.jpeg"
        id="doge"
      />
    </>
  );
}
