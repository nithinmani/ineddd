import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <section className="mainpage">
        <div className="container">
          <div className="row">
            <button className="logout-button">Logout</button>
          </div>
          <div className="row">
            <h2 className="YourNamePort">Your Name</h2>
            <p className="EmailPort">Email: your-email-id@example.com</p>
            <div className="stock-holdings">
              <h3>Stock Holdings</h3>
              <table>
                <tbody>
                  <tr>
                    <th>Company</th>
                    <th>Commodity</th>
                    <th>Value</th>
                    <th>Buy Rate</th>
                    <th>Date of Purchase</th>
                  </tr>
                  <tr>
                    <td>Company 1</td>
                    <td>Commodity 1</td>
                    <td>$100</td>
                    <td>$50</td>
                    <td>01/01/2022</td>
                  </tr>
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
    </div>
  );
}

export default Portfolio;
