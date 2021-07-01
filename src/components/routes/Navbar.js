import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="card-header links">
      <ul className="nav nav-pills card-header-pills mx-auto">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link activa" : "nav-link"
            }
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/episodes"
            className={
              location.pathname === "/episodes" ? "nav-link activa" : "nav-link"
            }
          >
            Episodes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/deaths"
            className={
              location.pathname === "/deaths" ? "nav-link activa" : "nav-link"
            }
          >
            Deaths
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/quotes"
            className={
              location.pathname === "/quotes" ? "nav-link activa" : "nav-link"
            }
          >
            Quotes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
