import { Button, Header, Hero, CoinSection } from "ui";

export default function Web() {
  return (
    <>
      <Header menus={[{ title: "BTC" }, { title: "ETH" }, { title: "DOGE" }]} />
      <Hero image="./images/btc.png" title={"BTC price"} />
      <CoinSection title="ETH" image="./images/eth.png" />
      <CoinSection title="DOGE" image="./images/doge.jpeg" />
    </>
  );
}
