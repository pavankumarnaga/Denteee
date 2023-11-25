// Rxtemplate.js
import React, { useState, useEffect } from 'react';
import './Rxtemplete.css';
import { Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineArrowLeft } from 'react-icons/ai';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Rxtemplate = () => {
  const [showTable, setShowTable] = useState(false);
  const [medication, setMedication] = useState([]);
  const [newMedication, setNewMedication] = useState({
    medicine: '',
    dosage: '',
    frequency: '',
    duration: '',
    note: '',
  });

  useEffect(() => {
    // Fetch medication data from the server when the component mounts
    fetch('/api/medication')
      .then((response) => response.json())
      .then((data) => setMedication(data));
  }, []);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    if (
      selectedValue !== 'Select Medicine' &&
      selectedValue !== 'Select Dosage' &&
      selectedValue !== 'Select Frequency' &&
      selectedValue !== 'Select Duration' &&
      selectedValue !== 'Note'
    ) {
      setShowTable(true);
    }
  };

  const handleAddMedication = () => {
    // Send a POST request to the server to save the new medication
    fetch('/api/medication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMedication),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the medication list and reset the newMedication form
        setMedication([...medication, data]);
        setNewMedication({
          medicine: '',
          dosage: '',
          frequency: '',
          duration: '',
          note: '',
        });
      });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Rxds">
        <div className="main-head-rx">
          <div className="mainhead-icon-rx">
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className="main-heading-rx">Administrator / RX Template</div>
        </div>
        <div className="rx-box">
          <div className="rx-box2">
            <div className="rx-text2">Medication</div>
            <input
              type="text"
              placeholder="Medicine Template Name"
              className="rx-input-1"
            ></input>
            <div className="rx-select">
              <select className="rx-select-1" onChange={handleDropdownChange}>
                <option value="Select Medicine">Select Medicine...</option>
                <option value="Stolin Gum Astringent">Stolin Gum Astringent</option>
                {/* Add your other medicine options here */}
              </select>
              <select className="rx-select-1">
                <option value="Select Dosage">Select Dosage...</option>
                <option value="100mg">100mg</option>
                {/* Add your other dosage options here */}
              </select>
              <select className="rx-select-1">
                <option value="Select Frequency">Select Frequency...</option>
                <option value="0-0-1">0-0-1</option>
                {/* Add your other frequency options here */}
              </select>
              <select className="rx-select-1">
                <option value="Select Duration">Select Duration...</option>
                <option value="1 day">1 day</option>
                {/* Add your other duration options here */}
              </select>
              <select className="rx-select-1">
                <option value="Note">Note...</option>
                <option value="After Meal">After Meal</option>
                {/* Add your other note options here */}
              </select>
              <button className="rx-buttonp" onClick={handleAddMedication}>
                <AiOutlinePlus className="rx-iconp" />
              </button>
            </div>
            <hr></hr>
            {showTable && (
              <table className="rx-main-tablesss">
                <thead className="rx-tablefm">
                  <tr>
                    <th className="rx-th">Medicine</th>
                    <th className="rx-th">Dosage</th>
                    <th className="rx-th">Frequency</th>
                    <th className="rx-th">Duration</th>
                    <th className="rx-th">Note</th>
                  </tr>
                </thead>
                <tbody className="rx-table-bodyds">
                  {medication.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          placeholder={item.medicine}
                          className="rx-input-3"
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder={item.dosage}
                          className="rx-input-3"
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder={item.frequency}
                          className="rx-input-3"
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder={item.duration}
                          className="rx-input-3"
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder={item.note}
                          className="rx-input-3"
                        ></input>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div className="rx-text3">Prescription Note</div>
            <input
              type="text"
              placeholder="Note"
              className="rx-input-2"
            ></input>
            <div className="rx-sav-can">
              <div className="rx-save">
                <button className="rx-savess">Save</button>
                <button className="rx-Cancelss">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rxtemplate;