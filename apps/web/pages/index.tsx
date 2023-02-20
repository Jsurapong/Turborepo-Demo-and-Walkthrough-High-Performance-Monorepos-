import { useEffect, useState } from "react";

import crypto from "cryptocompare";

import { Header, Hero, CoinSection } from "ui";

export default function Web() {
  const [btc] = crypto.useGetCrypto({ sym: "BTC" });
  const [eth] = crypto.useGetCrypto({ sym: "ETH" });
  const [doge] = crypto.useGetCrypto({ sym: "DOGE" });

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
