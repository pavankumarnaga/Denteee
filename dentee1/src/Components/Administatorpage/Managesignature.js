import React from 'react'
import {CiCalculator1} from 'react-icons/ci';
import "./Managesignature.css";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


const Signature = () => {
  return (
    <>  
    {/* <Navbar/>
    <Sidebar/> */}
    <div className='Singhds'>
    <div className='signhd'>
      <div className='Clinic-ysr'>
      <div className='Clinic-Signaturesr'>
        <div className='Clinic-Rowsr'>
            <div className='Clinic-Patientsr'>
              <div className='Clinic-Rowsr'>
                <div className='Clinic-qsr'>
                <CiCalculator1/>
                </div>
                <div className='Clinic-wsr'>
                  <input className='Clinic-inputssr' type="text" placeholder=' Karthik Clinic'/>
                </div>
              </div>
            </div>
            <div className='Clinic-Updatesr'>
                <button className='Clinic-Button3sr'>Save</button>
            </div>
        </div>
       </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Signature