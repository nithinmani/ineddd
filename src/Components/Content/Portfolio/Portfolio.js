import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import "./Portfolio.css";
function Portfolio() {
  // const isLoggedIn = props.location.state?.isLoggedIn;
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);
  const { isLoggedIn } = useContext(AppContext);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [stocks, setStocks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("token");
      setToken(token);
      try {
        const response = await fetch("http://localhost:1337/api/get-user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        });
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    }
    getUser();
  }, []);
  console.log(user.stocks);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "080d5391a5msh8465fd7b03a93c4p1725e9jsnb512929f94b5",
  //       "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
  //     },
  //   };

  //   fetch(
  //     "https://real-time-finance-data.p.rapidapi.com/stock-time-series?symbol=AAPL%3ANASDAQ&period=1D",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setStocks(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setStocks([]);
  //     });
  // }, []);
  // console.log(stocks.data.price);
  // const stockData = stocks.data;
  // console.log(stockData);
  function handleLogout() {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
    localStorage.clear();
    navigate("/register");
  }

  return (
    <div>
      {user && (
        <section className="mainpage">
          <div className="container">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
            <div className="row"></div>
            <div className="row">
              <h2 className="YourNamePort">{user.user.name}</h2>
              <p className="EmailPort">{user.user.email}</p>
              <div className="stock-holdings">
                <h3>Stock Holdings</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Company</th>
                      <th>Stock Volume</th>
                      <th>Purchase Date</th>
                      <th>cost</th>
                      <th>Current Value</th>
                    </tr>

                    {user.stocks.map((item, index) => (
                      <tr key={index}>
                        <td>{item.company}</td>
                        <td>{item.stockVolume}</td>
                        <td>{item.DOP}</td>
                        <td>{item.VOP}</td>
                        <td>
                          {/* {stocks.data &&
                            stocks.data.price &&
                            item.stockVolume * stocks.data.price} */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="/Addstock"
              >
                <button className="add-new-stock-button">Add Stock</button>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Portfolio;
