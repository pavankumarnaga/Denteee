import React, { useState } from 'react';
import './App.css' 
import './Personal.css'; // Import your Personal Details CSS
import PersonalDetails from './Personal';
import ContactDetails from './Contact';
import Investigations from './Investigation';
import PersonalAtributes from './Patributes';
import { Link } from 'react-router-dom';


function App10() {
  // Initialize the activeSection state with the default section 'clinicDetails'
  const [activeSection, setActiveSection] = useState('');
  const [isPersonalDetailsOpen, setIsPersonalDetailsOpen] = useState(false); // State for the Personal Details popup

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  // Function to open the Personal Details popup
  const openPersonalDetailsPopup = () => {
    setIsPersonalDetailsOpen(true);
  };

  // Function to close the Personal Details popup
  const closePersonalDetailsPopup = () => {
    setIsPersonalDetailsOpen(false);
  };

  return (
    <div className="">
      <div className="">
        {/* Heading */}
        <div className=''></div> 
        
        {/* Navigation buttons */}
        <div className="Profile-1-container-btn">
          <button onClick={() => handleButtonClick('PersonalDetails-1')}>Personal Details</button>
          <button onClick={() => handleButtonClick('ContactDetails_1')}>Contact Details</button>
          <button onClick={() => handleButtonClick('Investigations_1')}>Investigations</button>
          <button onClick={() => handleButtonClick('Personalatt_1')}>Personal Attributes</button>
        </div>

        {/* Container for the active section */}
        <div className="Profile-1-container-btn-1">
          {activeSection === 'PersonalDetails-1' && (
            <div className={`popupupup ${isPersonalDetailsOpen ? 'open' : ''}`}>
              {/* Button to close the Personal Details popup */}
            <Link to='/Main'> <button className="close-button" onClick={closePersonalDetailsPopup}>
                X
              </button></Link> 

              <PersonalDetails />
            </div>
          )}
          {activeSection === 'ContactDetails_1' && <ContactDetails />}
          {activeSection === 'Investigations_1' && <Investigations />}
          {activeSection === 'Personalatt_1' && <PersonalAtributes />}
        </div>
      </div>
    </div>
  );
}

export default App10;
