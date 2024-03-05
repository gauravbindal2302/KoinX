import React from "react";
import Navbar from "../Navbar/Navbar";
import Performance from "../Performance/Performance";
import Sentiment from "../Sentiment/Sentiment";
import AboutBitcoin from "../AboutBitcoin/AboutBitcoin";
import Tokenomics from "../Tokenomics/Tokenomics";
import Team from "../Team/Team";
import YouMayAlsoLike from "../YouMayAlsoLike/YouMayAlsoLike";
import TrendingCoins from "../TrendingCoins/TrendingCoins";
import GetStarted from "../GetStarted/GetStarted";

export default function Bitcoins() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="bitcoins-page w-screen bg-[#e2e8f0] flex gap-4 lg:p-12">
        <div className="lg:w-3/4 flex flex-col gap-4">
          {/*<BitcoinGraph />*/}
          <Performance />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
          <YouMayAlsoLike />
        </div>{" "}
        <div className="lg:w-1/4 flex flex-col gap-6">
          <GetStarted />
          <TrendingCoins />
        </div>
      </div>
    </>
  );
}
