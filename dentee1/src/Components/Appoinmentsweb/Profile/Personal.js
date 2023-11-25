import './Personal.css';
import React, { useState } from 'react';
import { FaPencil } from 'react-icons/fa6';
import { AiTwotoneEdit} from 'react-icons/ai';
import { AiOutlineClose, AiOutlinePlus, AiFillCaretDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsFillCreditCardFill, BsFillPlusSquareFill } from 'react-icons/bs';
import one from "./Images/Two.png";
import Popup from 'reactjs-popup';



const PersonalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    caseNumber: '',
    title: '',
    firstName: '',
    lastName: '',
    country: '',
    occupation: '',
    adharCard: '',
    gender: '',
    maritalStatus: '',
    emailAddress1: '',
    emailAddress2: '',
    phoneNumber: '',
    referenceSource: '',
    selectDoctor: '',
    language: '',
    selectPatient: '',
    selectRelation: '',
    notes: '',
    medicalAlerts: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/personal1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Personal record created successfully');
      } else {
        alert('Failed to create personal record');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the personal record');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>


      <h2>Personal Details</h2>
<div className='mainco1230'>
      
  <input className='inpso1230'
    type="text"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    placeholder="Name:"
  />
    
          <input className='inpso1230'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email:"

          />
       
          <input className='inpso1230'
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
                placeholder="Date:"

          />


<input className='inpso1230'
            type="text"
            name="caseNumber"
            value={formData.caseNumber}
            onChange={handleInputChange}
            placeholder="Case:NO:"

          />
      
        </div>



        <div className='mainco1230'>
       
          <input className='inpso1230'
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title:"

          />
          <input className='inpso1230'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Firstname:"

          />


<input className='inpso1230'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Lastname:"

          />


<select className='selso1230'
            name="country"
            value={formData.country}
            onChange={handleInputChange}

          >
            <option value="">Select country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Aland Islands">Aland Islands</option>
            {/* Add more options as needed */}
          </select>



        </div>



        <div className='mainco1230'>
      
          <select className='selso1230'
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
          >
            <option value="">Select Occupation</option>
            <option value="Doctor">Doctor</option>
            {/* Add more options as needed */}
          </select>


          <input className='inpso1230'
            type="text"
            name="adharCard"
            value={formData.adharCard}
            onChange={handleInputChange}
            placeholder="Aadhar:NO:"

          />



          <select className='selso1230'
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            {/* Add more options as needed */}
          </select>


          <select className='selso1230'
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
          >
            <option value="">Select Marital Status</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
            {/* Add more options as needed */}
          </select>



        </div>




<h2>Contact Information</h2>



<div className='mainco1230201'>
<input className='inpso123001'
            type="email"
            name="emailAddress1"
            value={formData.emailAddress1}
            onChange={handleInputChange}
            placeholder="Email-address1:"

          />
        <input className='inpso123001'
            type="email"
            name="emailAddress2"
            value={formData.emailAddress2}
            onChange={handleInputChange}
            placeholder="Email-address2:"

          />
        <input className='inpso123001'
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="PH:NO:"

          />

        </div>





<h2> Reference Sources</h2>


<div className='mainco111'>

<select className='selso111'
            name="referenceSource"
            value={formData.referenceSource}
            onChange={handleInputChange}
          >
            <option value="">Others</option>
            <option value="Siva">Patient</option>
            <option value="Abhi">Doctor</option>
            <option value="Gopi">External Refer</option>
            {/* <option value="External Referrer">External Referrer</option> */}
            {/* Add more options as needed */}
          </select>

          <input className='inpso111'
            type="text"
            name="selectDoctor"
            value={formData.selectDoctor}
            onChange={handleInputChange}
            placeholder="Referral Name:"

          />

<select className='selso111'
            name="language"
            value={formData.language}
            onChange={handleInputChange}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marati">Marati</option>
          </select>

        </div>




<h2>Patient Relationship</h2>

<div className='mainco222'>

          <input className='inpso222'

            type="text"
            name="selectPatient"
            value={formData.selectPatient}
            onChange={handleInputChange}
            placeholder="Select Patient"

          />
        <select className='selso222'
            name="selectRelation"
            value={formData.selectRelation}
            onChange={handleInputChange}
          >
            <option value="">Select Relation</option>
            <option value="Grand Mother">Grand Mother</option>
            <option value="Brother">Brother</option>
            <option value=" Mother"> Mother</option>
            {/* Add more options as needed */}
          </select>
</div>



<h2>Others</h2>
<div className='mainco333'>

<input className='inpso333'
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Notes:"

          />
        <select className='selso333'
            name="medicalAlerts"
            value={formData.medicalAlerts}
            onChange={handleInputChange}
          >
            <option value="">Select Medical Alerts</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Hypertension">Hypertension</option>
          </select>
        </div>





        <button className='but1999' type="submit">Submit</button>
      </form>

    </div>
  );
};

export default PersonalForm;
