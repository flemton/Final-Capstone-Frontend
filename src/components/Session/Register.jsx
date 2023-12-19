import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from '../../redux/slices/registerSlice';
import Logo from '../Sidebar/Logo';

const Register = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.register);

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(registerAsync({ username })).then((success) => {
      if (success) {
        navigate('/home');
      }
    });
  };

  useEffect(() => {
    if (data?.success) {
      navigate('/home');
    }
  }, [data, navigate]);

  return (
    <>
      <div className="session-container">
        <div className="session-box bg-body-secondary shadow-6-strong">
          <Logo />
          <form className="d-flex flex-column align-items-center w-75" onSubmit={handleSignUp}>
            <h3 className="text-center mb-4">Sign-up</h3>
            <div className="mb-3 w-100">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-between gap-4 w-100">
              <button
                className="btn btn-outline-dark border-1"
                onClick={() => navigate('/')}
                type="button"
              >
                Back
              </button>
              <button type="submit" className="btn btn-dark border-1">
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
