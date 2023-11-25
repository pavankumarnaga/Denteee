import React, { useState } from 'react';
import './Customerviewpage.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const ViewCustomer1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const postDataToMongoDB = () => {
    axios
      .post('http://localhost:5001/custome', formData) // Make sure to adjust the API route accordingly
      .then((response) => {
        console.log('Data added to MongoDB:', response.data);
        // Optionally, you can reset the form fields or perform other actions
      })
      .catch((error) => {
        console.error('Failed to add data:', error);
      });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontcustomer">
        <div className="varaadd1">
          <div className="main-headcustomva">
            <div className="mainhead-iconva">
              <Link to="/Customerview">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className="main-headingcustomva">Administrator / Patient Documents</div>
          </div>

          <div className="tbadd1">
            <div className="vatabuttonadd1">
              <Link to="/Customerview">
                <button type="text" className="vaadd1">
                  Cancel
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <button type="text" className="vaadd12" onClick={postDataToMongoDB}>
                Save
              </button>
            </div>
            <div className="vara2">
              <div className="varacategoryadd1">Category</div>
              <div className="vara1">
                <select className="varahadd1">
                  <option>Treatment</option>
                  <option>Patient</option>
                  <option>prescription</option>
                </select>
              </div>
            </div>
            <div className="vara2add1">
              <div className="varaname">Name</div>
              <div className="varaname1add1">
                <input
                  type="text"
                  name="name"
                  placeholder="Custom View Name"
                  className="thadd1"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="varacadd1">Define the criteria (if any): </div>
            <div className="vara2add1">
              <select className="varawhenadd1">
                <option>when</option>
              </select>
              <input type="text" placeholder="Select Field..." className="tn"></input>
            </div>
            <div className="varaicon">
              <FiPlus /> Add Criteria
            </div>
            <div className="varacadd1">Column Preference:</div>
            <div className="vara2add1">
              <div className="varaav">AVAILABLE COLUMNS</div>
              <div className="varaseladd1">SELECTED COLUMNS</div>
            </div>
            <div className="vara2add1">
              <div className="varaaa">Table Columns 8</div>
              <div className="varaempadd1">Empty List</div>
            </div>
            <div className="vara2add1">
              <div className="varafitadd1">
                <div className="table-container">
                  <div className="table-bar">
                    <button className="icon-11">
                      <FaAngleDoubleRight className="icon-button" />
                    </button>
                  </div>
                  <div className="varalastadd1">
                    Patient Image
                    <br />
                    Patient Name
                    <br />
                    Patient Code
                    <br />
                    Registration Date
                    <br />
                    Email Address
                    <br />
                    Age
                  </div>
                </div>
              </div>
              <div className="varafitadd1">
                <div className="table-bar">
                  <button className="icon-11">
                    <FaAngleDoubleLeft className="icon-a" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCustomer1;
