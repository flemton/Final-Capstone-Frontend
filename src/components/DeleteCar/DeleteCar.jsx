import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Session from '../Session/Session';
import getCars from '../../redux/requests/getCars';
import CarsCard from '../CarsCard/CarsCard';

const DeleteCar = () => {
  const user = useSelector((state) => state.login.data);

  const cars = useSelector((state) => state.car?.cars);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);

  const handleCarClick = (carId) => {
    navigate(`/car-details/${carId}`);
  };

  return !user?.success ? (
    <Session />
  ) : (
    <div className="d-flex justify-content-between align-items-center background-container">
      <div>
        <Sidebar />
      </div>

      <CarsCard cars={cars} onCarClick={handleCarClick} />
    </div>
  );
};

export default DeleteCar;
