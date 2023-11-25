import React from 'react'
import {CiCalculator1} from 'react-icons/ci';
import "./Managepatient.css";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Patient = () => {
  return (
    <>  
    {/* <Navbar/>
    <Sidebar/> */}
    <div className='Patientfds'>
    <div  className='patientdts'>
      <div className='Clinic-ygh'>
      <div className='Clinic-Detailsgh'>
        <div className='Clinic-Rowgh'>
            <div className='Clinic-Patientgh'>
              <div className='Clinic-Rowgh'>
                <div className='Clinic-qgh'>
                <CiCalculator1/>
                </div>
                <div className='Clinic-wgh'>
                  <input className='Clinic-inputsgh' type="text" placeholder='8aO1F49A'/>
              
                </div>
              </div>
              
            </div>
            <div className='Clinic-Updategh'>
                <button className='Clinic-Button2gh'>Update Access Code</button>
            </div>
        </div>
      </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Patient