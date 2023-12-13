import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="burger-menu-navbar">
    <div className="sidebar-menu-ul d-flex flex-column align-self-end w-100">
      <NavLink to="/" activeClassName="active">
        HOME
      </NavLink>
      <NavLink to="/reserve" activeClassName="active">
        RESERVE MODEL
      </NavLink>
      <NavLink to="/user_reservations" activeClassName="active">
        MY RESERVATIONS
      </NavLink>
      <NavLink to="/addcar" activeClassName="active">
        ADD CARS
      </NavLink>
      <button type="button">DELETE CAR</button>
    </div>
  </div>
);

export default Navbar;
