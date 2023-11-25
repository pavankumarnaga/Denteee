import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from "react-icons/bi";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Ipaccess.css';
import axios from 'axios';

const Ipaccess = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [access, setAccess] = useState([]);

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        (item.date && item.date.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.fromIP && item.fromIP.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.toIP && item.toIP.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.deviceType && item.deviceType.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.actiontype && item.actiontype.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
  };

  // Pagination settings
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filterData(access).slice(indexOfFirstItem, indexOfLastItem);

  const handleEnableDisableClick = () => {
    setIsEnabled(!isEnabled);
    alert(isEnabled ? 'IP Range Disabled' : 'IP Range Enabled');
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= filterData(access).length;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:5001/Ipac', 'newaccess')
      .then((response) => {
        console.log('API Response:', response.data); // Log the response
        setAccess(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontipog37'>
        <div className='main-headipog37'>
          <div className='mainhead-iconipog37'>
            <Link to='/Administator'> <AiOutlineArrowLeft /></Link>
          </div>
          <div className='main-headingipog37'>Administrator/ Manage Clinic IP Access Range</div>
        </div>
        <br />
        <div className='search-container377'>
          <input
            className='search-bar377'
            type='text'
            placeholder='Search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className='search-btn377'>
            <BiSearch />
          </button>
          <Link to='/Ipaccesspage'> <button className='but-btn'>Add IP Range</button> </Link>
          <button
            className={`enable-disable-button-ipog37 ${isEnabled ? 'enabled' : 'disabled'}`}
            onClick={handleEnableDisableClick}
          >
            {isEnabled ? 'Disable' : 'Enable'}
          </button>
        </div>
        <table className="ip-table-ipog37">
          <thead className='threadip'>
            <tr className='trip'>
              <th className='thip'>Date</th>
              <th className='thip'>From IP Address</th>
              <th className='thip'>To IP Address</th>
              <th className='thip'>Device Type</th>
              <th className='thip'>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentData) ? (
              currentData.map((item, index) => (
                <tr key={index}>
                  <td className='tdipog37'>{item.date}</td>
                  <td className='tdipog37'>{item.fromIP}</td>
                  <td className='tdipog37'>{item.toIP}</td>
                  <td className='tdipog37'>{item.deviceType}</td>
                  <td className='tdipog37'>{item.actiontype}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className='pat-ip'>
          <button
            className='but-ip'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-ip'>{currentPage}</p>
          <button
            className='but-ip'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default Ipaccess;