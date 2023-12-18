import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import colorRosetta from './color-rosetta.png';

const CarDetails = ({ car }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="car-details container-fluid bg-white rounded-3 p-3 shadow-4-strong">
        <div className="text-end mt-2">
          <h2 className="m-0">{car.name}</h2>
          <p className="tiny-font">
            £
            {car.finance_fee}
            {' '}
            deposit upon any Car
          </p>
        </div>

        <table className="table table-striped tiny-font mt-3 mb-2">
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
              <td className="text-end" type="currency">
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
        </table>
        <p>
          <span className="fw-bold m-0">5.29 APR</span>
          &nbsp;Representative
        </p>

        <div className="text-center mx-3 my-4">
          <p className="fw-bold tiny-font">
            Discover more models&nbsp;
            <span>&#62;</span>
          </p>
          <img src={colorRosetta} alt="Example" />
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
        onClick={() => navigate('/home')}
        type="button"
      >
        &laquo;
      </button>
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
