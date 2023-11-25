import React, { useState, useEffect } from 'react';
import './Passbook.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Link } from "react-router-dom";
import axios from 'axios';

function Passbook() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [passbookData, setPassbookData]=useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/bills')
      .then((response) => setPassbookData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPassbookData = passbookData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= passbookData.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <div className="pass-Body">
          <div className='pass-head'>
            <div className='pass-icon'><Link to='/HomePage'><AiOutlineArrowLeft /></Link></div>
            <div className='pass-acc-1'>Accounts / Passbook</div>
          </div>
          <div className='pass-selc'>
            {/* ... (other input elements for date selection) */}
            <button className='pass-view-re'> View Passbook</button>
            <Link to="/addbills">
              <button className='pass-view-re'> Add new Bill</button>
            </Link>
          </div>
          <div className='pass-search'>
            {/* ... (search input and button) */}
          </div>
          <div className='pass-total'>Opening Balance: <input type='text' value="10,000" readOnly /></div>
          <div className='pass-table'>
            <table className='passbook-table'>
              <thead>
                <tr className='trpass123'>
                  <th className='pass123'>Date</th>
                  <th className='pass123'>Type</th>
                  <th className='pass123'>Details</th>
                  <th className='pass123'>Patient Name</th>
                  <th className='pass123'>Bill</th>
                  <th className='pass123'>Payment</th>
                  <th className='pass123'>Balance Amount</th>
                </tr>
              </thead>
              <tbody>
                {currentPassbookData.map((entry, index) => (
                  <tr className='trpass1234' key={index}>
                    <td className='pass124'>{entry.date}</td>
                    <td className='pass124'>{entry.type}</td>
                    <td className='pass124'>{entry.details}</td>
                    <td className='pass124'>{entry.patientName}</td>
                    <td className='pass124'>{entry.bill}</td>
                    <td className='pass124'>{entry.payment}</td>
                    <td className='pass124'>{entry.balanceAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        


<div className='pat-foot'>
          <button className='but-page-1'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
           <AiOutlineStepBackward/>
          </button>
          <p className='pat-bottle'>{currentPage}</p>
          <button className='but-page-1'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward/>
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Passbook;
