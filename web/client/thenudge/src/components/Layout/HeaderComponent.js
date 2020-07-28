import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
    render() {
        return (
          <div className="navbar navbar-expand-md navbar-dark bg-dark box-shadow-down-black">
            <div className="container">
              <Link to="/" className="navbar-brand">
                <img src="https://global-uploads.webflow.com/5d89ca3decc11853f33732a0/5dc97719673bd991e9f5f361_logo%20TheNudge%20white%20and%20Yellow.png" height="20px"/>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default NavbarComponent;
