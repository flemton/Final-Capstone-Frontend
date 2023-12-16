/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CarDetails from '../CarDetails/CarDetails';
import deleteCar from '../../redux/requests/deleteCar';
import './CarsCard.css';

const CarsCard = ({ cars }) => {
  const dispatch = useDispatch();
  const deleting = useSelector((state) => state.car.deleting);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleGoBack = () => {
    setSelectedCar(null);
  };

  return (
    <div>
      {!selectedCar && (
        <div>
          <div>
            <h2>LATEST MODELS</h2>
            <p>Please Select a Car Model</p>
          </div>
        </div>
      )}
      {selectedCar ? (
        <CarDetails car={selectedCar} onGoBack={handleGoBack} />
      ) : (
        <div className="card-container">
          {cars?.map((car) => (
            <div className="h-100 car-card" key={car.id} onClick={() => handleCarClick(car)}>
              <img src={car.image_url} alt={car.name} className="car-image h-40" />
              <h6 className="card-name">{car.name}</h6>
              <div className="custom pb-1">
                <p className="m-0 p-0 text-black-50 text-size long-description custom-h">
                  {car.description}
                </p>
                {deleting ? (
                  <div className="custom-mobile-view">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm my-1"
                      onClick={() => dispatch(deleteCar(car.id))}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div className="custom-mobile-view">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CarsCard.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CarsCard;
