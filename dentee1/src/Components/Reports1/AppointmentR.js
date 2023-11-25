import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import './AppointmentR.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { FaFilter } from 'react-icons/fa';
import { PiPrinterFill, PiDotsThreeOutlineFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import axios from 'axios';

const itemsPerPage = 3;

const AppointmentReport = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/appointment-report');
      setData(response.data);
      console.log('Fetched Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        item.caseNumber.toLowerCase().includes(searchText.toLowerCase()) ||
        item.doctorName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.mobile.toLowerCase().includes(searchText.toLowerCase()) ||
        item.status.toLowerCase().includes(searchText.toLowerCase()) ||
        item.appointmentDate.toLowerCase().includes(searchText.toLowerCase()) ||
        item.arrivalTime.toLowerCase().includes(searchText.toLowerCase()) ||
        item.operationTime.toLowerCase().includes(searchText.toLowerCase()) ||
        item.completeTime.toLowerCase().includes(searchText.toLowerCase()) ||
        item.cancelledDate.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontappo">
        <div className="appo-total">
          <div className="appomain-head">
            <div className="appomainhead-icon">
              <Link to="/Areport">
                <AiOutlineArrowLeft />{' '}
              </Link>
            </div>
            <div className="appo-heading">Report / Appointment Report</div>
            {/* <PiPrinterFill className="appo-icon-1" /> */}
            {/* <button className="appo-button-2">
              <PiDotsThreeOutlineFill />
            </button> */}
          </div>
          <select className='appo-select'>
            <option className='appo-option'>Today</option>
            <option className='appo-option'>Last 7 Days</option>
            <option className='appo-option'>This Week</option>
            <option className='appo-option'>This Month</option>
            <option className='appo-option'>This Year</option>
            <option className='appo-option'>Last Week</option>
            <option className='appo-option'>Last Month</option>
            <option className='appo-option'>Between</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="appo-input"
            value={searchText}
            onChange={handleSearchChange}
          />
          <select className='appo-select1'>
            <option className='appo-option'>View</option>
            <option className='appo-option'>Tabular</option>
          </select>
          <button className="appo-button-1">
            <FaFilter />
          </button>
          <table className="appo-table">
            <thead className="appo-table-head">
              <tr className="tr-appo">
                <th className="th-appo">Case Number</th>
                <th className="th-appo">Doctor Name</th>
                <th className="th-appo">Patient Name</th>
                <th className="th-appo">Mobile</th>
                <th className="th-appo">Status</th>
                <th className="th-appo">Appointment Date</th>
                <th className="th-appo">Arrival Time</th>
                <th className="th-appo">Operation Time</th>
                <th className="th-appo">Complete Time</th>
                <th className="th-appo">Cancelled Date</th>
              </tr>
            </thead>
            <tbody>
              {filterData(currentData).map((item, index) => (
                <tr key={index}>
                  <td>{item.caseNumber}</td>
                  <td>{item.doctorName}</td>
                  <td>{item.patientName}</td>
                  <td>{item.mobile}</td>
                  <td>{item.status}</td>
                  <td>{item.appointmentDate}</td>
                  <td>{item.arrivalTime}</td>
                  <td>{item.operationTime}</td>
                  <td>{item.completeTime}</td>
                  <td>{item.cancelledDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              className='vanitha-sai'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <AiOutlineStepBackward />
            </button>
            <p className="rajuz">{currentPage}</p>
            <button
              className='vanitha-sai'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentReport;
