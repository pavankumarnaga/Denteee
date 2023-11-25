import React, { useState } from 'react';
import './Manageadduser.css';
import { AiFillCaretDown, AiOutlineArrowLeft } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';

const Adduser = () => {
  const [user, setUser] = useState({
    mobileNumber: '',
    name: '',
    email: '',
    role: 'Select Role',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    axios
      .post('http://127.0.0.1:5001/users', user)
      .then((response) => {
        console.log('Response from server:', response.data);
        
        // Handle any further actions, e.g., redirect or show a success message
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navbar />  
      <Sidebar />
      <div className="manageadd">
        <div className="add-main">
          <Link to="/Manageuser">
            <button className="add-button1">
              <AiOutlineArrowLeft className="update-icon" />
            </button>
          </Link>
          <div className="add-text">Administrator / Add User</div>
        </div>
        <div className="add-box">
          <div className="add-text1">User Details</div>
          <div className="add-row">
            <div className="add-row1">
              <div className="add-box1">
                <div className="add-row">
                  <div className="add-image">
                    {/* <img src={flaga}  className='i'/> */}
                  </div>
                  <div className="add-text2">+ 91</div>
                  <div className="add-icon2">
                    <AiFillCaretDown className="add-icon3" />
                  </div>
                </div>
              </div>
              <div className="add-box2">
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  className="add-input1"
                  value={user.mobileNumber}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="add-box3">
              <div className="add-row">
                <FaUserAlt className="add-icon4" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name of the User"
                  className="add-input1"
                  value={user.name}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="add-input2"
              value={user.email}
              onChange={handleInputChange}
            ></input>
          </div>
          <select
            className="add-select"
            name="role"
            value={user.role}
            onChange={handleInputChange}
          >
            <option>Select Role</option>
            <option>accounts</option>
            <option>administrator</option>
            <option>staff</option>
            <option>Support</option>
          </select>
          <div className="add-lastbox">
            <button className="add-save" onClick={handleSave}>
              Save
            </button>
            <Link to="/Manageuser">
              <button className="add-cancel">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adduser;