import React, { useState } from 'react';
import './Patributes.css';
import Popup from 'reactjs-popup';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import axios from 'axios';

const Rersonal = () => {
  const [formData, setFormData] = useState({
    companyname: '',
    dateofanniversary: '',
    schoolname: '',
    tags: '',
    spousename: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/Patribute', formData);
      console.log('Billing record created successfully');
      window.alert('Data saved successfully'); // Alert for successful submission
  
      // Reset form fields after successful submission
      setFormData({
        companyname: '',
        dateofanniversary: '',
        schoolname: '',
        tags: '',
        spousename: '',
      });
    } catch (error) {
      console.error('Error creating billing record:', error);
      window.alert('Failed to save data'); // Alert for submission failure
    }
  };
  
  

  return (
    <div className="Formsq3">
      <div className="personal-main">
        <div className="personal-column">
          <div className="personal-row">
            <div className="personal-name1">
              <label htmlFor="psw">Company Name</label><br></br>
              <input
                className="Personal-name2"
                type="text"
                placeholder="Company Name"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                required
              ></input>
              </div>
              <div className='personal-date1'>
               <label htmlFor="psw">Date of anniversary</label><br></br>
              <input
                className="personal-date2"
                type="date"
                placeholder="Date of anniversary"
                name="dateofanniversary"
                value={formData.dateofanniversary}
                onChange={handleChange}
                required
              ></input>
              </div>
              <div className='personal-school1'>
               <label htmlFor="psw">School Name</label><br></br>
              <input
                className="personal-school2"
                type="text"
                placeholder="School Name"
                name="schoolname"
                value={formData.schoolname}
                onChange={handleChange}
                required
              ></input>
              </div>
              </div>

              <div className='personal-row'>
              <div className='personal-tags1'>

              
               <label htmlFor="tags">Tags</label><br></br>
              <input
                className="personal-tags2"
                type="text"
                placeholder="Tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                required
              ></input>
              </div>
              <div className='personal-spouse1'>
               <label htmlFor="spouse">Spouse Name</label><br></br>
              <input
                className="personal-spouse2"
                type="text"
                placeholder="Spouse Name"
                name="spousename"
                value={formData.spousename}
                onChange={handleChange}
                required
              ></input>
              </div>
             </div> 
            {/* ... Other input fields */}
          <div className="personal-button6">
            {/* <Popup trigger={<button className="personal-button7">Save</button>} position="top"> */}
              {/* <div>
                <div className="color">
                  <div className="personal-row"> */}
                    {/* <div className="personal-icon10">
                      <AiOutlineCheckCircle className="personal-icon0" />
                    </div> */}
                    {/* <div className="personal-success">Saved Successfully</div> */}
                  {/* </div>
                </div>
              </div> */}
            {/* </Popup> */}
            <button onClick={handleSubmit} className="personal-button7">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Rersonal;    