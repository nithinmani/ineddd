import React from "react";
import "./Addstock.css";

function Addstock() {
  return (
    <div className="row"
      style={{
       
        width: "100%",
        height: "100%",
        padding: "20px",
      }}
    >
      
      <div className="AddStockPage col-lg-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <p className="text-uppercase fw-bold mb-3 text-font">Name</p>
                <div className="row">
                  <div className="col-md-4">
                    <p>Name of user</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p className="text-uppercase fw-bold mb-3 text-font">
                      Email
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>your-email@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <p className="text-uppercase h4 text-font">Company:</p>
                <div className="row">
                  <select className="select p-3">
                    <option value={1}>TCS</option>
                    <option value={2}>GOOGLE</option>
                    <option value={3}>APPLE</option>
                    <option value={4}>AMAZON</option>
                    <option value={5}>SAMSUNG</option>
                    <option value={6}>INFOSYS</option>
                    <option value={7}>EY</option>
                    <option value={8}>IBS</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0 text-font text-uppercase">Stock Details</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form11Example1">
                          Date of Purchase
                        </label>
                        <input
                          type="date"
                          id="form11Example1"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Text input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form11Example3">
                      Stock value on the date of purchase
                    </label>
                    <input
                      type="number"
                      id="form11Example3"
                      className="form-control"
                    />
                  </div>
                  {/* Text input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form11Example4">
                      Volume of stock purchased
                    </label>
                    <input
                      type="input"
                      id="form11Example4"
                      className="form-control"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn button-order col-md-10 bg-success text-white"
                    >
                      <a
                        href="portfolio.html"
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        Add stock
                      </a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* <div className="col-lg-2 order-1 order-lg-2 " >
            <img className="SideImg" src="https://img.freepik.com/free-vector/business-man-has-idea-with-gold-coin-his-hand_1150-35033.jpg?w=740&t=st=1676425493~exp=1676426093~hmac=730d3fe51cc3dbc67f53bbe8467864b211d5caeba28529cf6b6e1d3440d90296" alt="" />
      </div> */}
      {/*Section: Design Block*/}
    </div>
  );
}

export default Addstock;
