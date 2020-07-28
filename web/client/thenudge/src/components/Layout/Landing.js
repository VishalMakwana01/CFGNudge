import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
      <div id="body">
      <div id="body-header">
      </div>
      <div className="container mt-0 pt-0 text-center">
        <div className="jumbotron jumbotron-fluid mt-0 pt-4" style={{background:'transparent'}}>
            <h1 className="display-4">Welcome to Gurukul</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <hr />
          <Link to="/login" className="btn btn-secondary mb-0">
            Login
          </Link>
        </div>
      </div>
      </div>
    );
}

export default Landing;
