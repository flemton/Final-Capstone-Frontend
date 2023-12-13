import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const ReservationList = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center vw-100">

        <div>
          <Sidebar />
        </div>

        <div className="w-100 vh-100 mx-3 py-3">
          <button
            className="border-1 btn m-2 btn btn-primary"
            onClick={() => navigate('/')}
            type="button"
          >
            Back
          </button>

          <div className="container">
            <div className="align-items-center justify-content-center row text-center">
              <div className="col-12">
                <div className="reserve-form">
                  <h3 className="text-white">Your Reservations</h3>

                  <div className="text-white">You dont have reservations yet</div>
                  <ul>
                    <li className="border-dark reservation-item fs-10 list-unstyled">
                      <div>
                        <p>Car Name:</p>
                      </div>
                      <div>
                        <p>Start Time:</p>
                      </div>
                      <div>
                        <p>End Time:</p>
                      </div>
                      <div>
                        <p>City:</p>
                      </div>
                      <div>
                        <p>Deposit:</p>
                      </div>
                      <button type="button" className="btn btn-danger btn-text mt-2">
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default ReservationList;
