import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => (
  <div className="background-container container-fluid">
    <div className="row">
      <div className="col-3 col-3-md bg-white d-flex flex-column justify-content-between rigth-border side-hide">
        <Sidebar />
      </div>
    </div>
  </div>
);

export default Home;
