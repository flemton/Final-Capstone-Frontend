import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import getUserReservations from '../../redux/requests/getUserReservations';
import { deleteReservation } from '../../redux/slices/reservationSlice';
import Logo from '../../components/Sidebar/Logo';

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

        <div className="pages-layout">
          <button
            className="btn btn-outline-dark align-self-end"
            onClick={() => navigate('/home')}
            type="button"
          >
            Back
          </button>

          <div className="position-absolute start-0 pt-2 pb-3 w-50 ps-4">
            <Logo />
          </div>

          <div className="container mt-3">
            <div className="align-items-center justify-content-center row text-center">
              <div className="col-12">
                <div className="reserve-form">
                  <h1 className="text-center font-weight-bold my-4">My Reservations</h1>
                  {reservations && reservations.length > 0 ? (
                    <div>
                      {reservations?.map((reservation) => (
                        <table
                          className="table table-borderless table-striped mt-4"
                          key={reservation.id}
                        >
                          <tbody className="border-dark reservation-item fs-10 list-unstyled">
                            <tr>
                              <td>Car Name:</td>
                              <td>{reservation.tesla_model.name}</td>
                            </tr>
                            <tr>
                              <td>Start Time:</td>
                              <td>{reservation.start_date}</td>
                            </tr>
                            <tr>
                              <td>End Time:</td>
                              <td>{reservation.end_date}</td>
                            </tr>
                            <tr>
                              <td>City:</td>
                              <td>{reservation.city}</td>
                            </tr>
                            <tr>
                              <td>Deposit:</td>
                              <td>
                                {' £'}
                                {reservation.tesla_model.deposit}
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td>
                                <button type="button" className="btn btn-dark btn-text mt-2">
                                  Details
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-text mt-2"
                                  onClick={() => dispatch(deleteReservation(reservation.id))}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p>No reservations yet</p>
                    </div>
                  )}
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
