import React from 'react';
import { NavLink } from 'react-router-dom';
import 'boxicons';
import Logo from './Logo';
import SidebarIcons from './SidebarIcons';
import Footer from './Footer';

const Sidebar = () => (
  <>
    <div className="sidebar d-flex flex-column justify-content-between align-content-center vh-100 py-4 bg-white">
      <div className="d-flex flex-column justify-content-between align-items-center gap-5">
        <Logo />
        <ul className="sidebar-ul text-center align-self-end">
          <li>
            <NavLink to="/" activeClassName="active">HOME </NavLink>
          </li>
          <li>
            <NavLink to="/reserve" activeClassName="active">RESERVE MODEL </NavLink>
          </li>
          <li>
            <NavLink to="/user_reservations" activeClassName="active">MY RESERVATIONS</NavLink>
          </li>
          <li>
            <NavLink to="/addcar" activeClassName="active">ADD CARS</NavLink>
          </li>
          <li>
            <button type="button">DELETE CAR</button>
          </li>
        </ul>
      </div>

      <div className="">
        <SidebarIcons />
        <Footer />
      </div>
    </div>
  </>
);

export default Sidebar;
