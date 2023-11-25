import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Missed.css';
import Main from './Main';


function Viewport() {
  const [patientType, setPatientType] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handlePatientTypeChange = (event) => {
    setPatientType(event.target.value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    <Main/>
    <div className="asd">
      <button onClick={togglePopup}>Existing</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-header">
              <h2>Missed Appointment</h2>
              <span onClick={togglePopup} className="close-popup">
                <AiOutlineClose />
              </span>
            </div>
            <p>Are you sure you want to mark this patient as missed?</p>
            <label className='MIss'>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
               
              />
              Notify Patient
            </label>
            <br />
            <br />
            <div className="popup-footer">
              <button className="save-button" onClick={togglePopup}>
                SAVE
              </button>
              &nbsp;&nbsp;&nbsp;
              <button className="close-button" onClick={togglePopup}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Viewport;
