// src/EditProfile.js
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import "./EditProfile.css";


class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      oldPassword: '',
      newPassword: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to update the user's profile with the new data.
    // You may want to send a request to your server or handle it accordingly.
    console.log('Form submitted with data:', this.state);
  };

  render() {
    const { username, oldPassword, newPassword } = this.state;

    return (
      <div className="edit-profile-saloon234">
        <h2 className='edit-profile-h2--saloon234'>Edit Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group-saloon234">

            <div className='lable-name-saloon234'>
            <label htmlFor="username">Username</label>
            </div>

            <input
            className='form-group-saloon234-input'
              type="text"
              id="username"
              placeholder='Enter Name'
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group-saloon234">

            <div className='lable-name-saloon234'>    
            <label htmlFor="oldPassword" >Old Password</label>
            </div>
           
            <input
            className='form-group-saloon234-input'
              type="password"
              placeholder='Enter Old Password'
              id="oldPassword"
              name="oldPassword"
              value={oldPassword}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group-saloon234">
            <div className='lable-name-saloon234'>
            <label htmlFor="newPassword" >New Password</label>
            </div>
            <input
            className='form-group-saloon234-input'
              type="password"
              id="newPassword"
              placeholder='Enter New Password'
              name="newPassword"
              value={newPassword}
              onChange={this.handleInputChange}
              required
            />
          </div>
          
        </form>
        <div className='emp-btn-flex2345'>
       <Link to='/Loginpage'> <button className='update-btn-saloon234'>update</button></Link>
      </div>
      </div>
    );
  }
}

export default EditProfile;