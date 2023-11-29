import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Dynamicconsentform.css';

function ConsentForm() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    title:'',
    category:'',
    name: '',
    age: 0,
    relativeName: '',
    treatmentDescription: '',
    consentText: '',
    date: '',
    place: '',
    signature: '',
    time: '',
    action:'',
  });

  const [consentForms, setConsentForms] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/consentform', formData);

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

  const fetchConsentForms = async () => {
    try {
      const response = await axios.get('http://localhost:5001/consentform');
      setConsentForms(response.data);
    } catch (error) {
      console.error('Error fetching consent forms:', error);
    }
  };

  useEffect(() => {
    fetchConsentForms();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts


  return (
    <>
      <Navbar />
      <Sidebar />

      <div className='maincontconsentform'>
        <div className="consent-form-89">
          <div className='main-head-ipog-88'>
            <Link to="/Dynamicconsent">
              <AiOutlineArrowLeft />
            </Link>
            <div className='main-heading-ipog-89'>Administrator/Dynamic Consent Form</div>
          </div>
          <input
            className='Concen'
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            className='Concen'
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Category"
          />
          <h3 className='concent-12'>Consent Form</h3>
          <form className='concent-00' onSubmit={handleFormSubmit}>
            <p className='Conn'>I PatientName son/daughter of
              <input
                className='Concentput'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
              />aged resident of
              <input
                className='Concentput'
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Age"
              /> being under the treatment of
              <input
                className='Concentput'
                type="text"
                name="relativeName"
                value={formData.relativeName}
                onChange={handleInputChange}
                placeholder="Relative Name"
              /> (state here name of doctor/hospital/nursing home)
              do hereby give consent to the performance of medical/surgical /anesthesia/
              diagnostic procedure of (mention nature of procedure / treatment to be performed, etc.) upon myself/upon
              <input
                className='Concentput'
                type="text"
                name="treatmentDescription"
                value={formData.treatmentDescription}
                onChange={handleInputChange}
                placeholder="Treatment Description"
              /> aged who is related to me as (mention here relationship, e.g.
              son, daughter, father, mother, wife, etc.).
            </p>
            <p className='concent-43'>
              I declare that I am more than 18 years of age. I have been informed that there are inherent risks involved in
              the treatment / procedure. I have signed this consent voluntarily out of my free will without any pressure and
              in my full senses.
            </p>

            <p>
              Date : <span contentEditable={true}>
                <input
                  className='Concentput'
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="Date"
                />
              </span>
              Place : <span contentEditable={true}>
                <input
                  className='Concentput'
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  placeholder="Place"
                />
              </span>
              <p>
              Signature ( To be signed by parent /guardian in case of minor)
              Signature : <span contentEditable={true}>
                <input
                  className='Concentput'
                  type="text"
                  name="signature"
                  value={formData.signature}
                  onChange={handleInputChange}
                  placeholder="Signature"
                />
              </span>
              Time : <span contentEditable={true}>
                <input
                  className='Concentput'
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  placeholder="Time"
                />
              </span>
              </p>
            </p>

            <h4 className='concent-43'>
              NOTES :- 
            </h4>
            <p className='concent-43'>
              1. This Consent Form should be signed before the treatment is started. These formats may be modified as per individual requirements.
            </p>

            <p className='concent-43'>
              2. These formats should be in the local language and in certain cases it would be prudent to have a proper witness to the consent signature.
            </p>

            <button
              className='concentsave'
              type="submit"
              onClick={() => setIsFormVisible(false)}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ConsentForm;