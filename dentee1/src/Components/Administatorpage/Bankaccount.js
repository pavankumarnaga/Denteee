import React, { useState, useEffect } from 'react';
import './Bankaccount.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { ImSearch } from 'react-icons/im';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { TfiSettings } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import AddBankAccount from './AddBankAccount';

function BankAccountManagement() {
  const [showForm, setShowForm] = useState(false);
  const [bankAccounts, setBankAccounts] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openSettingsRow, setOpenSettingsRow] = useState(-1);
  const [editedRow, setEditedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch bank accounts from the backend when the component mounts
    fetch('http://localhost:5001/Addbank')
      .then((response) => response.json())
      .then((data) => setBankAccounts(data))
      .catch((error) => console.error('Error fetching bank accounts:', error));
  }, []);

  const addBankAccount = (newBankAccount) => {
    fetch('http://localhost:5001/Addbank', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBankAccount),
    })
      .then((response) => response.json())
      .then((data) => {
        setBankAccounts([...bankAccounts, newBankAccount]);
        setShowForm(false);
      })
      .catch((error) => console.error('Error adding bank account:', error));
  };

  const handleRowSelect = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleDeleteRow = (index) => {
    fetch(`http://localhost:5001/Addbank/${bankAccounts[index]._id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedBankAccounts = bankAccounts.filter((_, i) => i !== index);
        setBankAccounts(updatedBankAccounts);
        setOpenSettingsRow(-1);
      })
      .catch((error) => console.error('Error deleting bank account:', error));
  };

  const deleteSelectedRows = () => {
    const selectedIds = selectedRows.map((index) => bankAccounts[index]._id);
    fetch('http://localhost:5001/Addbank', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids: selectedIds }),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedBankAccounts = bankAccounts.filter((_, index) => !selectedRows.includes(index));
        setBankAccounts(updatedBankAccounts);
        setSelectedRows([]);
        setOpenSettingsRow(-1);
      })
      .catch((error) => console.error('Error deleting selected bank accounts:', error));
  };

  const editRow = (index) => {
    setEditedRow(index);
    setOpenSettingsRow(-1);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBankAccounts = bankAccounts.slice(indexOfFirstItem, indexOfLastItem);
  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= bankAccounts.length;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };
  
  return (
    <>  
    <Navbar />
    <Sidebar />
    <div className="bank-account-management-an12">
      <div className='patientdocument-head11A'>
        <div className='patient-icon11A'>
          <Link to="/Administator">
            <AiOutlineArrowLeft/>
          </Link>
        </div>
        <div className='patient-heading11A'>Administrator / Manage Bank Account</div>
      </div>

      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div className="search-bar-an12">
        <input type="text" placeholder="Search Bank Account" className='search-bar-an1256'/>
        <button className='search-an12'><ImSearch /></button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/AddBankAccount">
          <button className='add-button-an12'>[+] Add Bank Account</button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className='add-button-an12' onClick={deleteSelectedRows}>[-] Delete Bank Account</button>
      </div>

      <table className='table-an12'>
        <thead>
          <tr className='tr-an12'>
            <th className='th-an12'>Select</th>
            <th className='th-an12'>Bank Name</th>
            <th className='th-an12'>Account Number</th>
            <th className='th-an12'>Branch</th>
            <th className='th-an12'>City</th>
            <th className='th-an12'>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentBankAccounts.map((account, index) => (
            <tr key={index} className={selectedRows.includes(index) ? 'selected-row' : ''}>
              <td className='td-an12'>
                <div>
                  <input
                    className='search-input345'
                    type="checkbox"
                    onChange={() => handleRowSelect(index)}
                    checked={selectedRows.includes(index)}
                  />
                </div>
              </td>
              <td className='td-an12'>{account.bankName}</td>
              <td className='td-an12'>{account.accountNumber}</td>
              <td className='td-an12'>{account.branch}</td>
              <td className='td-an12'>{account.city}</td>
              <td className='td-an12'>
                {openSettingsRow === index ? (
                  <div className="row-settings-an12">
                    <TfiSettings onClick={() => setOpenSettingsRow(-1)} />
                    <ul className="settings-menu-an12">
                      <Link >
                        <li className='li-an12' onClick={() => editRow(index)}>Edit</li>
                      </Link>
                      <li className='li-an12' onClick={() => handleDeleteRow(index)}>Delete</li>
                    </ul>
                  </div>
                ) : (
                  <div className='set'>
                    <TfiSettings onClick={() => setOpenSettingsRow(index)} />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && <AddBankAccount addBankAccount={addBankAccount} onCancel={handleCancel} />}
      
      <div className='pat-ba'>
        <button className='but-ba' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
          <AiOutlineStepBackward/>
        </button>
        <p className='pat-bot-ba'>{currentPage}</p>
        <button className='but-ba' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
          <AiOutlineStepForward/>
        </button>
      </div>
    </div>
    </>
  );
}

export default BankAccountManagement;
