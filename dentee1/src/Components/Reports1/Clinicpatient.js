import React from 'react'
import './Clinicpatient.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import {LiaCalendarAlt } from "react-icons/lia";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {FaUserDoctor } from "react-icons/fa6";
import { FaRegMoneyBillAlt}  from "react-icons/fa";
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';


const Clinic = () => {
    const [patientData, setPatientData] = useState({
        // totalPatientsVisited: 0,
        // patientsCheckedIn: 0,
        // directCheckedIn: 0,
        // newPatients: 0,
        // referredByExisting: 0,
        // referredByDoctor: 0,
        // inWaitingArea: 0,
      });

      useEffect(() => {
        // Fetch patient statistics data from the backend
        fetch('http://localhost:5001/api/clinicStatistics')
          .then((response) => response.json())
          .then((data) => setPatientData(data))
          .catch((error) => console.error('Error fetching patient statistics data:', error));
      }, []); 


  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='patient-body'>

<div className='patient-ka'>
            <button className='patient-kb'><Link to="/Areport"><AiOutlineArrowLeft className='patient-kc'/></Link></button>
            <div className='patient-kd'>Report / Clinic Insight</div>
        </div>
        <select className='patient-ke'>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Between</option>
        </select>
        <input type='date' className='patient-input-a'></input>     to
        <input type='date' className='patient-input-a'></input>
        <button className='patient-kf'>View Report</button>
        <div className='patient-k2'>
        <div className='patient-kg'>
            <div className='patient-kh'>
                    <MdGroups className='patient-ki'/>
                <div className='patient-kj'>Patient</div>
            </div>
            <Link style={{textDecoration:'none'}} to="/Clinicappointment"><div className='patient-kh'>
            <LiaCalendarAlt className='patient-ki'/>
                <div className='patient-kk'>Appointment</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Clinictreatment"><div className='patient-kh'>
                <FaUserDoctor className='patient-ki'/>
                <div className='patient-kl'>Treatment</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Cliniccollection"><div className='patient-kh'>
                <FaRegMoneyBillAlt className='patient-ki'/>
                <div className='patient-kl'>Collection</div>
            </div></Link>
            </div>
            <div className='patient-head'>
            <table className='patient-main'>
                <thead className='patient-gd'>
            
                    <tr className='patient-hg'>
                    <th className='patient-heading'>Patient</th>
                    </tr>
                </thead>
                <tbody>
      <tr className='patient-data'>
        <td className='patient-one'>
          Total Number of Patients Visited
          <div className='kn'>{patientData.totalPatientsVisited}</div>
        </td>
        <td className='patient-two'>
          No of patients checkedin
          <div className='ko'>{patientData.patientsCheckedIn}</div>
        </td>
        <td className='patient-one'>
          No of patients direct checkedin
          <div className='kp'>{patientData.directCheckedIn}</div>
        </td>
        <td className='patient-two'>
          No of new patients
          <div className='kq'>{patientData.newPatients}</div>
        </td>
        <td className='patient-one'>
          Patients referred by existing patients
          <div className='kr'>{patientData.referredByExisting}</div>
        </td>
        <td className='patient-two'>
          Patients referred by Doctor
          <div className='ks'>{patientData.referredByDoctor}</div>
        </td>
        <td className='patient-one'>
          Patients currently in waiting area
          <div className='kt'>{patientData.inWaitingArea}</div>
        </td>
      </tr>
    </tbody>

                </table>
                </div>

        </div>

    </div>
    </>
  )
}

export default Clinic