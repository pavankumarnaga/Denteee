import React, { useState,useEffect } from 'react'; // Import useState from 'react'
import './Analysis.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg';
import { FaFileExcel } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';

const Analysis = () => {
  // Sample patient data
  const [reports, setReports] = useState([
   
  ]);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const current = reports.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= reports.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    // Fetch bank account data from the server
    axios.get('http://localhost:5001/Report', 'newreports') // Use the same endpoint defined in the server
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch bank accounts:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <div className="analysis-total">
          <div className="analysis-head">
            <Link to="/Areport">
              <div className="analysis-icon">
                <AiOutlineArrowLeft />
              </div>
            </Link>
            <div className="analysis-acc-1">Report / Patient Analysis</div>
            <div className="analysis-profileicon">
              <CgProfile />
            </div>
            <div className="analysis-excelicon">
              <FaFileExcel />
            </div>
            <div className="analysis-info">
              <ImProfile />
            </div>
            <button className="analysis-filter">
              <FiFilter />
            </button>
          </div>
          <div>
            <table className="analysis-table">
              <thead className="analysis-th">
                <tr className="analysis-tablerow">
                  <th className="analysis-th1">Patient Code</th>
                  <th className="analysis-th1">Patient Name</th>
                  <th className="analysis-th1">Gender</th>
                  <th className="analysis-th1">Mobile Number</th>
                  <th className="analysis-th1">Email Address</th>
                  <th className="analysis-th1">Age</th>
                  <th className="analysis-th1">Registration Date</th>
                </tr>
              </thead>
              <tbody className="analysis-tbody">
              
              
              {current.map((patient, index) => (
            <tr key={index} >
                    <td className="analysis-tabletd">{patient.patientCode}</td>
                    <td className="analysis-tabletd">{patient.patientName}</td>
                    <td className="analysis-tabletd">{patient.gender}</td>
                    <td className="analysis-tabletd">{patient.mobileNumber}</td>
                    <td className="analysis-tabletd">{patient.emailAddress}</td>
                    <td className="analysis-tabletd">{patient.age}</td>
                    <td className="analysis-tabletd">{patient.registrationDate}</td>
                  </tr>
                ))} 
              </tbody>
            </table>
          </div>
          <div className='pat-gopi-11'>
            <button className='but-gopi-22'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='pat-bottle-21'>{currentPage}</p>
            <button className='but-gopi-22'
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

export default Analysis;