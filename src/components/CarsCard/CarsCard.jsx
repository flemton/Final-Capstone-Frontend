/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCards, Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CarDetails from '../CarDetails/CarDetails';
import deleteCar from '../../redux/requests/deleteCar';
import Logo from '../Sidebar/Logo';

const CarsCard = ({ cars, delete: isDeleteMode }) => {
  const dispatch = useDispatch();
  const [selectedCar, setSelectedCar] = useState(null);
  const breakpoints = {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
    2100: {
      slidesPerView: 4,
    },
  };
  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleDeleteCar = (carId) => {
    console.log('delete', carId);
    dispatch(deleteCar(carId));
  };

  const handleGoBack = () => {
    setSelectedCar(null);
  };

  return (
    <div className="card-model ">
      <div className="position-absolute top-0 start-0 m-4 rosetta">
        <Logo />
      </div>
      {!selectedCar && (
        <div className="d-flex flex-column align-items-center mb-5">
          {isDeleteMode ? (
            <h1 className="text-center font-weight-bold">Delete a Model</h1>
          ) : (
            <h1 className="text-center font-weight-bold">Latest Models</h1>
          )}
          <p className="text-wrap text-muted text-center px-5">
            Order online and schedule a&nbsp;
            <a className="text-decoration-underline text-black" href="/reserve">Test Drive</a>
          </p>
        </div>
      )}
      {selectedCar && !isDeleteMode ? (
        <CarDetails car={selectedCar} onGoBack={handleGoBack} />
      ) : (
        <Swiper
          slidesPerView={1}
          modules={[Navigation, EffectCards]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={breakpoints}
        >
          <div>
            {cars.map((car) => (
              <SwiperSlide key={car.id}>
                <div className="">
                  <img src={car.image_url} alt={car.name} className="card-model-img" />
                  <h6 className="mt-4 mb-0">{car.name}</h6>
                  <div>
                    <p className="m-0 p-0 text-black-50">{car.description}</p>
                    {isDeleteMode ? (
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm mt-2"
                          onClick={() => handleDeleteCar(car.id)}
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-sm mt-2"
                          onClick={() => handleCarClick(car)}
                        >
                          View Details
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
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
  delete: PropTypes.bool,
};

CarsCard.defaultProps = {
  delete: false,
};

export default CarsCard;
