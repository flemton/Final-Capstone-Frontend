import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CarsCard from '../CarsCard/CarsCard';
import getCars from '../../redux/requests/getCars';

const Main = () => {
  const cars = useSelector((state) => state.car?.cars);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);

  const handleCarClick = (carId) => {
    navigate(`/car-details/${carId}`);
  };

  return (
    <div>
      <div>
        <div>
          <CarsCard cars={cars} onCarClick={handleCarClick} />
        </div>
      </div>
    </div>
  );
};

export default Main;
