import { Hero as HeroUI, CoinSection } from "ui";
import crypto from "cryptocompare";

const Hero = () => {
  const [btc] = crypto.useGetCrypto({ sym: "BTC" });

  return <HeroUI image="./images/btc.png" title={`BTC : ${btc}`} />;
};

export default Hero;
