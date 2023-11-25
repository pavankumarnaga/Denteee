import React, { useState,useEffect} from 'react';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';
import './Browsersessionhistroy.css';

function SearchTablePage() {
  const[histroy,setHistroy] = useState('');
  const staticData = [
    // { username: 'User1', IP: '192.168.1.1', deviceType: 'Mobile', action: '' },
    // { username: 'User2', IP: '192.168.1.2', deviceType: 'Desktop', action: '' },
    // { username: 'User3', IP: '192.168.1.3', deviceType: 'Desktop', action: '' },
    // { username: 'User4', IP: '192.168.1.4', deviceType: 'Desktop', action: '' },
    // { username: 'User5', IP: '192.168.1.5', deviceType: 'Desktop', action: '' },
    // { username: 'User6', IP: '192.168.1.6', deviceType: 'Desktop', action: '' },
    // // Add more rows as needed
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = histroy.slice(indexOfFirstItem, indexOfLastItem);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = staticData.filter((item) =>
    item.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (index) => {
    // Handle click event for table rows
    console.log(`Clicked row at index ${index}`);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= staticData.length;

  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };



  useEffect(() => {
    // Fetch bank account data from the server
    axios.get('http://localhost:5001/Browser', 'newhistroy') // Use the same endpoint defined in the server
      .then((response) => {
        setHistroy(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch bank accounts:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontgop11'>
        <div className='patientdocument-gop11'>
          <div className='patient-icongop11'>
          
          <Link to='/Administator'>  <AiOutlineArrowLeft/></Link>
          </div>
          <div className='patient-headinggop11'>Administrator / Browser session history</div>
        </div>
        <br />
        <div className='search-containergop11'>
          <input
            className='search-bargop11'
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='search-btngop11'>
            <BiSearch />
          </button>
        </div>
        <br />
        <table className='tabletable' style={{ width: '100%' }}>
          <thead>
            <tr className='table-tr'>
              <th className="table-heading-gop11">Username</th>
              <th className="table-heading-gop11">IP</th>
              <th className="table-heading-gop11">Device Type</th>
              <th className="table-heading-gop11">Action</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(currentData) ? (
           currentData.map((item, index) => (
              <tr key={index}>
               <td>{item.username}</td>
                <td>{item.ip}</td>
                <td>{item.deviceType}</td>
                <td>{item.action} </td>
                 
               
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5">Loading...</td>
    </tr>
  )}
</tbody>


    
            {/* {currentData.map((item, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(index)}
                className="table-row-gop11"
              >
                <td>{item.username}</td>
                <td>{item.ip}</td>
                <td>{item.deviceType}</td>
                <td>
                  {item.action}
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
        <div className='pat-brosw'>
          <button
            className='but-bro'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-bro'>{currentPage}</p>
          <button
            className='but-bro'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchTablePage;