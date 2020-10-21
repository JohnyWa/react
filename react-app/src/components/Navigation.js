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
          to="/about"
          className="menu-item"
          activeClassName="menu-item--active"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/posts"
          className="menu-item"
          activeClassName="menu-item--active"
        >
          Posts
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