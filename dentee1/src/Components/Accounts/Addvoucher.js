//addvoucher.js     
import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import axios from 'axios';
import './Addvoucher.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Voucher = () => {
  const [formData, setFormData] = useState({
    receiptType: '',
    amount: '',
    paidBy: '',
    date: '',
    totalAmountPaid: '',
    narration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 // ...

const handleSaveClick = async () => {
  try {
    // Make a POST request to your backend with the formData
    const response = await axios.post('http://localhost:5000/api/vouchers', formData);

    console.log('Response from the server:', response.data);

    // Handle success or any other actions you need to take
    alert('Voucher saved successfully!');
  } catch (error) {
    console.error('Error while saving voucher data:', error);

    if (error.message.includes('Network Error')) {
      alert('Network Error: Make sure your server is running.');
    } else {
      alert('Error while saving voucher data. Please try again.');
    }
  }
};

// ...


  return (
    <>  
      <Navbar/>
      <Sidebar/>
      <div>
        <div className='voucher-head'>
          <div className='voucher-icon'>
            <Link to='/HomePage'>
              <AiOutlineArrowLeft/>
            </Link>
          </div>
          <div className='voucher-acc-1'>Accounts / Add Voucher</div>
        </div>
        <div className='voucher-box'>
          <div className='voucher-inbox'>
            <div className='voucher-receipt'>
              <b>Receipt</b>
            </div>
            <div className='voucher-balance'>
              <b>Balance Amount: 0.00</b>
            </div>
            <div className='voucher-input'>
              <input
                type="text"
                name="receiptType"
                value={formData.receiptType}
                onChange={handleInputChange}
                placeholder="Receipt Type"
                className='voucher-receipttype'
              />
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Amount"
                className='voucher-amount'
              />
              <input
                type="text"
                name="paidBy"
                value={formData.paidBy}
                onChange={handleInputChange}
                placeholder="Paid by"
                className='voucher-paidby'
              />
              <BsFillPlusCircleFill className='vid-icon' />
            </div>

            <div className='voucher-inputrow'>
              <input
                type='date'
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className='voucher-date'
              />
              <input
                type="text"
                name="totalAmountPaid"
                value={formData.totalAmountPaid}
                onChange={handleInputChange}
                placeholder="Total Amount Paid"
                className='voucher-paidamount'
              />
            </div>
            <div className='voucher-narrationrow'>
              <input
                type="text"
                name="narration"
                value={formData.narration}
                onChange={handleInputChange}
                placeholder="Narration"
                className='voucher-narration'
              />
            </div>
            <div className='voucher-buttons'>
              <button className='vouchersave' type="button" onClick={handleSaveClick}>
                Save
              </button>
              <button className='vouchercancel'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voucher;