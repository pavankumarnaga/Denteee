import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './Personalizesettings.css'; // Import the CSS file
import {TfiSave} from 'react-icons/tfi';
import {GrEdit} from 'react-icons/gr';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from '../Navbar';
import axios from 'axios';
import Sidebar from '../Sidebar';

function CustomTable() {

  const [personal, setPersonal] = useState({
    receipt: '',
    invoice: '',
    currency:'',
    dayview:'Select Dayview',
    codeprefix:'',
    senderId:'',
    language:'Select Language',
    numbering:'Select Numbering',
    cancel:'Select Cancel',
    confirmweb:'Select Confirm',
    recordEdit:'Select RecordEdit',
    consultationoff:'Select Consultationoff',
    feedback:'',
    sms:'',
    email:'',    

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonal({ ...personal, [name]: value });
  };

  const handleSave = () => {
    axios
      .post('http://127.0.0.1:5000/personal', personal)
      .then((response) => {
        console.log('Response from server:', response.data);
        
        // Handle any further actions, e.g., redirect or show a success message
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  const [showPatientCodeModal, setShowPatientCodeModal] = useState(false);
  const [isAutoGenerating, setIsAutoGenerating] = useState(true);

  const togglePatientCodeModal = () => {
    setShowPatientCodeModal(!showPatientCodeModal);
  };

  const handleRadioChange = (event) => {
    setIsAutoGenerating(event.target.value === 'autoGenerating');
  };

  const closeModal = () => {
    setShowPatientCodeModal(false);
  };
    
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='maincont-25'>

        <div className='patientdocument-head-25'>
        <div className='patient-icon-25'>
        <Link to="/Administator">
        <AiOutlineArrowLeft/></Link></div>
        <div className='patient-heading-25'>Administrator / Personalize Settings</div>
       </div>

   
    
    <table className="custom-table-25">
      <tbody>
        <br></br>
        <tr>
          <td>Receipt Prefix:</td>
          <td>
            <strong>Receipt Prefix:</strong>
            <input 
              type="text" 
              name="receipt" 
              value={personal.receipt}
              onChange={handleInputChange}
            />
          </td>
          <td> <TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Invoice Prefix:</td>
          <td>
            <strong>Invoice Prefix:</strong>
            <input 
              type="text" 
              name="invoice"
              value={personal.invoice}
              onChange={handleInputChange}
            />
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Currency Symbol:</td>
          <td>
            <strong>Currency Symbol:</strong>
            <input 
              type="text" 
              name="currency"
              value={personal.currency}
              onChange={handleInputChange}
            />
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Appointment Default View:</td>
          <td className="dropdown-cell-25">
            <strong>Day View:</strong>
            <select 
                name="dayview"
                value={personal.dayview}
                onChange={handleInputChange}
              >
                <option value="week">Week View</option>
                <option value="month">Month View</option>
              </select>

          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Patient Code Prefix:</td>
          <td>
            <strong>Patient Code Prefix:</strong>
            <input 
              type="text" 
              name="codeprefix"
              value={personal.codeprefix}
              onChange={handleInputChange}
            />
            <GrEdit onClick={togglePatientCodeModal} />
          </td>
          <td></td>
        </tr>
        <br></br>
       
   
    {showPatientCodeModal && (

      <div className="overlay-25">

          <div className="modal-25">
          <span className="close-button-25" onClick={closeModal}>
              &times;
            </span>


        <h2> Patient Code Prefix</h2>
        <form>
          <div className="radio-group-25">
            <label>
              <input
                type="radio"
                name="patientCodeType"
                value="autoGenerating"
                checked={isAutoGenerating}
                onChange={handleRadioChange}
              />
             Auto-generating patient code
            </label>
            <label>
              <input
                type="radio"
                name="patientCodeType"
                value="manual"
                checked={!isAutoGenerating}
                onChange={handleRadioChange}
              />
              I will add them manually each time
            </label>
          </div>
          {isAutoGenerating && (
            <div>
             
              <input type="text" placeholder="Prefix" />&nbsp;&nbsp;
              
              <input type="number" placeholder="next number" />&nbsp;&nbsp;
              <input type="text" placeholder="suffix" />
            </div>
          )}
          <button className="button-25" type="button" onClick={togglePatientCodeModal}>
            Save
          </button>
        </form>
      </div>
      </div>
    )}
        <tr>
          <td>Sms SenderId:</td>
          <td>
            <strong>Sms SenderId:</strong>
            <input 
              type="text" 
              name="senderId"
              value={personal.senderId}
              onChange={handleInputChange}
            />
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Print Language:</td>
          <td>
            <strong>Language:</strong>
            <select 
              name="language"
              value={personal.language}
              onChange={handleInputChange}
            >
              <option value="english">english</option>
              <option value="hindi">hindi</option>
            </select>
            
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
      <tr>
          <td>Tooth Numbering Mode:</td>
          <td>
            <strong>Tooth Numbering:</strong>
            <select 
              name="numbering"
              value={personal.numbering}
              onChange={handleInputChange}
            >
              <option value="indian">indian</option>
              <option value="universal">universal</option>
            </select>
            
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Show Cancelled Appointment :</td>
          <td>
            <strong>Show Cancelled Appointment :</strong>
            <select 
              name="cancel"
              value={personal.cancel}
              onChange={handleInputChange}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <br></br>
        <tr>
          <td>Direct Confirm Web Appointment :</td>
          <td>
            <strong>Direct Confirm Web Appointment :</strong>
            <select 
              name="confirmweb"
              value={personal.confirmweb}
              onChange={handleInputChange}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Keep Record Editable (only for same day) :</td>
          <td>
            <strong>Keep Record Editable (only for same day) :</strong>
            <select 
              name="recordEdit"
              value={personal.recordEdit}
              onChange={handleInputChange}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Online consultation appointment setting on/off<br></br> during appointment :</td>
          <td>
            <strong>Online consultation appointment setting on/off during appointment :</strong>
            <select 
              name="consultationoff"
              value={personal.consultationoff}
              onChange={handleInputChange}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Appointment feedback link :</td>
          <td>
            <strong>Custom appointment feedback link :</strong>
            <input 
              type="text" 
              name="feedback"
              value={personal.feedback}
              onChange={handleInputChange}
             />
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
        <tr>
          <td>Clinic Level SMS On-Off Setting :</td>
          <td>
            <strong>Send SMS :</strong>
            <select 
              name="sms"
              value={personal.sms}
              onChange={handleInputChange}
            >
              <option value="on">on</option>
              <option value="off">off</option>
            </select>
            
          </td>
          <td><TfiSave className='icon-size-25'onClick={handleSave}/></td>
        </tr>
        <br></br>
        <tr>
          <td>Clinic Level Email On-Off Setting :</td>
          <td>
            <strong>Send Email :</strong>
            <select 
              name="email"
              value={personal.email}
              onChange={handleInputChange}
            >
              <option value="on">on</option>
              <option value="off">off</option>
            </select>
            
          </td>
          <td><TfiSave className='icon-size-25' onClick={handleSave} /></td>
        </tr>
        <br></br>
              </tbody>

    </table>
    </div>
    </>
  );
}

export default CustomTable;