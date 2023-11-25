import React, { useState } from 'react';
import './App.css' 
import ConsentForm_11 from './ConsentForm'
import DefaultFiles_11 from './DefaultFiles'



function App11() {
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
        <div className="Files-1-container-btn">
          <button onClick={() => handleButtonClick('Document_1')}>Document</button>
          <button onClick={() => handleButtonClick('ConsenrForm_1')}>Cosent Form</button>
        </div>

        {/* Container for the active section */}
        <div className="Files-1-container-btn-1">
          {activeSection === 'Document_1' && <DefaultFiles_11 />}
          {activeSection === 'ConsenrForm_1' && <ConsentForm_11 />}
        </div>
      </div>
    </div>
  );
}

export default App11;