import React from 'react';
import colorRosetta from './color-rosetta.png';

const CarDetails = () => (
  <>
    <div className="car-details container-fluid bg-white rounded-3 p-3 shadow-4-strong">
      <div className="text-end mt-2">
        <h2 className="m-0">Tesla model X</h2>
        <p className="tiny-font">£0.00 deposit upon any Car</p>
      </div>

      <table className="table table-striped tiny-font mt-3 mb-2">
        <tbody>
          <tr>
            <td>Finance Fee:</td>
            <td className="text-end">£0.00</td>
          </tr>
          <tr>
            <td>Option to Purchase Fee:</td>
            <td className="text-end">£0.00</td>
          </tr>
          <tr>
            <td>Total Amount Payable:</td>
            <td className="text-end">£ 0.00</td>
          </tr>
          <tr>
            <td>Duration:</td>
            <td className="text-end">36 Months</td>
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
        <button className="btn btn-dark px-5 text-white" type="button">
          Reserve
        </button>
      </div>
    </div>
  </>
);

export default CarDetails;
