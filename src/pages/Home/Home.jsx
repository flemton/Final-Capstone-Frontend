import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import CarDetails from '../../components/CarDetails/CarDetails';
import BurgerMenu from '../../components/Menu/BurgerMenu';
import Session from '../../components/Session/Session';

const Home = () => {
  const user = useSelector((state) => state.login.data);

  return !user?.success ? (
    <Session />
  ) : (
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
};

export default Home;
