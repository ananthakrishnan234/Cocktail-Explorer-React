import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-item container">
          <div className="logo">
            <a href="/">
              <h1>DRINKS APP</h1>
            </a>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/drinks">Drinks</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/random">Random Drink</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;