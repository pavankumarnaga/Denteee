
import React from 'react'
import './Cliniccollection.css'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import {LiaCalendarAlt } from "react-icons/lia";
import {FaUserDoctor } from "react-icons/fa6";
import { FaRegMoneyBillAlt}  from "react-icons/fa";
import {Link} from "react-router-dom"
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { useState, useEffect } from 'react';
const Collection = () => {

    const [collectionData, setCollectionData] = useState({
        // totalCashCollection: 0,
        // totalChequeCollection: 0,
        // totalCardCollection: 0,
        // totalCollection: 0,
        // totalDepositedInBank: 0,
        // patientsWithOutstandingBalance: 0,
        // patientsWithOngoingTreatment: 0,
        // pettyCashInHand: 0,
      });
    
      useEffect(() => {
        // Fetch clinic collection statistics data from the backend
        fetch('http://localhost:5001/collectionStatistics')
          .then((response) => response.json())
          .then((data) => setCollectionData(data))
          .catch((error) => console.error('Error fetching collection statistics data:', error));
      }, []);
    
  return (

    <>  
    <Navbar/>
    <Sidebar/>
    <div className='collection-body'>
                <div className='collection-ka'>
            <button className='collection-kb'><Link to="/Areport"><AiOutlineArrowLeft className='collection-kc'/></Link></button>
            <div className='collection-kd'>Report / Clinic Insight</div>
        </div>
        <select className='collection-ke'>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Between</option>
        </select>
        <input type='date' className='collection-input-a'></input>     to
        <input type='date' className='collection-input-a'></input>
        <button className='collection-kf'>View Report</button>
        <div className='collection-k2'>
        <div className='collection-kg'>
            <Link style={{textDecoration:'none'}} to="/Clinicpatient"><div className='collection-kh'>
                    <MdGroups className='collection-ki'/>
                <div className='collection-kj'>Patient</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Clinicappointment"><div className='collection-kh'>
            <LiaCalendarAlt className='collection-ki'/>
                <div className='collection-kk'>Appointment</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Clinictreatment"><div className='collection-kh'>
                <FaUserDoctor className='collection-ki'/>
                <div className='collection-kl'>Treatment</div>
            </div></Link>
            <Link style={{textDecoration:'none'}} to="/Cliniccollection"><div className='collection-kh'>
                <FaRegMoneyBillAlt className='collection-ki'/>
                <div className='collection-kl'>Collection</div>
            </div></Link>
            </div>
            <div className='collection-head'>
            <table className='collection-main'>
                <thead className='collection-hh' >
            
                    <tr className='collection-mn'>
                    <th className='collection-heading'>Collection</th>
                    </tr>
                </thead>
                <tbody>
              <tr className="collection-data">
                <td className="collection-one">
                  Total cash collection
                  <div className="kfgh15">{collectionData.totalCashCollection}</div>
                </td>
                <td className="collection-two">
                  Total cheque collection
                  <div className="kfgh16">{collectionData.totalChequeCollection}</div>
                </td>
                <td className="collection-one">
                  Total card collection
                  <div className="kfgh17">{collectionData.totalCardCollection}</div>
                </td>
                <td className="collection-two">
                  Total collection
                  <div className="kfgh18">{collectionData.totalCollection}</div>
                </td>
                <td className="collection-one">
                  Total deposited in bank
                  <div className="kfgh19">{collectionData.totalDepositedInBank}</div>
                </td>
                <td className="collection-two">
                  Patients with outstanding balance
                  <div className="kfgh20">{collectionData.patientsWithOutstandingBalance}</div>
                </td>
                <td className="collection-one">
                  Patients with ongoing treatment
                  <div className="kfgh21">{collectionData.patientsWithOngoingTreatment}</div>
                </td>
                <td className="collection-two">
                  Petty cash in hand
                  <div className="kfgh22">{collectionData.pettyCashInHand}</div>
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

export default Collection