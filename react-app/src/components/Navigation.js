import React from "react";
import {NavLink} from "react-router-dom";
import '../styles.css';

const Navigation = () => {
  return(
    <ul className="nav-box">
      <li>
        <NavLink
          to="/"
          exact
          className="menu-item"
          activeClassName="menu-item--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/useCallback"
          className="menu-item"
          activeClassName="menu-item--active"
        >
           UseCallback
        </NavLink>
      </li>
    </ul>
  )
};

export default Navigation
