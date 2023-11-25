import React, { useState } from 'react';
import './App.css' 
import Bills_11 from './Bill'
import Payment_11 from './Payment'
import Ledger_11 from './Ledger'



function App55() {
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
        <div className="Bills-1-container-btn">
          <button onClick={() => handleButtonClick('Bills_1')}>Bill</button>
          <button onClick={() => handleButtonClick('Payment_1')}>Payment</button>
          <button onClick={() => handleButtonClick('Ledger_1')}>Patient Ledger</button>
        </div>

        {/* Container for the active section */}
        <div className="Bills-1-container-btn-1">
          {activeSection === 'Bills_1' && <Bills_11 />}
          {activeSection === 'Payment_1' && <Payment_11 />}
          {activeSection === 'Ledger_1' && <Ledger_11 />}
        </div>
      </div>
    </div>
  );
}

export default App55;