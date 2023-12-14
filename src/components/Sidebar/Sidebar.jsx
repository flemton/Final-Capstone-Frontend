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
      <div className="sidebar d-flex vh-100">
        <div className={`sidebar-menu d-flex flex-column justify-content-between align-content-center py-4 bg-white ${sidebarVisible ? 'show' : 'hide'}`}>
          <div className="d-flex flex-column justify-content-between align-items-center gap-5">
            <Logo />
            <div className="sidebar-menu-ul d-flex flex-column align-self-end">
              <NavLink to="/home" className="sidebar-menu-navlink" activeClassName="active">
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

          <div className="">
            <SidebarIcons />
            <Footer />
          </div>
        </div>

        <button type="button" onClick={handleClick} className={`sidebar-btn btn btn-dark align-self-end my-3 ${sidebarVisible ? 'mx-0' : 'mx-3'}`}>
          {sidebarVisible ? <box-icon name="left-arrow" color="#fff" /> : <box-icon name="right-arrow" color="#fff" />}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
