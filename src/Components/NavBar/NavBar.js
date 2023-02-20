import React from "react";
import "./NavBar.css";
import INEDLOGO from './logo.jpg';

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dde8ff">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img className="logo" src={INEDLOGO} alt="" /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 NavB">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Tutorial">Tutorial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">Profile</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success SearchB" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
