import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserTie } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/navlogo.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const [activeLink, setActiveLink] = useState(false);

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="navbar border navbar-expand-lg navbar-dark bg-white px-md-3 navbar fixed-top">
      <Link className="navbar-brand d-none d-md-block" to="/">
        <img src={logo} alt="logo" width="40" height="40" className="mr-2" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end px-5"
        id="navbarNav"
      >
        <ul className="navbar-nav align-items-center ml-auto">
          <li className="nav-item">
            <Link
              className={`nav-link text-dark fw-bold ${
                activeLink === "/" ? "active" : ""
              }`}
              to="/"
              onClick={() => handleLinkClick("/")}
            >
              <FontAwesomeIcon icon={faHouse} /> Homepage
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link text-dark fw-bold ${
                activeLink === "/tenent" ? "active" : ""
              }`}
              to="/tenent"
              onClick={() => handleLinkClick("/tenent")}
            >
              Tenent
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link text-dark fw-bold ${
                activeLink === "/management" ? "active" : ""
              }`}
              to="/management"
              onClick={() => handleLinkClick("/management")}
            >
              Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FontAwesomeIcon className="text-brand fa-2x" icon={faUserTie} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
