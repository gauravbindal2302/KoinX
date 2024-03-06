import React, { useEffect, useState } from "react";
import axios from "axios";

export default function YouMayAlsoLike() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const topTrendingCoins = response.data.coins;
        setTrendingCoins(topTrendingCoins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <>
      <div className="YouMayAlsoLike bg-[#f8fafc] rounded-lg lg:p-12 p-5 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">You May Also Like</h1>
        <div className="you-may-also-like flex overflow-x-auto gap-2 lg:pb-3 pb-2">
          {trendingCoins.map((coin, index) => (
            <div
              className="card flex flex-col gap-2 border px-4 py-4 rounded-lg min-w-[180px]"
              key={index}
            >
              <div className="row-1 flex justify-between items-center">
                <div className="row-1-part-1 flex gap-2">
                  <img
                    src={coin.item.large}
                    alt={coin.item.symbol}
                    className="h-6 w-6 rounded-full"
                  />{" "}
                  <span className="font-semibold">{coin.item.symbol}</span>
                </div>
                <span className="font-semibold text-xs bg-green-100 p-1 rounded-lg">
                  +0.52%
                </span>{" "}
              </div>
              <div className="row-2 text-lg text-center font-bold">
                {coin.item.data.price}
              </div>
              <div className="row-3 flex justify-center">
                <img
                  src="https://www.coingecko.com/coins/28600/sparkline.svg"
                  alt={coin.item.symbol}
                  className="rounded-lg mt-4"
                />
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-semibold">Trending Coins</h1>{" "}
        <div className="trending-coins flex overflow-x-auto gap-2 lg:pb-3 pb-2">
          {trendingCoins.map((coin, index) => (
            <div
              className="card flex flex-col gap-2 border px-4 py-4 rounded-lg min-w-[180px]"
              key={index}
            >
              <div className="row-1 flex justify-between items-center">
                <div className="row-1-part-1 flex gap-2">
                  <img
                    src={coin.item.large}
                    alt={coin.item.symbol}
                    className="h-6 w-6 rounded-full"
                  />{" "}
                  <span className="font-semibold">{coin.item.symbol}</span>
                </div>
                <span className="font-semibold text-xs bg-green-100 p-1 rounded-lg">
                  +0.52%
                </span>{" "}
              </div>
              <div className="row-2 text-lg text-center font-bold">
                {coin.item.data.price}
              </div>
              <div className="row-3 flex justify-center">
                <img
                  src="https://www.coingecko.com/coins/28600/sparkline.svg"
                  alt={coin.item.symbol}
                  className="rounded-lg mt-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
