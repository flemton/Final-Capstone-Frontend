import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsync } from '../../redux/slices/registerSlice';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.register);

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(registerAsync({ username, email, password })).then((success) => {
      if (success) {
        navigate('/home');
      }
    });
  };

  useEffect(() => {
    console.log(data);
    if (data?.success) {
      navigate('/home');
    }
  }, [data, navigate]);

  return (
    <>
      <div className="container auth-box">
        <div className="row justify-content-center align-items-center row-box">
          <form onSubmit={handleSignUp} className="col-12 col-sm-8">
            <div className="login-form">
              <h3 className="text-center mb-4">SignUp</h3>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="border-1 btn m-2 rounded-circle btn-warning"
                  onClick={() => navigate('/')}
                  type="button"
                >
                  Back
                </button>
                <button type="submit" className="border-1 btn m-2 rounded-circle btn-primary">
                  SignUp
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
