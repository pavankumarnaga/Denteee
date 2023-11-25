import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './PatientDocumentReport.css';

const itemsPerPage = 3;

const PatientDocumentReport = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/patient-document-report');
      setData(response.data);
      console.log('Fetched Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='mainconttotal'>
        <div className='Totalbody'>
          <div className='main-headpdocument'>
            <div className='mainhead-iconpdocument'>
              <Link to='/Areport'><AiOutlineArrowLeft /></Link>
            </div>
            <div className='main-headingpdocument'>Report / Patient Documents</div>
          </div>
          <div className='patient-contents'>
            <select className='patient-select1'>
              <option className='option-a1'>All</option>
              <option className='option-a1'>Testimonials</option>
              <option className='option-a1'>Scanned Image</option>
              <option className='option-a1'>Patient Report</option>
              <option className='option-a1'>Unassign</option>
            </select>

            <select className='patient-select2'>
              <option className='option-a1'>Today</option>
              <option className='option-a1'>Last 7 Days</option>
              <option className='option-a1'>This Week</option>
              <option className='option-a1'>This Month</option>
              <option className='option-a1'>This Year</option>
              <option className='option-a1'>Last Week</option>
              <option className='option-a1'>Last Month</option>
              <option className='option-a1'>Between</option>
            </select>

            <button className='patient-view-btn'>View Report</button>
          </div>
          <div className='patient-search-container'>
            <input className='patient-search-bar' type='text' placeholder='Search' />
            <button className='patient-search-btn'><BiSearch /></button>
          </div>
        </div>
        <div>
          <table className='patient-table-sunil'>
            <thead className='head-ue'>
              <tr className='tr-ue'>
                <th className='patient-table-head'>Patient Name</th>
                <th className='patient-table-head'>Mobile Number</th>
                <th className='patient-table-head'>File Name</th>
                <th className='patient-table-head'>Description</th>
                <th className='patient-table-head'>Virtual File Path</th>
                <th className='patient-table-head'>Created On</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, rowIndex) => (
                <tr key={rowIndex} className="patientsome">
                  <td className='ttd'>{row.patientName}</td>
                  <td className='ttd'>{row.mobileNumber}</td>
                  <td className='ttd'>{row.fileName}</td>
                  <td className='ttd'>{row.description}</td>
                  <td className='ttd'>{row.virtualFilePath}</td>
                  <td className='ttd'>{row.createdOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='raka'>
          <button
            className='sati'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiFillStepBackward />
          </button>
          <p className='bapu'>{currentPage}</p>
          <button
            className='sati'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiFillStepForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientDocumentReport;
