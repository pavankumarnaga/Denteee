import React, { useState } from 'react';
import './App.css' 
import Treatment_11 from './Treatment'
import TreatmentPlan_11 from './TreatmentPlan'



function App66() {
  // Initialize the activeSection state with the default section 'clinicDetails'
  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className=''>
      <div className="">
        {/* Heading */}
        <div className=''></div> 
        
        {/* Navigation buttons */}
        <div className="Treatment-1-container-btn">
          <button onClick={() => handleButtonClick('TreatmentPlan_1')}>TreatmentPlan</button>
          <button onClick={() => handleButtonClick('Treatment_1')}>Treatment</button>
        </div>

        {/* Container for the active section */}
        <div className="Treatment-1-container-btn-1">
          {activeSection === 'TreatmentPlan_1' && <TreatmentPlan_11 />}
          {activeSection === 'Treatment_1' && <Treatment_11 />}
        </div>
      </div>
    </div>
  );
}

export default App66;