// CustomPatientReport.js
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import './CustomPatientReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { BsSearch } from 'react-icons/bs';
import { RiFileExcel2Fill } from 'react-icons/ri';

const itemsPerPage = 2;

const CustomizedPatientReport = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Replace the URL with your actual endpoint for custom patient report
      const response = await axios.get('http://localhost:5001/custom-patient-report');
      setData(response.data);
      console.log('Fetched Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontcustom">
        <div className="custom-body-ty">
          <div className="custom-head-4455">
            <Link to="/Areport">
              <div className="custom-icon">
                <AiOutlineArrowLeft className="custom-icon-1" />
              </div>
            </Link>
            <div className="custom-h1">Report / Custom Patient report</div>
          </div>
          <div className="custom-options">
            <div className="custom-options-1">
              <select className="selection-1">
                <option className="sel-option-1">Patient</option>
                <option className="sel-option-1">Treatment</option>
                <option className="sel-option-1">Prescription</option>
              </select>
            </div>
            <div className="custom-options-2">
              <select className="selection-2">
                <option className="sel-option-1">No Custom View</option>
                <option className="sel-option-1">No Custom View Found</option>
                <option className="sel-option-1">Add Custom View</option>
              </select>
            </div>
            <Popup
              trigger={
                <div>
                  <button className="custom-se">
                    <BsSearch className="custom-se-1" />
                  </button>
                </div>
              }
              position="right center"
            >
              <div className="custom-search-container">
                <input className="custom-search-bar" type="text" placeholder="Search" />
                <button className="custom-search-btn">
                  <BsSearch />
                </button>
              </div>
            </Popup>

            <button className="custom-excel">
              <RiFileExcel2Fill className="custom-excel-1" />
            </button>
          </div>

          <div>
            <table className="custom-table">
              <thead className="the-ta">
                <tr className="trzoo">
                  <th className="custom-table-head">Patient Name</th>
                  <th className="custom-table-head">Mobile Number</th>
                  <th className="custom-table-head">Registration Date</th>
                  <th className="custom-table-head">Gender</th>
                  <th className="custom-table-head">Email Address</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr className="custom-data" key={index}>
                    <td className="td-data">{item.patientName}</td>
                    <td className="td-data">{item.mobileNumber}</td>
                    <td className="td-data">{item.registrationDate}</td>
                    <td className="td-data">{item.gender}</td>
                    <td className="td-data">{item.emailAddress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pat-footern2n">
            <button
              className="butpagenationn2n"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className="pat-bottom-numn2n">{currentPage}</p>
            <button
              className="butpagenationn2n"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizedPatientReport;
