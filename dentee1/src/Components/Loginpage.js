import React, { useState } from 'react';
import "./Loginpage.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Loginpage = () => {
  const navigate = useNavigate(); 
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(""); // Initialize the token state with an empty string

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', data)
      .then((res) => {
        setToken(res.data.token); // Set the token state
        if (res.data.token) {
          navigate('/Administator');
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page-saloon" style={{ backgroundImage: 'url("https://www.shutterstock.com/image-photo/banner-dentists-room-office-closeup-different-2157401121")' }}>
      <div className="login-container-saloon">
        <h2 className='h2-saloon'>Login to Denteeeeee</h2>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className="form-group-saloon">
            <input
              className='inputfor-saloon'
              type="email"
              name="email"
              placeholder="Enter username"
              value={data.email}
              onChange={changeHandler}
            />
          </div>

          <div className="form-group-saloon">
            <input
              className='inputfor-saloon'
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={changeHandler}
            />
          </div>

          <Link to='/Main'><button className='button-login-saloon' type="submit" >
            Login
          </button></Link>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
