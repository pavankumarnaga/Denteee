import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Addpatient.css";
import { AiOutlineMail } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaQuestionCircle} from 'react-icons/fa';
import { AiOutlineArrowLeft } from "react-icons/ai";
import img1 from "../Patient/images/img1.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function PatientForm() {
  const [patientData, setPatientData] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    date: "",
    age: "",
    gender: "male",
    phoneNumber: "",
    email: "",
    case: "",
    group: "",
    language: "English",
    tags: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const refresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleSearch = () => {
    console.log("Search clicked");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setPatientData({
      ...patientData,
      [name]: newValue,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e, saveAndAddMore = false) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      for (const key in patientData) {
        formData.append(key, patientData[key]);
      }
      // Make a POST request to your Node.js backend to save patient data
      const response = await axios.post(
        "http://localhost:5002/Addpatient",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // Data was successfully saved to the backend
        alert("Data saved to the backend: " + response.data.message);

        if (saveAndAddMore) {
          // If "Save & Add More" was clicked, reset the form
          setPatientData({
            title: "Mr",
            firstName: "",
            lastName: "",
            date: "",
            age: "",
            gender: "",
            phoneNumber: "",
            email: "",
            case: "",
            group: "",
            language: "",
            tags: "",
          });
          setSelectedImage(null);
        }
      } else {
        alert("Failed to save data to the backend");
      }
    } catch (error) {
      console.error("An error occurred while saving data:", error);
    }
  };

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5002/Addpatient");
        console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincont1234">
        <div className="main-head1234">
          <div className="mainhead-icon1234">
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className="main-heading1234">Patient / Add New Patient</div>
          {/* <button className='Pat123'><FaQuestionCircle className='icon-7' /></button> */}
        </div>
        <div className="main-container123">
          <div className="second-container234">
            <h2 className="ss1">Personal Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="Base-123">
                <div>
                  <input
                    type="date"
                    name="date"
                    className="sa"
                    placeholder="Year of Birth"
                    value={patientData.date}
                    onChange={handleChange}
                  />
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <div className="text-2">
                  <input
                    type="text"
                    className="sa"
                    name="case"
                    placeholder="CASE"
                    value={patientData.case}
                    onChange={handleChange}
                  />

                  {/* <button className="ss" onClick={handleSearch}><BiPencil /></button> */}
                </div>
              </div>
              <br />
              <div className="patient-ds-form123">
                <select
                  className="Drop"
                  name="title"
                  value={patientData.title}
                  onChange={handleChange}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </select>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <div>
                  <input
                    type="text"
                    name="firstName"
                    className="sa"
                    placeholder="First Name"
                    value={patientData.firstName}
                    onChange={handleChange}
                  />
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <div>
                  <input
                    type="text"
                    name="lastName"
                    className="sa"
                    placeholder="Last Name"
                    value={patientData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <br />
              <div className="Date-123">
                <div>
                  <label></label>
                  <input
                    type="text"
                    name="age"
                    className="sa"
                    placeholder="age"
                    value={patientData.age}
                    onChange={handleChange}
                  />
                </div>{" "}
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                <div>
                  <label></label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={patientData.gender === "male"}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={patientData.gender === "female"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div>
              </div>
              <br />
              <div className="Phone-123">
                <div>
                  <label htmlFor="phoneNumber"></label>
                  <input
                    type="number"
                    id="phoneNumber"
                    className="sa"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={patientData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <div className="text-2">
                  <input
                    type="text"
                    className="sa"
                    name="email"
                    placeholder="Email Address1"
                    value={patientData.email}
                    onChange={handleChange}
                  />
                  {/* <button className='ss' onClick={handleSearch}><AiOutlineMail /></button> */}
                </div>
              </div>
              <br />
              <br />
              <br />
              <div>
                <p className="ss2">Add patient to communication group</p>
              </div>
              <div className="Base1">
                <div>
                  <input
                    type="text"
                    name="group"
                    className="sa"
                    placeholder="Add Group...."
                    value={patientData.group}
                    onChange={handleChange}
                  />
                </div>
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                <select
                  className="gender-range1"
                  name="language"
                  value={patientData.language}
                  onChange={handleChange}
                >
                  <option value="English">English</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kannada">Kannada</option>
                </select>
              </div>
              <br/>
              <div className="ss3">
                <p>Patient Tags</p>
              </div>
              <div className="Base3">
                <input
                  type="text"
                  name="tags"
                  className="sa"
                  placeholder="Select Patient Tags...."
                  value={patientData.tags}
                  onChange={handleChange}
                />
              </div>
              <div className="button-container">
                <button
                  type="submit"
                  className="Button009"
                  onClick={(e) => handleSubmit(e, true)}
                >
                  Save
                </button>
                {/* <button
                  type="submit"
                  className="Button009"
                  onClick={(e) => handleSubmit(e, true)} 
                >
                  Save & Add More
                </button> */}
                <button type="submit" className="Button009" onClick={refresh}>
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="image-container2345">
            <div className="image-container">
              <div className="small-image1239">
                <img
                  src={selectedImage ? URL.createObjectURL(selectedImage) : img1}
                  className="IMG1230"
                  alt="Patient"
                  onClick={() => document.querySelector("#imageInput").click()}
                  style={{ cursor: "pointer" }}
                />
                <label className="button135" htmlFor="imageInput">
                  Select Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  id="imageInput"
                />
              </div>     
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientForm;