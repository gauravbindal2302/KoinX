import React, { useEffect, useState } from "react";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        // Extracting top 3 trending coins
        const topTrendingCoins = data.coins.slice(0, 3);
        setTrendingCoins(topTrendingCoins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="trending-coins rounded-lg bg-[#f8fafc] lg:p-6 p-4 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Trending Coins (24h)</h1>
      {trendingCoins.map((coin, index) => (
        <div className="trending flex justify-between" key={index}>
          <div className="trending-left flex items-center text-sm">
            <img
              src={coin.item.large}
              alt={coin.item.name}
              className="w-8 h-8 mr-2 rounded-full" // Adjust size as needed
            />
            <span>
              {coin.item.name} ({coin.item.symbol})
            </span>
          </div>
          <div className="trending-right">
            <div className="percentage">
              {coin.item.price_change_percentage_24h}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins;
