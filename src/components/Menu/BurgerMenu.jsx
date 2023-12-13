import React from 'react';
// import { NavLink } from 'react-router-dom';
import 'boxicons';
import Logo from '../Sidebar/Logo';

const BurgerMenu = () => (
  <div className="burger-menu position-absolute top-0 start-0 w-100 px-4 py-4 z-1">

    <div className="d-flex justify-content-between align-items-center gap-5 w-100">
      <Logo />

      <div className="burger-menu-btn d-flex justify-content-end align-items-center">
        <button type="button" className="btn btn-dark">
          <box-icon name="menu" color="#ffffff" />
        </button>
      </div>
    </div>

  </div>
);

export default BurgerMenu;
