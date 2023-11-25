import React from 'react'
import { TfiWrite} from 'react-icons/tfi';
import "./Managekisko.css";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Kisko = () => {
  return (
    <>  
    {/* <Navbar/>
    <Sidebar/> */}
    <div className='Kiskods'>
    <div className='kiskoss'>
      
      <div className='Clinic-yvs'>
      <div className='Clinic-Patientkiskovs'>
        <div className='Clinic-Rowvs'>
          <div className='Clinic-Kisko1vs'>
            <div className='Clinic-Rowvs'>
              <div className='Clinic-qvs'>
              <TfiWrite/> 
              </div>
              <div className='Clinic-wvs'>
                <input className='Clinic-inputsvs' type="text" placeholder='  ecgplus022'/>
              </div>
            </div>
          
            
          </div>
          <div className='Clinic-Kisko2vs'>
            <div className='Clinic-Rowvs'>
              <div className='Clinic-qvs'>
              <TfiWrite/> 
              </div>
              <div className='Clinic-wvs'>
                <input className='Clinic-inputsvs' type="text" placeholder='ECGPapa53888'/>
           
              </div>
            </div>
           
          </div>
        </div>              
      </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Kisko