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
  console.log(user.user.stock.items);

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

                    {user.user.stock.items.map((index) => (
                      <tr key={index._id}>
                        <td>{index._id}</td>
                        <td>40</td>
                        <td>02/12/2020</td>
                        <td>$50</td>
                        <td>$270</td>
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
