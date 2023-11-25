import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Addbankdeposit.css';
function AddBankDeposit() {
  const [date, setDate] = useState('');
  const [bankName, setBankName] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [comments, setComments] = useState('');

  const handleSave = async () => {
    try {
      // Send a POST request to the backend API
      const response = await axios.post('http://127.0.0.1:5000/api/bankdeposits', {
        date: date,
        bankName :bankName,
        transactionId :transactionId,
        comments:comments,
      });

      console.log(response.data);
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      console.error(error);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <>  
      <Navbar />
      <Sidebar />
      <div className='maincontbkdep'>
        <div className='bankdepositheader'>
          <div className='main-headaddd'>
            <div className='mainhead-iconaddd'><Link to='/Homepage'><AiOutlineArrowLeft/></Link></div>
            <div className='main-headingaddd'>Accounts / Add Bank Deposit</div>
          </div>
          <br />
        </div>
        <div className='bankdepositpp'>
          <h1>Bank Details</h1>
          <div className='Bankdepositp'>
            <input className='inputpp' type="date" id="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
            <input className='inputpp' type="text" id="selectbankname" placeholder='Select Bank Name' value={bankName} onChange={(e) => setBankName(e.target.value)} />
            <input className='inputpp' type="number" id="0" placeholder='0' />
            <input className='inputpp' type="text" id="transationid" placeholder='Transation Id' value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />
            <input className='inputpp' type="text" id="comments" placeholder='Comments' value={comments} onChange={(e) => setComments(e.target.value)} />
          </div>
          <div className='bds-ff1'>
            <div className='apay-ff2'>
              <button className='bds-save' onClick={handleSave}>Save</button>
            </div>
            <div className='apay-ff3'>
              <Link to='/Bankdetails'>
                <button className='bds-cancel'>Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBankDeposit;