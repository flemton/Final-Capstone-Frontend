import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import CarDetails from '../../components/CarDetails/CarDetails';

const Home = () => (
  <div className="d-flex justify-content-between align-items-center background-container vw-100">
    <div>
      <Sidebar />
    </div>

    <div className="mx-3">
      <CarDetails />
    </div>
  </div>
);

export default Home;
