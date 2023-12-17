import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './session.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/slices/loginSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAsync(username));
  };

  useEffect(() => {
    if (data?.success) {
      navigate('/home');
    }
  }, [data, navigate]);

  return (
    <>
      <div className="container auth-box">
        <div className="row justify-content-center align-items-center row-box">
          <div className=" col-12 col-sm-8">
            <form className="login-form" onSubmit={handleLogin}>
              <h2 className="text-center mb-4">LogIn</h2>
              <div className="mb-3">
                <input
                  type="name"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="border-1 btn m-2 rounded-circle btn-warning"
                  onClick={() => navigate('/')}
                >
                  Back
                </button>
                <button type="submit" className="border-1 btn m-2 rounded-circle btn-primary">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
