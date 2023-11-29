import React, { useState,useEffect } from 'react';
import { AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import './Ledger.css';
import axios from 'axios';


const Bills2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [payment, setPayment] = useState([]);
  const [error, setError] = useState(null);
  const itemsPerPage = 3; // Number of items to display per page

  const totalItems = payment.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = payment.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    // Fetch data from backend when the component mounts
    axios.get('http://localhost:5000/api/newpayment',payment)
      .then(response => {
        console.log(response.data); // Log the data received from the backend
        setPayment(response.data);   
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <div className='bill-popup'>
        <div className='patledger-total'>
          <div className='patledgerin'>
            <input type='date' className='patledger-date1'></input>
            <div className='patledger-to'>to</div>
            <input type='date' className='patledger-date2'></input>
            <button className='patledger-passbook'>View Passbook</button>
          </div>
          <div className='patledger-totalopeningbal'>
            <div className='opening'>Opening Balance:</div>
            <input type="number" placeholder="0" className='patledger-openingbalance' />
          </div>
          <div>
            <table className='patledger-table'>
              <thead className='patledger-thead'>
                <tr className='patledger-headrow'>
                  <th className='patled-th'>Date</th>
                  <th className='patled-th'>Type</th>
                  <th className='patled-th'>Details</th>
                  <th className='patled-th'>Bill</th>
                  <th className='patled-th'>Payment</th>
                  <th className='patled-th'>Balance Amount</th>
                </tr>
              </thead>
              <tbody className='patledger-tablebody'>
                {currentItems.map((payment, index) => (
                  <tr className='patledger-row' key={index}>
                    <td className='patledger-td'>{payment.date}</td>
                    <td className='patledger-td'>{payment.type}</td>
                    <td className='patledger-td'>{payment.details}</td>
                    <td className='patledger-td'>{payment.bill}</td>
                    <td className='patledger-td'>{payment.paynow}</td>
                    <td className='patledger-td'>{payment.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='pat-footer33pat'>
        <button
          className='butpagenation'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <AiOutlineStepBackward />
        </button>
        <p className='pat-bottom-num33pat'>{currentPage}</p>
        <button
          className='butpagenation'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <AiOutlineStepForward />
        </button>
      </div>
          </div>
          
        </div>
      </div>
   
    </div>
  );
}

export default Bills2;