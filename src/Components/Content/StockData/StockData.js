// import React, { useState, useEffect } from "react";

import React, { useState, useEffect } from "react";
import "./StockData.css";

export default function StockList() {
  const [stocks, setStocks] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "080d5391a5msh8465fd7b03a93c4p1725e9jsnb512929f94b5",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(
      "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
      options
    )
      .then((response) => response.json())
      .then((data) => setStocks(data))
      .catch((error) => console.error(error));
  }, []);

  const handleRefreshClick = () => {
    fetch(
      "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
      options
    )
      .then((response) => response.json())
      .then((data) => setStocks(data))
      .catch((error) => console.error(error));
  };
  const sortedStocks = stocks.sort((a, b) => b.pChange - a.pChange);
  const topGainers = sortedStocks.slice(0, 5);
  const topLosers = sortedStocks.slice(sortedStocks.length - 5).reverse();

  return (
    <div className="TopGainerPage">
      <button onClick={handleRefreshClick}>Refresh</button>
      <div className="row px-5 py-3">
      <h1>TOP GAINERS</h1>
      <table className="TopGainerTable">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Value</th>
            <th>%Change</th>
          </tr>
        </thead>
        <tbody>
          {topGainers.map((topGainers, index) => (
            <tr key={index}>
              <td>{topGainers.symbol}</td>
              <td>{topGainers.open}</td>
              <td>{topGainers.dayHigh}</td>
              <td>{topGainers.dayLow}</td>
              <td>{topGainers.lastPrice}</td>
              <td>{topGainers.pChange}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="row p-5">
      <h1>TOP LOSERS</h1>
      <table className="TopGainerTable">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Value</th>
            <th>%Change</th>
          </tr>
        </thead>
        <tbody>
          {topLosers.map((topLosers, index) => (
            <tr key={index}>
              <td>{topLosers.symbol}</td>
              <td>{topLosers.open}</td>
              <td>{topLosers.dayHigh}</td>
              <td>{topLosers.dayLow}</td>
              <td>{topLosers.lastPrice}</td>
              <td>{topLosers.pChange}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
