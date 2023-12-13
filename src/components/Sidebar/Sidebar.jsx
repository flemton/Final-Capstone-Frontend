import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import SidebarIcons from './SidebarIcons';
import Footer from './Footer';
import 'boxicons';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="d-flex vh-100">
        <div className={`sidebar d-flex flex-column justify-content-between align-content-center py-4 bg-white ${sidebarVisible ? 'show' : 'hide'}`}>
          <div className="d-flex flex-column justify-content-between align-items-center gap-5">
            <Logo />
            <ul className="sidebar-ul text-center align-self-end">
              <li>
                <NavLink to="/" className="sidebar-navlink" activeClassName="active">
                  HOME
                  {' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="/reserve" activeClassName="active">
                  RESERVE MODEL
                  {' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="/user_reservations" activeClassName="active">
                  MY RESERVATIONS
                </NavLink>
              </li>
              <li>
                <NavLink to="/addcar" activeClassName="active">
                  ADD CARS
                </NavLink>
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

        <button type="button" onClick={handleClick} className={`sidebar-btn btn btn-primary align-self-end my-3 ${sidebarVisible ? 'mx-0' : 'mx-3'}`}>
          {sidebarVisible ? <box-icon type="solid" name="left-arrow" /> : <box-icon type="solid" name="right-arrow" />}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
