import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Sidebar/Logo';

const Session = () => (
  <div className="session-container">
    <div className="session-box bg-body-secondary shadow-6-strong w-75">
      <Logo />
      <h3 className="text-center">Welcome to Tesla Test Drive, to continue, please Login or register first</h3>
      <div className="d-flex justify-content-between w-50 gap-3">
        <Link to="/login" className="btn btn-outline-dark border-1">
          Login
        </Link>
        <Link to="/register" className="btn btn-dark border-1">
          Register
        </Link>
      </div>
    </div>
  </div>
);

export default Session;
