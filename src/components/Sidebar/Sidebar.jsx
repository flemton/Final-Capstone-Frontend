import React from 'react';
import 'boxicons';
import Logo from './Logo';
import SidebarIcons from './SidebarIcons';
import Footer from './Footer';

const Sidebar = () => (
  <>
    <div className="d-flex flex-column justify-content-between align-content-center vh-100 py-4 bg-white">
      <div className="d-flex flex-column justify-content-between align-items-center gap-5">
        <Logo />
        <ul className="list-unstyled text-center px-4">
          <li>RESERVE MODEL</li>
          <li>MY RESERVATIONS</li>
          <li>ADD CARS</li>
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
