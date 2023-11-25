import React, { useState, useEffect } from 'react';
import './Manageuser.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Manageuser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from backend when the component mounts
    axios.get('http://localhost:5001/users')
      .then(response => {
        console.log(response.data); // Log the data received from the backend
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError(error.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='manageuse'>
        <div className='manage-main'>
          <button className='manage-button'>
            <Link to='/Administator'><AiOutlineArrowLeft className='manage-icon'/></Link>
          </button>
          <div className='manage-text'>Administrator / Manage Users</div>
        </div>
        <div className='sec-bar'>
          <div className='managesearch-container'>
            <input className='managesearch-bar' type='text' placeholder='Search'/>
            <button className='managesearch-btn'><BiSearch/></button>
          </div>
        </div>
        <Link to='/Manageadduser'>
          <button type='text' className='manage-button2'>Add New Users</button>
        </Link>
       
          <div className='manage-box'>
              
              {users.map(user => (
                  <div key={user._id}>
                    <div className='box-row'>
                      <div className='manage-text-1'>{user.name}</div>
                      <div className='manage-text-2'>{user.mobileNumber}</div>
                      <div className='manage-text-2'>{user.role}</div>
                      <div className='manage-text-3'>{user.status} Active</div>
                      <Popup trigger=
            {<div className='manage-text-4'><FiSettings /></div>}
                position='bottom center'>
                <div className='manage-popup-box'>
                    <Popup trigger=
                    {<div className='manage-delete'>Delete</div>}
                    modal nested>
                        <div className='manage-delete-confirm'>
                            <div className='confirm-1'><div className='confirm'>Confirm</div></div>
                            <div className='delete-user'>Are you sure you want to delete user</div>
                            <div className='yes-no'>
                                <button className='delete-yes'>YES</button>
                                <button className='delete-no'>NO</button>
                            </div>
                        </div>
                    </Popup>
                    <Popup trigger=
                    {<div className='manage-share'>Share Clinic Access Code</div>}
                    modal nested>
                        <div className='manage-delete-confirm'>
                            <div className='confirm-1'><div className='confirm'>Confirm</div></div>
                            <div className='delete-user'>Are you sure you want to share clinic access<br/>code by SMS?</div>
                            <div className='yes-no'>
                                <button className='delete-yes'>YES</button>
                                <button className='delete-no'>NO</button>
                            </div>
                        </div>
                    </Popup>
                    
                </div>
               
            
            </Popup>
                    </div>
                  </div>
              ))}
           
          
            {error && <div>Error fetching users: {error}</div>}

           
            </div>
     
      </div>
    </>
  );
};

export default Manageuser;