import React, { useState } from 'react';
import './TreatmentPlan.css';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import TreatmentPlan_55 from './Treatment'

const TreatmentPlan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="tpaln-container">
      <div className={`tplansidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="tplansidebar-content">
          <button className="tplancancel-button" onClick={closeSidebar}>
            X
          </button>
          <input type="text" placeholder="Treatment, RX" className='tplansidebar-input'/>
        </div>
      </div>
      {activeSection === '' ? ( // If activeSection is not set, show the main page
        <div className="tplanbody">
          <div className="tplanbuttons">
            <button className="tplan-add-btn" onClick={() => handleButtonClick('AddTreatmentPlan')}>
              Add Treatment Plan
            </button>
            <AiFillQuestionCircle id="tplan-q-icon" onClick={toggleSidebar} />
          </div>
          <div className="tplan-btm-para">
            <h3 className="tplan-btm-statement">No TreatmentPlan Record Found</h3>
          </div>
        </div>
      ) : (
        // If activeSection is 'AddTreatmentPlan', show the new page
        <div className="tplan-1-sectionContainer">
          {activeSection === 'AddTreatmentPlan' && <TreatmentPlan_55 />}
        </div>
      )}
    </div>
  );
};

export default TreatmentPlan;
