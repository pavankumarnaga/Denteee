import React, { useState } from 'react';
import { AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import './Ledger.css';

const dummyData = [
  {
    date: '2023-10-01',
    type: 'Expense',
    details: 'Supplies',
    bill: 150.0,
    payment: 50.0,
    balance: 100.0,
  },
  {
    date: '2023-10-05',
    type: 'Income',
    details: 'Consultation Fee',
    bill: 200.0,
    payment: 0.0,
    balance: 300.0,
  },
  // Add more dummy data items here
];

const Bills2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Number of items to display per page

  const totalItems = dummyData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = dummyData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

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
                {currentItems.map((item, index) => (
                  <tr className='patledger-row' key={index}>
                    <td className='patledger-td'>{item.date}</td>
                    <td className='patledger-td'>{item.type}</td>
                    <td className='patledger-td'>{item.details}</td>
                    <td className='patledger-td'>{item.bill}</td>
                    <td className='patledger-td'>{item.payment}</td>
                    <td className='patledger-td'>{item.balance}</td>
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
