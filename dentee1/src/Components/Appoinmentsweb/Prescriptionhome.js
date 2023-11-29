import React, { useState, useEffect } from 'react';
import './Prescriptionhome.css';
import Addprescription_1 from './PrescriptionDetails';

const Precrisptionhome = () => {
  const [activeSection, setActiveSection] = useState('');
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    // Define a function to fetch prescription data
    const fetchPrescriptions = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await fetch('http://localhost:5000/api/prescriptions');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response as JSON
        const data = await response.json();
        setPrescriptions(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching prescriptions:', error.message);
      }
    };

    // Call the fetchPrescriptions function
    fetchPrescriptions();
  }, []); 

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const handleBackButtonClick = () => {
    setActiveSection('');
  };

  return (
    <div className="prescription-container">
      {activeSection === '' ? (
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
          <table>
            <tbody>
          <div className="prescription-btm-para">
         
            <ul>
              {prescriptions.map((row) => (
                <li key={row}>
                  <td>{row.doctor} </td>  <td>{row.medicines}-{row.dosages}-{row.frequencies}-{row.notes}   </td>
                </li>
              ))}
            </ul>
          </div>
          </tbody>
          </table>
        </div>
      ) : (
        <div className="addprescription-1-sectionContainer">
          {activeSection === 'AddPrescription' && <Addprescription_1 prescriptions={prescriptions} />}
        </div>
      )}
    </div>
  );
};

export default Precrisptionhome;
