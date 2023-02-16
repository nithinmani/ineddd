import React from 'react'
import './Home.css'

function Home() {
  var res ;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '080d5391a5msh8465fd7b03a93c4p1725e9jsnb512929f94b5',
      'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
    }
  };
  
  fetch('https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050', options)
    .then(response => response.json())
    .then(response => {
      console.log(response["1"])
      res = response["1"]
    })
    .catch(err => console.error(err));
  // var open;
  // fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=30min&apikey=LNR75DOUABSD5QV6")
  // .then(resp => {
  //   if (!resp.ok) {
  //     throw new Error(`HTTP error! status: ${resp.status}`);
  //   }
  //   return resp.json();
  // })
  // .then(data => {
  //   const timeSeriesData = data["Time Series (5min)"];
  //   let latest = timeSeriesData[Object.keys(timeSeriesData)[Object.keys(timeSeriesData).length - 1]]
  //   console.log(latest["1. open"]);
  //   open = latest["1. open"];
  //   console.log(open);
  // })
  // .catch(error => {
  //   console.error(`Error while fetching data: ${error.message}`);
  // }); 

 

  return (
    
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
         <h1 className='title'>Market Forecast</h1>
         <h2>
         Beware of small expenses,small holes can sink large ships.
       </h2>
       <div className='search'>
       <input className='searchBox' type={'search'} placeholder={res}></input>

         <button className='button'>Search</button>
         </div>
       </div>
       <div className='col-lg-6 order-1 order-lg-2 ' data-aos="fade-left">
         <img className='mainImg' src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1060&t=st=1676225837~exp=1676226437~hmac=d31e1b70bb4ba74d0bd1d084488cf1c0b756117303b85899b3beb1e14ec805c3" alt="" />
         </div>
    
    
    </div>
    </div>
  )
}

export default Home