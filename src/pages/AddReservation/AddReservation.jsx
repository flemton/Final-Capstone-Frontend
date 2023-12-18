import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import getUser from '../../redux/requests/getUser';
import createUserReservation from '../../redux/requests/createUserReservation';

const AddReservation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user?.currentUser);
  const cars = useSelector((state) => state.car.cars);
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [city, setCity] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const { id } = useParams();

  const handleReservation = async (e) => {
    e.preventDefault();
    const reservationData = {
      start_date: startTime,
      end_date: endTime,
      city,
      user_id: currentUser.id,
    };
    dispatch(createUserReservation({ reservationData, selectedCar }));
    navigate('/home');
  };

  useEffect(() => {
    const fetchData = () => {
      try {
        const selectedIdCar = cars.find((elt) => parseInt(elt.id, 10) === parseInt(id, 10));
        setSelectedCar(selectedIdCar);
      } catch (error) {
        setSelectedCar('');
      }
    };
    if (id && (!selectedCar || id !== selectedCar.id)) {
      fetchData();
    }
  }, [id, selectedCar]);

  useEffect(() => {
    if (!currentUser) {
      dispatch(getUser());
    }
  }, [dispatch, currentUser]);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <Sidebar />
      </div>

      <div className="w-100 vh-100 mx-3 py-3">
        <button
          className="border-1 btn m-2 btn btn-outline-dark"
          onClick={() => navigate('/home')}
          type="button"
        >
          Back
        </button>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card bg-transparent border-light mt-5">
                <div className="card-body create-form vh-75 mobile-text-reserve">
                  <h3 className="text-center text-white ">Reserve a Car</h3>
                  <div className="my-1">
                    <p className="my-1 shadow p-3 mb-5 bg-body-tertiary text-center">
                      Current User:
                      <span className="px-2">
                        {currentUser ? currentUser.username : 'Loading...'}
                      </span>
                    </p>
                  </div>

                  <div className="my-1">
                    <p className="my-1 shadow p-3 mb-5 bg-body-tertiary text-center">
                      Select Tesla Model:
                      <span className="px-2">
                        {cars ? (
                          <select
                            id="car_selection"
                            value={selectedCar ? selectedCar.id : ''}
                            onChange={(e) => setSelectedCar(e.target.value)}
                            required
                          >
                            {cars.map((car) => (
                              <option key={car.id} value={car.id}>
                                {car.name}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <p>Cars loading or no cars, please add cars</p>
                        )}
                      </span>
                    </p>
                  </div>
                  <form className="needs-validation" noValidate onSubmit={handleReservation}>
                    <div className="my-2 text-center">
                      <label htmlFor="start_time">
                        Start Time:
                        <input
                          type="datetime-local"
                          id="start_time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="my-2 text-center">
                      <label htmlFor="end_time">
                        Final Time:
                        <input
                          type="datetime-local"
                          id="end_time"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="my-2 text-center">
                      <label htmlFor="city">
                        Pick a city:
                        <input
                          type="text"
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="my-2 text-center">
                      <button className="btn btn-dark" type="submit">
                        Reserve
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReservation;
