import React from 'react';

const CarDetails = () => (
  <>
    <div className="container-fluid bg-white rounded-3 p-3">
      <div className="text-end">
        <h3>Tesla model X</h3>
        <p>£0.00 deposit upon any Car</p>
      </div>

      <table className="table table-striped" style={{ fontSize: '0.8rem' }}>
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
        <span className="fw-bold">5.29 APR</span>
        &nbsp;Representative
      </p>
    </div>
  </>
);

export default CarDetails;
