import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Dynamicconsentform.css';

function ConsentForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    relativeName: '',
    treatmentDescription: '',
    consentText: '',
    date: '',
    place: '',
    signature: '',
    time: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/add-consent-form', formData);

      if (response.status === 200) {
        console.log('Consent form data added successfully');
        // You can perform any necessary actions after a successful submission here.
      } else {
        console.error('Failed to add consent form data');
      }
    } catch (error) {
      console.error('Error adding consent form data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className='maincontconsentform'>
        <div className="consent-form-89">
          <div className='main-head-ipog-88'>
            <div className='mainhead-icon-ipog-89'>
              <Link to="/Dynamicconsent">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className='main-heading-ipog-89'>Administrator/Dynamic Consent Form</div>
          </div>
          <h1 className='concent-12'>Consent Form</h1>
          <form className='concent-00' onSubmit={handleFormSubmit}>
            <input className='Concentput'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input  className='Concentput'
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
            />
            <input className='Concentput'
              type="text"
              name="relativeName"
              value={formData.relativeName}
              onChange={handleInputChange}
              placeholder="Relative Name"
            />
            <input className='Concentput'
              type="text"
              name="treatmentDescription"
              value={formData.treatmentDescription}
              onChange={handleInputChange}
              placeholder="Treatment Description"
            />
            {/* <textarea className='Concentput'
              name="consentText"
              value={formData.consentText}
              onChange={handleInputChange}
              placeholder="Consent Text"
            /> */}
            <input className='Concentput'
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="Date"
            />
            <input className='Concentput'
              type="text"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              placeholder="Place"
            />
            <input className='Concentput'
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleInputChange}
              placeholder="Signature"
            />
            <input className='Concentput'
              type="text"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              placeholder="Time"
            />
            <p className='concent-43'>
              I declare that I am more than 18 years of age. I have been informed that there are inherent risks involved in
              the treatment / procedure. I have signed this consent voluntarily out of my free will without any pressure and
              in my full senses.
            </p>

            <p className='concent-43'>
              Date : <span contentEditable={true}>_________</span>
              Place : <span contentEditable={true}>_________</span>
            </p>
            
            <p className='concent-43'>
              Signature ( To be signed by parent /guardian in case of minor): <span contentEditable={true}>_________</span>
              Time : <span contentEditable={true}>_________</span>
            </p>
            
            <p className='concent-43'>
              NOTES :- 
            </p>
            <p className='concent-43'>
              1. This Consent Form should be signed before the treatment is started. These formats may be modified as per individual requirements.
            </p>

            <p className='concent-43'>
              2. These formats should be in the local language and in certain cases it would be prudent to have a proper witness to the consent signature.
            </p>
            
            <button className='concentsave' type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ConsentForm;
