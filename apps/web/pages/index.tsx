import { Button, Header, Hero, CoinSection } from "ui";

export default function Web() {
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
      <Hero image="./images/btc.png" title={"BTC price"} />
      <CoinSection title="ETH" image="./images/eth.png" id="eth" />
      <CoinSection title="DOGE" image="./images/doge.jpeg" id="doge" />
    </>
  );
}
