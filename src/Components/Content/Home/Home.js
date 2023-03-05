import React from "react";
import StockData from "../StockData/StockData";
import "./Home.css";
import News from '../News/News';
import { AppContext } from "../../../App";
import { useContext,useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';



function Home() {
  var company;

  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    console.log(token);
  }, []);

  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "080d5391a5msh8465fd7b03a93c4p1725e9jsnb512929f94b5",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

  fetch(
    "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
    options,
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response["50"]);
      console.log(response);
    })
    .catch((err) => console.error(err));
 
  

  return (
    <div className="HomePage">
      <div className="row">
        <div className="col-lg-6 p-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 className="title">MARKET FORECAST</h1>
          <TypeAnimation
      sequence={[
        'Beware of small expenses', // Types 'One'
        1000, // Waits 1s
        'Beware of small expenses,small holes can sink large ships.', // Deletes 'One' and types 'Two'
        
        () => {
          // console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em',fontWeight:"bolder" }}
    />
          <div className="search">
            <div className="form-group">
               <input type={"search"} list="options" className="form-control searchBox" placeholder="Search..." 
               />
               <datalist id="options">
               <option value="TCS"/>
               <option value="APPL"/>
               <option value="MSFT"/>
               <option value="ECOMPT"/>
               <option value="CTS"/>
               </datalist>
            </div>
            <button 
            className="button btn-outline-success searchButtonHome">Search</button>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 " data-aos="fade-left">
          <img
            className="mainImg"
            src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1060&t=st=1676225837~exp=1676226437~hmac=d31e1b70bb4ba74d0bd1d084488cf1c0b756117303b85899b3beb1e14ec805c3"
            alt=""
          />
        </div>
      </div>
      <StockData/>
  
    </div>
  );
}

export default Home;
