import React, { Component } from 'react';
import {link} from "react-router-dom";

class Header extends React.Component {
    state = {};
    render() { 
        return (
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/settings">Settings</Link>
            </div>
        );
    }
}
 
export default Header;