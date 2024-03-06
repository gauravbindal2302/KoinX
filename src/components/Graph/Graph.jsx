import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Graph() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const container = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=true"
        );
        setBitcoinData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "width": "100%",
          "height": "100%",
          "container_id": "tradingview-widget-container"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <>
      <div className="graph-section bg-[#f8fafc] rounded-lg lg:p-6 p-4 flex flex-col lg:gap-6 gap-4">
        <div className="row-1 flex justify-between items-center">
          <div className="row-1-part-1 flex gap-3 items-center font-semibold tracking-wide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
              alt=""
              className="h-8 w-8 rounded-full"
            />
            <span className="text-xl">Bitcoin</span>
            <span className="text-[#64748b] text-sm">BTC</span>
          </div>
          <div className="row-1-part-2 bg-[#6b7280] text-[#f3f4f6] rounded-lg lg:px-4 px-2 py-1">
            Rank: #1
          </div>
        </div>
        <div className="row-2 flex flex-col tracking-wide border-b border-gray-300 pb-6">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-2xl">
              ${bitcoinData ? bitcoinData.bitcoin.usd.toLocaleString() : ""}
            </span>
            <span
              className={`font-semibold text-sm lg:px-2 lg:py-1 rounded-lg ${
                bitcoinData && bitcoinData.bitcoin.usd_24h_change < 0
                  ? "bg-red-100 text-red-500"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {bitcoinData
                ? bitcoinData.bitcoin.usd_24h_change.toFixed(2) + "%"
                : ""}
            </span>
            <span className="font-semibold text-[#64748b] text-sm">(24H)</span>{" "}
          </div>
          <span className="font-semibold">
            ₹{bitcoinData ? bitcoinData.bitcoin.inr.toLocaleString() : ""}
          </span>
        </div>
        <div className="row-3 relative h-[400px] overflow-hidden">
          <div
            className="tradingview-widget-container absolute inset-0"
            ref={container}
          >
            <div className="tradingview-widget-copyright"></div>
          </div>
        </div>
      </div>
    </>
  );
}
