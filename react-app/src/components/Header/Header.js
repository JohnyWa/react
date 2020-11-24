import React, { Component } from "react";
import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import './style.css';

class Header extends Component{
    render() {
        return (
            <div className="header">
                <Navigation />
                <UserInfo />
            </div>
        )
    }
}

export default Header;
