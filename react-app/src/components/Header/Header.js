import React, { Component } from "react";
import Navigation from "./Navigation";

import './style.css';

class Header extends Component{
    render() {
        return (
            <div className="header">
                <Navigation />
            </div>
        )
    }
}

export default Header;
