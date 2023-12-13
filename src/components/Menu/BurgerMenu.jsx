import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Sidebar/Logo';
import SidebarIcons from '../Sidebar/SidebarIcons';
import Footer from '../Sidebar/Footer';
import 'boxicons';

const BurgerMenu = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleClick = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <div className="burger-menu position-absolute top-0 w-100 d-flex flex-row-reverse justify-content-between align-items-start gap-5 z-2">
        <div className="d-flex justify-content-between align-items-start w-100">
          <div
            className={`d-flex flex-column justify-content-between align-content-center pt-4 pb-3 w-100 ps-4 ${
              sidebarVisible ? 'hide' : 'show'
            }`}
          >
            <Logo />

            <div className="d-flex flex-column align-items-center ps-5 mt-5">
              <h1 className="text-center font-weight-bold mt-3">Model 3</h1>
              <p className="text-nowrap text-muted">
                Order Online for
                {' '}
                <span className="text-decoration-underline">
                  Touchless Delivery
                </span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClick}
            className="btn btn-dark mt-3 mx-3"
          >
            {sidebarVisible ? <box-icon name="arrow-back" color="#fff" /> : <box-icon name="menu" color="#fff" />}
          </button>

          <div
            className={`sidebar-menu d-flex flex-column justify-content-between align-content-center pt-4 pb-3 bg-white ${
              sidebarVisible ? 'show' : 'hide'
            }`}
          >
            <div className="d-flex flex-column justify-content-between align-items-center gap-4">
              <Logo />
              <div className="sidebar-menu-ul d-flex flex-column align-self-start my-3">
                <NavLink to="/" className="sidebar-menu-navlink text-end" activeClassName="active">
                  HOME
                </NavLink>
                <NavLink
                  to="/reserve"
                  className="sidebar-menu-navlink text-end"
                  activeClassName="active"
                >
                  RESERVE MODEL
                </NavLink>
                <NavLink
                  to="/user_reservations"
                  className="sidebar-menu-navlink text-end"
                  activeClassName="active"
                >
                  MY RESERVATIONS
                </NavLink>
                <NavLink
                  to="/addcar"
                  className="sidebar-menu-navlink text-end"
                  activeClassName="active"
                >
                  ADD CARS
                </NavLink>
                <button type="button" className="sidebar-menu-navlink text-end">
                  DELETE CAR
                </button>
              </div>
            </div>
            <div>
              <SidebarIcons />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
