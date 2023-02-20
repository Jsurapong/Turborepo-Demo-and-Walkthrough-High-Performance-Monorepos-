import { CoinSection } from "ui";
import crypto from "cryptocompare";

const DogeSection = () => {
  const [doge] = crypto.useGetCrypto({ sym: "DOGE" });

  return (
    <CoinSection
      title={`DOGE : ${doge}`}
      image="./images/doge.jpeg"
      id="doge"
    />
  );
};

export default DogeSection;