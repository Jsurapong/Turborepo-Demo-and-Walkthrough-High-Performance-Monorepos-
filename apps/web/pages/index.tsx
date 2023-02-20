import { useEffect, useState } from "react";

import { Button, Header, Hero, CoinSection } from "ui";

export default function Web() {
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);

  async function getBitcoinPrice() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    const data = await response.json();
    const price = data.bitcoin.usd;

    setBtc(price);
  }

  async function getEthereumPrice() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );
    const data = await response.json();
    const price = data.ethereum.usd;

    setEth(price);
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

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
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
      <CoinSection title="DOGE" image="./images/doge.jpeg" id="doge" />
    </>
  );
}
