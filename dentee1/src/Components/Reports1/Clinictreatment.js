
import React from 'react'
import './Clinictreatment.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import {LiaCalendarAlt } from "react-icons/lia";
import {FaUserDoctor } from "react-icons/fa6";
import { FaRegMoneyBillAlt}  from "react-icons/fa";
import {Link} from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { useState, useEffect } from 'react';

const Treatment = () => {

    const [treatmentData, setTreatmentData] = useState({
        // totalTreatmentTime: '-',
        // treatmentsCompleted: 0,
        // treatmentsCompletedOverall: 0,
        // patientsInTreatment: 0,
        // patientsWithCompletedTreatment: 0,
        // patientsWithNoTreatmentEntry: 0,
        // patientsWithOngoingTreatment: 0,
      });
    
      useEffect(() => {
        // Fetch treatment statistics data from the backend
        fetch('http://localhost:5001/api/treatmentStatistics')
          .then((response) => response.json())
          .then((data) => setTreatmentData(data))
          .catch((error) => console.error('Error fetching treatment statistics data:', error));
      }, []);

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='treatment-body'>
        <div className='treatment-ka'>
            <button className='treatment-kb'><Link to="/Areport"><AiOutlineArrowLeft className='treatment-kc'/></Link></button>
            <div className='treatment-kd'>Report / Clinic Insight</div>
        </div>
        <select className='treatment-ke'>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Between</option>
        </select>
        <input type='date' className='treatment-input-a'></input>     to
        <input type='date' className='treatment-input-a'></input>
        <button className='treatment-kf'>View Report</button>
        <div className='treatment-k2'>
        <div className='treatment-kg'>
            <Link style={{textDecoration:'none'}} to="/Clinicpatient"><div className='treatment-kh'>
                    <MdGroups className='treatment-ki'/>
                <div className='treatment-kj'>Patient</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Clinicappointment"><div className='treatment-kh'>
            <LiaCalendarAlt className='treatment-ki'/>
                <div className='treatment-kk'>Appointment</div>
            </div></Link>
            <div className='treatment-kh'>
                <FaUserDoctor className='treatment-ki'/>
                <div className='treatment-kl'>Treatment</div>
            </div>
            <Link style={{textDecoration:'none'}} to="/Cliniccollection"><div className='treatment-kh'>
                <FaRegMoneyBillAlt className='treatment-ki'/>
                <div className='treatment-kl'>Collection</div>
            </div></Link>
            </div>
            <div className='treatment-head'>
            <table className='treatment-main'>
                <thead className='treatment-md'>
            
                    <tr className='treatment-dm'>
                    <th className='treatment-heading'>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                <tr className='treatment-data'>
                  <td className='treatment-one'>
                    Total treatment time
                    <div className='k9'>{treatmentData.totalTreatmentTime}</div>
                  </td>
                  <td className='treatment-two'>
                    No of treatments completed
                    <div className='k8'>{treatmentData.treatmentsCompleted}</div>
                  </td>
                  <td className='treatment-one'>
                    No of treatments completed overall
                    <div className='k8'>{treatmentData.treatmentsCompletedOverall}</div>
                  </td>
                  <td className='treatment-two'>
                    Patients in treatment
                    <div className='k9'>{treatmentData.patientsInTreatment}</div>
                  </td>
                  <td className='treatment-one'>
                    Patients with completed treatment
                    <div className='k8'>{treatmentData.patientsWithCompletedTreatment}</div>
                  </td>
                  <td className='treatment-two'>
                    Patients with no treatment entry
                    <div className='k8'>{treatmentData.patientsWithNoTreatmentEntry}</div>
                  </td>
                  <td className='treatment-one'>
                    Patients with ongoing treatment
                    <div className='k8'>{treatmentData.patientsWithOngoingTreatment}</div>
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

export default Treatment