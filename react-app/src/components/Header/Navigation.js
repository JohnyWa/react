import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles.css';

class Navigation extends React.Component {
    render() {
        return(
            <ul className="nav-box">
                <li>
                    <NavLink
                        to="/"
                        exact
                        className="menu-item"
                        activeClassName="menu-item--active"
                    >
                        UseState
                    </NavLink>
                    <NavLink
                        to="/useEffect"
                        exact
                        className="menu-item"
                        activeClassName="menu-item--active"
                    >
                        UseEffect
                    </NavLink>
                    <NavLink
                        to="/useMemo"
                        exact
                        className="menu-item"
                        activeClassName="menu-item--active"
                    >
                        UseMemo
                    </NavLink>
                    <NavLink
                        to="/useRef"
                        exact
                        className="menu-item"
                        activeClassName="menu-item--active"
                    >
                        UseRef
                    </NavLink>
                    <NavLink
                        to="/useContext"
                        exact
                        className="menu-item"
                        activeClassName="menu-item--active"
                    >
                        UseContext
                    </NavLink>
                    <NavLink
                        to="/useCustomHooks"
                        exact
                        className="menu-item"
                        activeClassName="menu-item--active"
                    >
                        UseCustomHooks
                    </NavLink>
                </li>
            </ul>
        )
    }
}



export default Navigation;
