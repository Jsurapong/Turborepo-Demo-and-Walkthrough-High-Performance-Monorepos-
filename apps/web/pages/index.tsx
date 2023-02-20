import Hero from "../components/Hero";
import EthSection from "../components/EthSection";
import DogeSection from "../components/DogeSection";

export default function Web() {
  return (
    <>
      {process.env.COIN_HERO_ENABLED && <Hero />}
      {process.env.COIN_ETH_ENABLED && <EthSection />}
      {process.env.COIN_DOGE_ENABLED && <DogeSection />}
    </>
  );
}
