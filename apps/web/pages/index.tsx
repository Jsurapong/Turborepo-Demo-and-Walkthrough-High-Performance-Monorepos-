import { useEffect, useState } from "react";

import { Button, Header, Hero, CoinSection } from "ui";

export default function Web() {
  const [btc, setBtc] = useState(0);

  async function getBitcoinPrice() {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
    );
    const data = await response.json();
    const price = data.bpi.USD.rate_float;
    const time = new Date(data.time.updated).toLocaleTimeString();

    setBtc(price);

    console.log(`Time : ${time}`, `The current price of Bitcoin is: $${price}`);
  }
  useEffect(() => {
    getBitcoinPrice();
    const interval = setInterval(() => {
      getBitcoinPrice();
    }, 10000);

    return () => clearInterval(interval);
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
      <CoinSection title="ETH" image="./images/eth.png" id="eth" />
      <CoinSection title="DOGE" image="./images/doge.jpeg" id="doge" />
    </>
  );
}
