import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Performance() {
  const [bitcoinData, setBitcoinData] = useState(null);

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

  return (
    <>
      <div className="performance-section bg-[#f8fafc] rounded-lg lg:p-6 p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Performance</h1>
        <div className="ranges flex flex-col gap-4">
          <div className="range-1 flex items-center justify-between">
            <div className="left flex flex-col lg:w-1/6 w-1/3 gap-1">
              <span className="text-[#475569] font-semibold">Today's Low</span>
              <span className="font-semibold text-sm">46,930.22</span>
            </div>
            <div className="middle lg:w-4/6 w-1/3">
              <input
                type="range"
                className="slider-middle w-full cursor-pointer"
              />{" "}
            </div>
            <div className="right flex flex-col lg:w-1/6 w-1/2 text-right gap-1">
              <span className="text-[#475569] font-semibold">Today's High</span>
              <span className="font-semibold text-sm">49,343.83</span>
            </div>
          </div>
          <div className="range-2 flex items-center justify-between">
            <div className="left flex flex-col lg:w-1/6 w-1/2 gap-1">
              <span className="text-[#475569] font-semibold">52W Low</span>
              <span className="font-semibold text-sm">16,930.22</span>
            </div>
            <div className="middle lg:w-4/6 w-1/2">
              <input
                type="range"
                className="slider-middle w-full cursor-pointer"
              />{" "}
            </div>
            <div className="right flex flex-col lg:w-1/6 w-1/2 text-right gap-1">
              <span className="text-[#475569] font-semibold">52W High</span>
              <span className="font-semibold text-sm">49,743.83</span>
            </div>
          </div>{" "}
        </div>

        <div className="fundamentals flex flex-col gap-2 lg:mt-4 mt-6">
          <h1 className="text-lg font-semibold">Fundamentals</h1>
          <div className="tables flex lg:flex-row flex-col lg:gap-8 text-sm font-semibold tracking-wide">
            <div className="table-1 lg:w-1/2">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-4 border-b border-[#9ca3af] text-[#6b7280]">
                      Bitcoin Price
                    </td>
                    <td className="py-4 text-right border-b border-[#9ca3af]">
                      $
                      {bitcoinData
                        ? bitcoinData.bitcoin.usd.toLocaleString()
                        : ""}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b border-[#9ca3af] text-[#6b7280]">
                      24h Low / 24h High
                    </td>
                    <td className="py-4 text-right border-b border-[#9ca3af]">
                      $16,382.07 / $14,874.12
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b border-[#9ca3af] text-[#6b7280]">
                      7d Low / 7d High
                    </td>
                    <td className="py-4 text-right border-b border-[#9ca3af]">
                      $16,382.07 / $14,874.12
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 border-b border-[#9ca3af] text-[#6b7280]">
                      Trading Volume
                    </td>
                    <td className="py-5 text-right border-b border-[#9ca3af]">
                      $
                      {bitcoinData
                        ? bitcoinData.bitcoin.usd_24h_vol.toLocaleString()
                        : ""}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 border-b border-[#9ca3af] text-[#6b7280]">
                      Market Cap Rank
                    </td>
                    <td className="py-5 text-right border-b border-[#9ca3af]">
                      #1
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-2 lg:w-1/2 flex justify-end">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-4 border-b border-[#9ca3af] text-[#6b7280]">
                      Market Cap
                    </td>
                    <td className="py-4 text-right border-b border-[#9ca3af]">
                      $
                      {bitcoinData
                        ? bitcoinData.bitcoin.usd_market_cap.toLocaleString()
                        : ""}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b border-[#9ca3af] text-[#6b7280]">
                      Market Cap Dominance
                    </td>
                    <td className="py-4 text-right border-b border-[#9ca3af]">
                      38.343%
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 border-b border-[#9ca3af] text-[#6b7280]">
                      Volume / Market Cap
                    </td>
                    <td className="py-4 text-right border-b border-[#9ca3af]">
                      0.0718
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 border-b border-[#9ca3af] text-[#6b7280]">
                      All-Time High
                    </td>
                    <td className="py-3 text-right border-b border-[#9ca3af] text-xs">
                      <div className="flex flex-col">
                        <div className="flex gap-2 justify-end">
                          <span className="font-bold">$69,044.77</span>
                          <span className="text-red-500 font-bold">-75.6%</span>
                        </div>
                        <p>Nov 10, 2021 (about 1 year)</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 lg:border-b lg:border-[#9ca3af] text-[#6b7280]">
                      All-Time Low
                    </td>
                    <td className="py-3 text-right lg:border-b lg:border-[#9ca3af] text-xs">
                      <div className="flex flex-col">
                        <div className="flex gap-2 justify-end">
                          <span className="font-bold">$67.81</span>
                          <span className="text-green-700 font-bold">
                            24,729.1%
                          </span>
                        </div>
                        <p>July 06, 2013 (over 9 years)</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
