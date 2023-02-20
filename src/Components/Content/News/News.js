import React from "react";
export default function News() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "080d5391a5msh8465fd7b03a93c4p1725e9jsnb512929f94b5",
      "X-RapidAPI-Host": "yahoo-finance-india1.p.rapidapi.com",
    },
  };
  let company = "hdfc";
  fetch(
    `https://yahoo-finance-india1.p.rapidapi.com/market_india/news/?symbol=${company}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
