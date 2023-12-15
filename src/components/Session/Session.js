import React from 'react';
import { Link } from 'react-router-dom';
import './session.css';

const Session = () => (
  <div className="container">
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h3 className="mb-5">Welcome to Tesla Test Drive, to continue, please Login or register first</h3>
        <div className="mb-3 btn-container justify-content-center align-items-center">
          <Link to="/login" className="btn btn-primary me-3">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Session;
