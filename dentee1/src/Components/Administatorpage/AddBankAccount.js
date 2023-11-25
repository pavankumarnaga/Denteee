import React, { useState } from 'react';
import axios from 'axios';
import './AddBankAccount.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


function AddBankAccount({ onCancel }) {
  const [bankAccount, setBankAccount] = useState({
    bankName: '',
    accountNumber: '',
    branch: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankAccount({ ...bankAccount, [name]: value });
  };

  const handleSave = () => {
    const newBankAccount = {
      bankName: bankAccount.bankName,
      accountNumber: bankAccount.accountNumber,
      branch: bankAccount.branch,
      city: bankAccount.city,
    };

    // Send a POST request to the backend API
    axios.post('http://localhost:5001/Addbank', newBankAccount)
      .then(response => {
        console.log('Bank account saved successfully');
        // Optionally, you can perform any necessary actions after a successful save
      })
      .catch(error => {
        console.error('Failed to save bank account:', error);
        // Handle the error, e.g., display an error message to the user
      });
  };

  return (
    <>  
    <Navbar />
    <Sidebar />
    <div>
      <div className="add-bank-account-an12">
        <div className="container-an12">
          <div className="grid-columns-3-an12">
            <h1 className="top-right-heading-an12">Bank Account Details</h1>
            <div className='inputs-grids456-an12'>
              <input
                className='input-field567-an12'
                type="text"
                name="bankName"
                placeholder='Bank Name'
                value={bankAccount.bankName}
                onChange={handleInputChange}
              />
              <input
                className='input-field567-an12'
                type="text"
                name="accountNumber"
                placeholder='Account Number'
                value={bankAccount.accountNumber}
                onChange={handleInputChange}
              />
              <input
                className='input-field567-an12'
                type="text"
                name="branch"
                placeholder='Branch'
                value={bankAccount.branch}
                onChange={handleInputChange}
              />
              <input
                className='input-field567-an12'
                type="text"
                name="city"
                placeholder='City'
                value={bankAccount.city}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="buttons-456-an12">
          <button className='button-an12' onClick={handleSave}>Save</button>
          &nbsp;
          <button className='button-an12' onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default AddBankAccount;
