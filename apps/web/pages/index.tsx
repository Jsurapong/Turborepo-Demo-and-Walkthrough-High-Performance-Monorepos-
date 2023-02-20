import { Button, Header, Hero } from "ui";

export default function Web() {
  return (
    <>
      <Header menus={[{ title: "BTC" }, { title: "ETH" }]} />
      <Hero image="./images/btc.png" title={"BTC price"} />
    </>
  );
}
