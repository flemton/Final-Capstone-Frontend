import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarDetails from '../CarDetails/CarDetails';

const CarsCard = ({ cars }) => {
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
        <div>
          {cars?.map((car) => (
            <div key={car.id}>
              <img src={car.image_url} alt={car.name} />
              <h6>{car.name}</h6>
              <div>
                <p>{car.description}</p>
                <div>
                  <button type="button" onClick={() => handleCarClick(car)}>
                    View Details
                  </button>
                </div>
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
