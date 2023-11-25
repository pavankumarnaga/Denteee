import React, { useState } from 'react';
import './Prescriptionhome.css';
import Addprescription_1 from './PrescriptionDetails';

const Precrisptionhome = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const handleBackButtonClick = () => {
    setActiveSection('');
  };

  return (
    <div className="prescription-container">
      {activeSection === '' ? ( // Display main page
        <div className="precriptionbody">
          <div className="headerbuttons">
            <button
              className="prescription-add-btn"
              onClick={() => handleButtonClick('AddPrescription')}
            >
              Add Prescription
            </button>
            <button className="prescription-delete-btn">Delete Prescription</button>
          </div>
          <div className="prescription-btm-para">
            <h3 className="prescription-btm-statement">No Prescription Record</h3>
          </div>
        </div>
      ) : ( // Display the "Add Prescription" page
        <div className="addprescription-1-sectionContainer">
          {/* <button className="back-button" onClick={handleBackButtonClick}>
            X
          </button> */}
          {activeSection === 'AddPrescription' && <Addprescription_1 />}
        </div>
      )}
    </div>
  );
};

export default Precrisptionhome;
