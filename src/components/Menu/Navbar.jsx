import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="burger-menu-navbar">
    <div className="sidebar-menu-ul d-flex flex-column align-self-end w-100">
      <NavLink to="/home" activeclassname="active">
        HOME
      </NavLink>
      <NavLink to="/reserve" activeclassname="active">
        RESERVE MODEL
      </NavLink>
      <NavLink to="/user_reservations" activeclassname="active">
        MY RESERVATIONS
      </NavLink>
      <NavLink to="/addcar" activeclassname="active">
        ADD CARS
      </NavLink>
      <button type="button">DELETE CAR</button>
    </div>
  </div>
);

export default Navbar;
