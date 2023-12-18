import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import colorRosetta from './color-rosetta.png';
import Logo from '../Sidebar/Logo';

const CarDetails = ({ car, onGoBack }) => {
  const navigate = useNavigate();
  if (!car) {
    return null;
  }

  return (
    <>
      <div
        className="car-details-page"
        style={{
          backgroundImage: `url('${car.image_url}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div
          className="position-absolute top-0 start-0 m-4 rosetta"
        >
          <Logo />
        </div>
        <div className="car-details bg-white rounded-3 p-3 shadow-4-strong me-4">
          <div className="car-details-container">
            <div className="text-end mt-2 car-details-info">
              <h2 className="car-details-title mx-0 mt-2 ">{car.name}</h2>
              <p className="tiny-font">
                £
                {car.finance_fee}
                {' '}
                deposit upon any Car
              </p>
            </div>

            <table className="table table-striped tiny-font mt-3 mb-2 car-details-table">
              <tbody>
                <tr>
                  <td>Finance Fee:</td>
                  <td className="text-end">
                    £
                    {car.finance_fee}
                  </td>
                </tr>
                <tr>
                  <td>Option to Purchase Fee:</td>
                  <td className="text-end">
                    £
                    {car.option_to_purchase_fee}
                  </td>
                </tr>
                <tr>
                  <td>Total Amount Payable:</td>
                  <td className="text-end">
                    £
                    {car.total_amount_payable}
                  </td>
                </tr>
                <tr>
                  <td>Duration:</td>
                  <td className="text-end">
                    {car.duration}
                    {' '}
                    Months
                  </td>
                </tr>
              </tbody>
              <caption className="ms-3">
                <span className="fw-bold m-0">5.29 APR</span>
                &nbsp;Representative
              </caption>
            </table>
          </div>

          <div className="text-center mx-3 my-4 rosetta">
            <p className="fw-bold tiny-font rosetta">
              Discover more models&nbsp;
              <span>&#62;</span>
            </p>
            <img src={colorRosetta} alt="Example" className="rosetta" />
          </div>

          <div className="text-center my-2">
            <button
              className="btn btn-dark px-5 text-white"
              type="button"
              onClick={() => navigate(`/reserve/${car.id}`)}
            >
              Reserve
            </button>
          </div>
        </div>
        <button
          className="btn btn-toolbar text-btn-white rounded-back-btn fs-5"
          onClick={() => onGoBack()}
          type="button"
        >
          &laquo;
        </button>
      </div>
    </>
  );
};

CarDetails.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    finance_fee: PropTypes.number.isRequired,
    option_to_purchase_fee: PropTypes.number.isRequired,
    total_amount_payable: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
  onGoBack: PropTypes.func.isRequired,
};

CarDetails.defaultProps = {
  car: {
    id: 0,
    name: '',
    description: '',
    image_url: '',
    finance_fee: 0,
    option_to_purchase_fee: 0,
    total_amount_payable: 0,
    duration: 0,
  },
};

export default CarDetails;
