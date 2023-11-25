import React, { useState } from 'react';
import './Manageclinicone.css';  
import Managedetails from './Managedetails';
import Managekisko from './Managekisko';
import Managesignature from './Managesignature';
import Manageform from './Manageform';
import Managepatient from './Managepatient';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function App() {
  // Initialize the activeSection state with the default section 'clinicDetails'
  const [activeSection, setActiveSection] = useState('clinicDetails');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='Aredds'>
      <div className="Ared">

          



<div className='main-headadad'>
       <div className='mainhead-iconadad'><Link to='/Administator'><AiOutlineArrowLeft/></Link></div>
       <div className='main-headingadad'>Administrator / Manage Clinic</div>
      </div>

        
         
        {/* <div className='Aredf'><h2>Administrator / Manage Clinic</h2></div>  */}
        
        <div className="Aerfd">
          <button className='Adim567' onClick={() => handleButtonClick('clinicDetails')}>Clinic Details</button>
          <button className='Adim567' onClick={() => handleButtonClick('patientKiosk')}>Patient Kiosk</button>
          <button className='Adim567' onClick={() => handleButtonClick('clinicSignature')}>Clinic Signature</button>
          <button className='Adim567' onClick={() => handleButtonClick('clinicAccessCode')}>Clinic Access Code</button>
          <button className='Adim567' onClick={() => handleButtonClick('clinicPatientPortalUrl')}>Clinic Patient Portal Url</button>
        </div>

      
        <div className="Seont">
          {activeSection === 'clinicDetails' && <Managedetails />}
          {activeSection === 'patientKiosk' && <Managekisko />}
          {activeSection === 'clinicSignature' && <Managesignature />}
          {activeSection === 'clinicAccessCode' && <Managepatient/>}
          {activeSection === 'clinicPatientPortalUrl' && <Manageform  />}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;