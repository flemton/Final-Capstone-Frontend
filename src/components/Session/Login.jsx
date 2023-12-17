import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/slices/loginSlice';
import Logo from '../Sidebar/Logo';

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
      <div className="session-container">
        <div className="session-box bg-body-secondary shadow-6-strong">
          <Logo />
          <form className="d-flex flex-column align-items-center w-75" onSubmit={handleLogin}>
            <h2 className="text-center mb-4">Log-in</h2>
            <div className="mb-3 w-100">
              <input
                type="name"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-between gap-4 w-100">
              <button
                type="button"
                className="btn btn-outline-dark border-1"
                onClick={() => navigate('/')}
              >
                Back
              </button>
              <button type="submit" className="btn btn-dark border-1">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
