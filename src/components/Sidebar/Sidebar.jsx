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
      <div className="sidebar d-flex vh-100 position-relative">
        <div
          className={`sidebar-menu d-flex flex-column justify-content-between align-content-center py-4 bg-white ${
            sidebarVisible ? 'show' : 'hide'
          }`}
        >
          <div className="d-flex flex-column justify-content-between align-items-center gap-5">
            <Logo />
            <div className="sidebar-menu-ul d-flex flex-column align-self-end">
              <NavLink to="/home" className="sidebar-menu-navlink" activeclassname="active">
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
              <NavLink to="/delete-car" activeclassname="active">
                DELETE CAR
              </NavLink>
            </div>
          </div>

          <div className="">
            <SidebarIcons />
            <Footer />
          </div>
        </div>

        <div>
          <div
            className={`position-absolute d-flex flex-column justify-content-between align-content-center pt-4 pb-3 w-100 ps-4 ${
              sidebarVisible ? 'hide' : 'show'
            }`}
          >
            <Logo />
          </div>

          <button
            type="button"
            onClick={handleClick}
            className={`btn btn-dark align-self-end my-3 ${
              sidebarVisible ? 'sidebar-btn-container-show' : 'sidebar-btn-container-hidden mx-3'
            }`}
          >
            {sidebarVisible ? (
              <box-icon name="left-arrow" color="#fff" />
            ) : (
              <box-icon name="right-arrow" color="#fff" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
