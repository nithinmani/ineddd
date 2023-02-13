import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='content'>
        <div className='left'>
         <h1 className='title'>Market Forecast</h1>
         <h2>
         Beware of small expenses,small holes can sink large ships.
       </h2>
       <div className='search'>
       <input className='searchBox' type={'search'} placeholder="search"></input>

         <button className='button'>Search</button>
         </div>
       </div>
       <div className='right'>
         <img src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1060&t=st=1676225837~exp=1676226437~hmac=d31e1b70bb4ba74d0bd1d084488cf1c0b756117303b85899b3beb1e14ec805c3" alt="" />
         </div>
    
    
    </div>
    </div>
  )
}

export default Home