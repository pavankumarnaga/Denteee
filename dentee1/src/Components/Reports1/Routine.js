import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Link, useLocation } from 'react-router-dom';
import './Routine.css';
import {
  FaTachometerAlt,
  FaFolder,
  FaSearch,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaAngleUp,
} from 'react-icons/fa';

//import Cards from '../cards/Cards';

function Routine_R() {

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div>
    <h1>Report/Routine Reminder Report</h1>
    
    <div className="doctor-form-group14">
    <label></label>
   
   &nbsp; &nbsp; &nbsp;As of Date <input type="date" style={{ marginLeft:'40px',width:'180px',height:'180' }} placeholder="Select the Date"/>
    {/* <select className="doctor-form-control14" name="specialization" required>
      <option>Patient</option>
      <option>Others</option>
      <option>Doctor</option>
      <option>External Referrer</option>
      
    </select> */}
    &nbsp;&nbsp;&nbsp;&nbsp;
    <select className="doctor-form-control14" name="specialization" required>
      <option className='option-liza'>Older than one month</option>
      <option className='option-liza'>Older than three months</option>
      <option className='option-liza'>Older than six months</option>
      <option className='option-liza'>older than twelve months</option>
      

    </select>
    
    &nbsp;&nbsp;&nbsp;&nbsp;
   
               <button className='button'> View Report</button>
    </div>
    <div>
   <br/>
   <br/>
      <input type="text"style={{ marginLeft:'40px',width:'300px' }} className='search' placeholder='Search'/>
    </div>
    <br/>
    <br/>   
    <table className="table">
            <thead className='headtale'>
              <tr className='tr-ot'>
                <th className='th-ho'></th>
                <th className='th-ho'  style={{ width:'30px',marginLeft:'-15px' }}>LastTreatment Date</th>
                <th className='th-ho'  style={{ width:'50px' }}>Patient Name</th>
                <th  className='th-ho' style={{ width:'50px' }}>EmailAddress1</th>
                <th className='th-ho'  style={{ width:'50px' }}>Email Address2</th>
                <th className='th-ho'  style={{ width:'50px' }}>Address</th>
                <th className='th-ho'  style={{ width:'50px'}}>Mobile Number</th>
                <th  className='th-ho' style={{ width:'50px'}}>Contact No</th>
                </tr>
            </thead>
            <tbody className="tablebody">
            <tr className='tr-oe'>
      <td className='td-yt'  style={{ width:'200px' }}></td>
      <td className='td-yt' style={{ width:'200px' }}></td>
      <td className='td-yt' style={{ width:'200px' }}></td>
      <td className='td-yt' style={{ width:'200px' }}></td>
      <td className='td-yt' style={{ width:'200px' }}></td>
      <td className='td-yt' style={{ width:'200px' }}></td>
      <td className='td-yt' style={{ width:'200px' }}></td>
      <td className='td-yt' style={{ width:'200px' }}></td>
     
    </tr>
            </tbody>
          </table>


    </div>
    </>
  
 
  )};
export default Routine_R