import { Hero as HeroUI } from "ui";
import crypto from "local";

const Hero = () => {
  const [btc] = crypto.useGetCrypto({ sym: "BTC" });

  return <HeroUI image="./images/btc.png" title={`BTC : ${btc}`} />;
};

export default Hero;
