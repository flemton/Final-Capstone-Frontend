import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const AddReservation = () => {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [city, setCity] = useState('');

  const handleReservation = async (e) => {
    e.preventDefault();
    const reservationData = {
      start_time: startTime,
      end_time: endTime,
      city,
    };
    console.log('reservation data is', reservationData);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <Sidebar />
      </div>

      <div className="w-100 vh-100 mx-3 py-3">
        <button className="border-1 btn m-2 btn btn-primary" onClick={() => navigate('/home')} type="button">
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
                      Current User: ...
                      {/* {currentUser ? currentUser.name : 'Loading...'} */}
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
                      <button className="btn btn-primary" type="submit">Reserve</button>
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
