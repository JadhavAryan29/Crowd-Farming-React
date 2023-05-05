/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../logo.svg";
import phone from "../../phone.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#132743" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand  text-white text-uppercase " href="#">
          <img src={logo} alt="logo" style={{ width: "30px" }} />
          &nbsp; Crowd Farming
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: "#fff" }} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                class="nav-link text-white text-uppercase active"
                aria-current="page"
                to="/"
              >
                🏛️ &nbsp; Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase" to="/news">
                🗞️ &nbsp; News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase"
                to="/contact"
              >
                <img src={phone} alt="phone" style={{ width: "1rem" }} /> &nbsp;
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ backgroundColor: "#e4f1fe" }}
            />
            <button
              className="btn btn-outline-#113f67"
              style={{ backgroundColor: "#e4f1fe" }}
              type="submit"
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
