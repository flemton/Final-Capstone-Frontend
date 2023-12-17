import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import getUserReservations from '../../redux/requests/getUserReservations';
import { deleteReservation } from '../../redux/slices/reservationSlice';

const ReservationList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    dispatch(getUserReservations());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center vw-100">
        <div>
          <Sidebar />
        </div>

        <div className="w-100 vh-100 mx-3 py-3">
          <button
            className="border-1 btn m-2 btn btn-primary"
            onClick={() => navigate('/home')}
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
                    {reservations?.map((reservation) => (
                      <li
                        className="border-dark reservation-item fs-10 list-unstyled"
                        key={reservation.id}
                      >
                        <div>
                          <p>
                            Car Name:
                            {' '}
                            {reservation.tesla_model.name}
                          </p>
                        </div>
                        <div>
                          <p>
                            Start Time:
                            {' '}
                            {reservation.start_date}
                          </p>
                        </div>
                        <div>
                          <p>
                            End Time:
                            {' '}
                            {reservation.end_date}
                          </p>
                        </div>
                        <div>
                          <p>
                            City:
                            {' '}
                            {reservation.city}
                          </p>
                        </div>
                        <div>
                          <p>
                            Deposit:
                            {' £'}
                            {reservation.tesla_model.deposit}
                          </p>
                        </div>
                        <button type="button" className="btn btn-danger btn-text mt-2" onClick={() => dispatch(deleteReservation(reservation.id))}>
                          Delete
                        </button>
                      </li>
                    ))}
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
