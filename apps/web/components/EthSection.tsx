import { CoinSection } from "ui";
import crypto from "local";

const EthSection = () => {
  const [eth] = crypto.useGetCrypto({ sym: "ETH" });

  return (
    <CoinSection title={`ETH : ${eth}`} image="./images/eth.png" id="eth" />
  );
};

export default EthSection;
