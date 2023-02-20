import { useEffect, useState } from "react";

import { useGetCrypto } from "local";

import { Header, Hero, CoinSection } from "ui";

export default function Web() {
  const [btc] = useGetCrypto({ sym: "BTC" });
  const [eth] = useGetCrypto({ sym: "ETH" });
  const [doge] = useGetCrypto({ sym: "DOGE" });

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
