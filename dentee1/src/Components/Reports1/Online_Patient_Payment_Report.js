
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import './Online_Patient_Payment_Report.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Online_Patient_Payment_Report() {
  const [paymentData, setPaymentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [value, setValue] = useState('');
  const searchFields = [
    'Patientname',
    'casenumber',
    'Recipitnumber',
    'Date',
    'Amount',
    'Paymentsource',
    'Paymentstatus',
  ];

  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTrain = paymentData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= paymentData.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(paymentData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    // Fetch payment data from the backend
    fetch('http://localhost:5001/api/payments')
      .then((response) => response.json())
      .then((data) => setPaymentData(data))
      .catch((error) => console.error('Error fetching payment data:', error));
  }, []); // Run this effect only once on component mount

  const filterBySearchTerm = (payment) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return searchFields.some((field) =>
      payment[field].toLowerCase().includes(lowerCaseSearchTerm)
    );
  };

  const filteredTrain = currentTrain.filter(filterBySearchTerm);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontonline'>
        <div className='online-body'>
          <div className='onlinemain-head'>
            <div className='onlinemainhead-icon'>
              <Link to="/Areport">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className='onlinemain-heading'>Report / Online Patient Payment Report</div>
          </div>
          <div className='online-drop'>
            <select className='afd'>
              <option value="">Today</option>
              <option value="">last 7 days</option>
              <option value="">This week</option>
              <option value="">This month</option>
              <option value="">This year</option>
              <option value="">Last week</option>
              <option value="">Last month</option>
              <option value="">Between</option>
            </select>
            <label className='label-7777'>
              <input
                type="date"
                value="date"
                className='dl'
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </label>
            <label className='label-7777'>
              <input
                type="date"
                value="date"
                className='ld'
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </label>
            <button className='even'>View Report</button>
         
            <input
              type='search'
              placeholder='Search by Patient Name, Case Number, etc.'
              className='holder'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <br></br>
          <div className='second'>
            <table className='tabledot'>
              <thead className='headdot'>
                <tr className='online-table-head'>
                  <th className='tt-head'>Patientname</th>
                  <th className='tt-head'>casenumber</th>
                  <th className='tt-head'>Recipitnumber</th>
                  <th className='tt-head'>Date</th>
                  <th className='tt-head'>Amount</th>
                  <th className='tt-head'>Paymentsource</th>
                  <th className='tt-head'>Paymentstatus</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrain.map((payment, index) => (
                  <tr key={index} className='online-payment-tabledata'>
                    <td className='td-tabledata'>{payment.Patientname}</td>
                    <td className='td-tabledata'>{payment.casenumber}</td>
                    <td className='td-tabledata'>{payment.Recipitnumber}</td>
                    <td className='td-tabledata'>{payment.Date}</td>
                    <td className='td-tabledata'>{payment.Amount}</td>
                    <td className='td-tabledata'>{payment.Paymentsource}</td>
                    <td className='td-tabledata'>{payment.Paymentstatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='chinna'>
            <button className='school'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='krishna'>{currentPage}</p>
            <button className='school'
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
}

export default Online_Patient_Payment_Report;