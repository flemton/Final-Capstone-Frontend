import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import CarDetails from '../../components/CarDetails/CarDetails';
import BurgerMenu from '../../components/Menu/BurgerMenu';

const Home = () => (
  <div className="d-flex justify-content-between align-items-center background-container">
    <div>
      <Sidebar />
      <BurgerMenu />
    </div>

    <div className="mx-3">
      <CarDetails />
    </div>
  </div>
);

export default Home;
