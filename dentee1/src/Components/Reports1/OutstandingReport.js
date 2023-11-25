import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './OutstandingReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';

const itemsPerPage = 2;

const OutstandingReport = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [openSettingsRow, setOpenSettingsRow] = useState(-1);
  const [editingIndex, setEditingIndex] = useState(null);
  const [patientData, setPatientData] = useState({
    patientName: '',
    caseId: '',
    mobileNumber: '',
    treatmentTotalCost: '',
    treatmentBilledCost: '',
    amountPaid: '',
    treatmentBalance: '',
    billedBalance: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/outstanding-report');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentport = data.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        item.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.caseId.toLowerCase().includes(searchText.toLowerCase()) ||
        item.mobileNumber.toLowerCase().includes(searchText.toLowerCase()) ||
        item.treatmentTotalCost?.toFixed(2).toLowerCase().includes(searchText.toLowerCase()) ||
        item.treatmentBilledCost?.toFixed(2).toLowerCase().includes(searchText.toLowerCase()) ||
        item.amountPaid?.toFixed(2).toLowerCase().includes(searchText.toLowerCase()) ||
        item.treatmentBalance?.toFixed(2).toLowerCase().includes(searchText.toLowerCase()) ||
        item.billedBalance?.toFixed(2).toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const editRow = (index) => {
    setEditingIndex(index);
    const editedData = data[index];
    setPatientData({
      patientName: editedData.patientName,
      caseId: editedData.caseId,
      mobileNumber: editedData.mobileNumber,
      treatmentTotalCost: editedData.treatmentTotalCost || '',
      treatmentBilledCost: editedData.treatmentBilledCost || '',
      amountPaid: editedData.amountPaid || '',
      treatmentBalance: editedData.treatmentBalance || '',
      billedBalance: editedData.billedBalance || '',
    });
    setOpenSettingsRow(index);
  };

  const handleChange = (e) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...data];
    updatedData[editingIndex] = { ...patientData };
    setData(updatedData);
    setEditingIndex(null);
    setPatientData({
      patientName: '',
      caseId: '',
      mobileNumber: '',
      treatmentTotalCost: '',
      treatmentBilledCost: '',
      amountPaid: '',
      treatmentBalance: '',
      billedBalance: '',
    });
    setOpenSettingsRow(-1);
  };

  const handleDeleteRow = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this row?');

    if (confirmDelete) {
      const newData = [...data];
      newData.splice(indexOfFirstItem + index, 1);
      setData(newData);
      setOpenSettingsRow(-1);
      console.log('Row deleted successfully.');
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontoutstanding'>
        <br />
        <header className='conti73'>
          <div className='Outstanding-header'>
            <Link to='/Areport'>
              <AiOutlineArrowLeft />
            </Link>
            <h2 className='outsatanding-head'>Report/Outstandings</h2>
          </div>
        </header>
        <br />

        <div className='p2-hg19'>
          <input className="p3-ry47" type='date' />
          <input
            className="p4-kt65"
            type='search'
            placeholder='search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select className="p5-dc28">
            <option className='option-p5'>View</option>
            <option className='option-p5'>Tabular</option>
            <option className='option-p5'>Chart</option>
          </select>
          <button className="p6-jh53">
            <FaFilter />
          </button>
        </div>
        <br />
        <br />
        <div>
          <table className="p8-vz79">
            <tr className='th-p8-1'>
              <th className='th-p8'>Patient Name</th>
              <th className='th-p8'>CaseId</th>
              <th className='th-p8'>Mobile Number</th>
              <th className='th-p8'>Treatment Total Cost</th>
              <th className='th-p8'>Treatment Billed Cost</th>
              <th className='th-p8'>Amount Paid</th>
              <th className='th-p8'>Treatment Balance</th>
              <th className='th-p8'>Billed Balance</th>
              <th className='th-p8'>Action</th>
            </tr>

            {filterData(currentport).map((item, index) => (
              <tr key={index} className="p9-nb35">
                <td className='td-p9'>{item.patientName}</td>
                <td className='td-p9'>{item.caseId}</td>
                <td className='td-p9'>{item.mobileNumber}</td>
                <td className='td-p9'>{typeof item.treatmentTotalCost === 'number' ? item.treatmentTotalCost.toFixed(2) : item.treatmentTotalCost}</td>
                <td className='td-p9'>{typeof item.treatmentBilledCost === 'number' ? item.treatmentBilledCost.toFixed(2) : item.treatmentBilledCost}</td>
                <td className='td-p9'>{typeof item.amountPaid === 'number' ? item.amountPaid.toFixed(2) : item.amountPaid}</td>
                <td className='td-p9'>{typeof item.treatmentBalance === 'number' ? item.treatmentBalance.toFixed(2) : item.treatmentBalance}</td>
                <td className='td-p9'>{typeof item.billedBalance === 'number' ? item.billedBalance.toFixed(2) : item.billedBalance}</td>
                <td className='td-p9'>
                  <td className='td-an12'>
                    {openSettingsRow === index ? (
                      <div className="row-settings-an12">
                        <FiSettings onClick={() => setOpenSettingsRow(-1)} />
                        <ul className="settings-menu-an12">
                          <li className='li-an12' onClick={() => editRow(index)}>Edit</li>
                          <li className='li-an12' onClick={() => handleDeleteRow(index)}>Delete</li>
                        </ul>
                      </div>
                    ) : (
                      <div className='set'>
                        <FiSettings onClick={() => setOpenSettingsRow(index)} />
                      </div>
                    )}
                  </td>
                  {editingIndex === index && (
                    <div className="edit-modal">
                      <form onSubmit={handleSubmit}>
                        <label>
                          Patient Name:
                          <input
                          className='input678'
                            type="text"
                            name="patientName"
                            value={patientData.patientName}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Case ID:
                          <input
                          className='input678'
                            type="text"
                            name="caseId"
                            value={patientData.caseId}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Mobile Number:
                          <input
                          className='input678'
                            type="text"
                            name="mobileNumber"
                            value={patientData.mobileNumber}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Treatment Total Cost:
                          <input
                          className='input678'
                            type="text"
                            name="treatmentTotalCost"
                            value={patientData.treatmentTotalCost}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Treatment Billed Cost:
                          <input
                          className='input678'
                            type="text"
                            name="treatmentBilledCost"
                            value={patientData.treatmentBilledCost}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Amount Paid:
                          <input
                          className='input678'
                            type="text"
                            name="amountPaid"
                            value={patientData.amountPaid}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Treatment Balance:
                          <input
                          className='input678'
                            type="text"
                            name="treatmentBalance"
                            value={patientData.treatmentBalance}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Billed Balance:
                          <input
                          className='input678'
                            type="text"
                            name="billedBalance"
                            value={patientData.billedBalance}
                            onChange={handleChange}
                          />
                        </label>
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            <tr className="p9-nb35">
              <td className='td-p9'></td>
              <td className='td-p9'></td>
              <td className='td-p9'>Total:</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'>0.00</td>
              <td className='td-p9'></td>
            </tr>
          </table>
        </div>

        <div className='Prasad-3'>
          <button
            className='loki'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='Ramu'>{currentPage}</p>
          <button
            className='loki'
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

export default OutstandingReport;