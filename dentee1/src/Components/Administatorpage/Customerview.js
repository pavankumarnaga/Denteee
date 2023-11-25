import React, { useState, useEffect } from 'react';
import './Customerview.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';

function Customerview() {
  const [dummyPatients, setDummyPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [customerview, setCustomerview] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [tableData, setTableData] = useState('');
  const [category, setCategory] = useState('');
  const itemsPerPage = 5;

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter patients based on the search query
  const filteredPatients = dummyPatients.filter(
    (patient) =>
      patient.customerview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current patients for the current page
  const currentPatients = filteredPatients.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  // Fetch data from the server on component mount
  useEffect(() => {
    axios
      .get('http://localhost:5002/Customerview')
      .then((response) => {
        setDummyPatients(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch patient data:', error);
      });
  }, []);


  const handleEdit = (index) => {
    // Populate the popup fields with the data of the selected row for editing
    setCustomerview(tableData[index].customerview);
    setCategory(tableData[index].category);
    setEditIndex(index); // Set edit mode
  };

  const handleDelete = (index) => {
    // Remove the selected row from the tableData array
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Customerviewmain">
        <div className="main-head-customer">
          <div className="mainhead-icon-customer">
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className="main-heading-customer">Report / Patient Documents</div>
        </div>

        <div className="Customer-flow-56">
          <div className="search-container-customer">
            <input
              className="search-bar-customer"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn-customer">
              <BiSearch />
            </button>
            <Link to="/Customerviewpage">
              <button className="add-button455">Add New Customerview</button>
            </Link>
          </div>
        </div>

        <table className="Customer-table455">
          <thead className="customer-thread">
            <tr className="customer-tr">
              <th className="customer-th">Customerview</th>
              <th className="customer-th">Category</th>
              <th className="customer-th">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentPatients.map((patient, index) => (
              <tr key={index} className="customer-tr">
                <td className="customer-td">{patient.customerview}</td>
                <td className="customer-td">{patient.category}</td>
                {/* <td className="customer-td">{patient.action}</td>     */}
                <td className='customer-td'>
                    <button className='custbtn' onClick={() => handleEdit(index)}>Edit</button>
                &nbsp;
                    <button className='custbtn' onClick={() => handleDelete(index)}>Delete</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pat-cv">
          <button
            className="but-cv" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <AiOutlineStepBackward />
          </button>
          <p className="pat-bot-cv">{currentPage}</p>
          <button
            className="but-cv"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= filteredPatients.length}
          >
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default Customerview;