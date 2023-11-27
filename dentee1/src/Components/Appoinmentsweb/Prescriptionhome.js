import React, { useState, useEffect } from 'react';
import './Prescriptionhome.css';
import Addprescription_1 from './PrescriptionDetails';
import { IoIosSettings } from 'react-icons/io';
import axios from 'axios';

const Precrisptionhome = () => {
  const [activeSection, setActiveSection] = useState('');
  const [prescriptions, setPrescriptions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [openSettingsRow, setOpenSettingsRow] = useState(null);
  const [patientData, setPatientData] = useState({
    doctor: '',
    date: '',
    Medicine: '',
    Dosage: '',
    Frequency: '',
    Duration: '',
    Note: '',
  });

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const handleDeleteRow = (index) => {
    const updatedPrescriptions = [...prescriptions];
    updatedPrescriptions.splice(index, 1);
    setPrescriptions(updatedPrescriptions);
    setOpenSettingsRow(null); // Close the settings row after deletion
  };

  const editRow = (index) => {
    setEditingIndex(index);
    setPatientData(prescriptions[index]);
    setActiveSection('AddPrescription'); // Set activeSection to 'AddPrescription'
    setOpenSettingsRow(null); // Close the settings row after clicking edit
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a copy of the prescriptions array to avoid mutating the state directly
    const updatedPrescriptions = [...prescriptions];
  
    // If editingIndex is not null, update the existing prescription
    if (editingIndex !== null) {
      updatedPrescriptions[editingIndex] = { ...patientData };
    } else {
      // If editingIndex is null, add a new prescription to the array
      updatedPrescriptions.push({ ...patientData, id: updatedPrescriptions.length + 1 });
    }
  
    // Update the state with the modified prescriptions array
    setPrescriptions(updatedPrescriptions);
  
    // Reset the form and editingIndex
    setPatientData({
      doctor: '',
      date: '',
      Medicine: '',
      Dosage: '',
      Frequency: '',
      Duration: '',
      Note: '',
    });
    setEditingIndex(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleBackButtonClick = () => {
    setActiveSection('');
  };

  const fetchPrescriptions = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/prescription');
      setPrescriptions(response.data.reverse());
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    }
  };

  useEffect(() => {
    fetchPrescriptions();
  }, []);

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
          <div className="prescription-btm-para">
            {/* <h3 className="prescription-btm-statement">No Prescription Record</h3> */}
            <table className="customer-table11a7">
            <thead>
              <tr>
                {/* <th className="A7th1">Dr Name</th>
                <th className="A7th10">Date</th>
                <th className="A7th2">Medicine</th>
                <th className="A7th3">Dosage</th>
                <th className="A7th4">Frequency</th>
                <th className="A7th5">Duration</th>
                <th className="A7th7">Note</th> */}
                {/* // <th className="A7th7"><IoIosSettings /></th> */}
              </tr>
            </thead>
            <tbody>
            {prescriptions.map((prescription, index) => (
                <tr key={prescription.id}>
                  <td className='customer-table-td1'>{prescription.doctor}</td>
                  <td  className='customer-table-td'>{prescription.dateRequired}</td>
                  <td  className='customer-table-td1'>{prescription.medicines}</td>
                  <td  className='customer-table-td'>{prescription.dosages}</td>
                  <td  className='customer-table-td1'>{prescription.frequencies}</td>
                  <td  className='customer-table-td'>{prescription.durations}</td>
                   <td className='customer-table-td1'>{prescription.notes}</td> 
                   <td className='td-an12'>
                    {openSettingsRow === index ? (
                      <div className="row-settings-an12">
                        <IoIosSettings  onClick={() => setOpenSettingsRow(-1)} />
                        <ul className="settings-menu-an12">
                          <li className='li-an12' onClick={() => editRow(index)}>Edit</li>
                          <li className='li-an12' onClick={() => handleDeleteRow(index)}>Delete</li>
                        </ul>
                      </div>
                    ) : (
                      <div className='set'>
                        <IoIosSettings  onClick={() => setOpenSettingsRow(index)} />
                      </div>
                    )}
                     
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          </div>
        </div>
      ) : ( // Display the "Add Prescription" page
      <div className="addprescription-1-sectionContainer">
      {/* Render the "AddPrescription" component */}
      {activeSection === 'AddPrescription' && (
        <Addprescription_1
          initialData={patientData}
          editingIndex={editingIndex}
          index={editingIndex}
          patientData={patientData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )}
    </div>
  );
};

export default Precrisptionhome;