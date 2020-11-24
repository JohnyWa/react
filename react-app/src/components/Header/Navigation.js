import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles.css';

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
                to="/login"
                exact
                className="menu-item"
                activeClassName="menu-item--active"
            >
                Login
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/registration"
                exact
                className="menu-item"
                activeClassName="menu-item--active"
            >
                Registration
            </NavLink>
        </li>
      <li>
        <NavLink
          to="/contacts"
          className="menu-item"
          activeClassName="menu-item--active"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  )
};

export default Navigation
