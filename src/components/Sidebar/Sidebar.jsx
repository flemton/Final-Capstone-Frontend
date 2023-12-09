import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons';
import Logo from './Logo';
import SidebarIcons from './SidebarIcons';
import Footer from './Footer';

const Sidebar = () => (
  <>
    <div className="d-flex flex-column justify-content-between align-content-center vh-100 py-4 bg-white">
      <div className="d-flex flex-column justify-content-between align-items-center gap-5">
        <Logo />
        <ul className="sidebar-ul text-center">
          <li>
            <Link to="/reserve">RESERVE MODEL </Link>
          </li>
          <li>
            <Link to="/user_reservations">MY RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/addcar">ADD CARS</Link>
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
