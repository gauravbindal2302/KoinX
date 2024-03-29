import React from "react";
import Navbar from "../Navbar/Navbar";
import Graph from "../Graph/Graph";
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
      <Navbar />
      <div className="bitcoins-page w-screen bg-[#e2e8f0] flex lg:flex-row flex-col p-4 lg:gap-4 lg:p-10">
        <div className="lg:w-3/4 w-full flex flex-col gap-4">
          <Graph />
          <Performance />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>{" "}
        <div className="lg:w-1/4 flex flex-col gap-6">
          <GetStarted />
          <TrendingCoins />
        </div>
      </div>{" "}
      <YouMayAlsoLike />
    </>
  );
}
