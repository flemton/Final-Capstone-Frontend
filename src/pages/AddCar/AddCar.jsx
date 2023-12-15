import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import createCar from '../../redux/requests/createCar';

const AddCar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    deposit: '',
    finance_fee: '',
    option_to_purchase_fee: '',
    total_amount_payable: '',
    duration: '',
    removed: false,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCar(formData));
    navigate('/home');
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, image: imageFile });
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
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

        <div className="container mx-4">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-md d-flex justify-content-end">
                  <label htmlFor="name" className="form-label">
                    Name
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="mb-3 col-md">
                  <label htmlFor="description" className="form-label">
                    Description
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      placeholder="Tesla cars are ..."
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md d-flex justify-content-end">
                  <label htmlFor="deposit" className="form-label">
                    Deposit
                    <input
                      type="number"
                      className="form-control"
                      id="deposit"
                      name="deposit"
                      placeholder="0"
                      value={formData.deposit}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="mb-3 col-md">
                  <label htmlFor="finance_fee" className="form-label">
                    Finance fee
                    <input
                      type="number"
                      className="form-control"
                      id="finance_fee"
                      name="finance_fee"
                      placeholder="0"
                      value={formData.finance_fee}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className=" mb-3 col-md d-flex justify-content-end">
                  <label htmlFor="option_to_purchase_fee" className="form-label">
                    Option to purchase fee
                    <input
                      type="number"
                      className="form-control"
                      id="option_to_purchase_fee"
                      placeholder="0"
                      name="option_to_purchase_fee"
                      value={formData.option_to_purchase_fee}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="mb-3 col-md">
                  <label htmlFor="total_amount_payable" className="form-label">
                    Total amount
                    <input
                      type="number"
                      className="form-control"
                      id="total_amount_payable"
                      name="total_amount_payable"
                      placeholder="0"
                      value={formData.total_amount_payable}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="mb-3 col-md d-flex justify-content-center">
                <label htmlFor="duration" className="form-label">
                  Duration
                  <input
                    type="number"
                    className="form-control"
                    name="duration"
                    id="duration"
                    placeholder="0"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div>
                <label htmlFor="image" className=" input-text w-100">
                  Image:
                  <input
                    className="input-field"
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md text-center">
                  <button className="btn btn-primary px-5 mx-5 text-white" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
