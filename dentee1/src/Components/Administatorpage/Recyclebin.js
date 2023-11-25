import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Recyclebin.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';

const Recyclebin = () => {
  const [recycleBinData, setRecycleBinData] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');   
  const [searchText, setSearchText] = useState('');
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleOption3Change = (e) => {
    setSelectedOption3(e.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleButtonClick = () => {
    // Implement your logic for the button click here
    // You can use the selectedOption1, selectedOption2, selectedOption3, and searchText values
    // to perform your desired actions.
    // Example: Call an API with the selected options and search text
    // axios.post('your-api-endpoint', { selectedOption1, selectedOption2, selectedOption3, searchText })
    //   .then(response => {
    //     // Handle the response
    //   })
    //   .catch(error => {
    //     // Handle errors
    //   });
  };

  const handleEmptyRecycleBin = () => {
    setShowConfirmationPopup(true);
  };

  const handleConfirmationYes = () => {
    // Implement logic for permanent delete here
    // Close the confirmation popup
    setShowConfirmationPopup(false);
  };

  const handleConfirmationNo = () => {
    // Close the confirmation popup
    setShowConfirmationPopup(false);
  };

  const handleReportOptionClick = (reportType) => {
    // Handle the selection of the report type (e.g., "Tabular")
    setSelectedOption3(reportType);
    setShowReportDropdown(false); // Close the dropdown
  };

  const toggleReportDropdown = () => {
    setShowReportDropdown(!showReportDropdown); // Toggle the dropdown visibility
  };

  // Pagination settings
  const itemsPerPage = 5;

  // Calculate the index of the last and first item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the table data to display only the current page's data
  const currentTableData = recycleBinData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= recycleBinData.length;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Fetch recycle bin data from the server
    axios.get('http://localhost:5003/karishma', {
      params: { filter1: selectedOption1, filter2: selectedOption2, filter3: selectedOption3, search: searchText }
    })
      .then((response) => {
        setRecycleBinData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch recycle bin data:', error);
        setLoading(false);
      });
  }, [selectedOption1, selectedOption2, selectedOption3, searchText]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="container-777">
        <div className='patientdocument-head-777'>
          <div className='patient-icon-777'>
            <Link to="/Administator"><AiOutlineArrowLeft/></Link>
          </div>
          <div className='patient-heading-777'>Administrator / Recycle Bin</div>
        </div>
        <div className="top-left-inputs-777">
        <div className="input-group-777">
            <select className='select-777' value={selectedOption1} onChange={handleOption1Change}>
              <option value="">Select Option</option>
              <option value="patient">Patient</option>
              <option value="bill">Bill</option>
              <option value="treatment">Treatment</option>
              <option value="dental-chart">Dental Chart</option>
            </select>
          </div>
          <div className="input-group-777">
            <select className='select-777' value={selectedOption2} onChange={handleOption2Change}>
              <option value="">Select Option</option>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="last-week">Last Week</option>
            </select>
          </div>
          <div className="input-group-777">
            <div className="dropdown-button-777">
              <button className='btn-777' onClick={toggleReportDropdown}>
                View Report
              </button>
              {showReportDropdown && (
                <div className="report-options-dropdown-777">
                  <button onClick={() => handleReportOptionClick('Tabular')}>Tabular</button>
                  <button onClick={() => handleReportOptionClick('Graphical')}>Graphical</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bar-button-flex78">
          <div className='search-container-777'>
            <input className='search-bar-777' type='text' placeholder='Search' value={searchText} onChange={handleSearchTextChange} />
            <button className='search-btn-777'><BiSearch/></button>
          </div>
          <div className="action-buttons-left-777">
          <button className="action-buttons-777">Restore</button>
            <button className="action-buttons delete-777">Delete</button>
            <div className="abc123-777">
              <button className="action-buttons empty-777" onClick={handleEmptyRecycleBin}>
                Empty Recycle Bin
              </button>
            </div>
          </div>
        </div>
        <table className="data-table-777">
          <thead>
            <tr>
              <th>Select All</th>
              <th>Description</th>
              <th>Delete On</th>
              <th>Deleted By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            ) : (
              currentTableData.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>{item.description}</td>
                  <td>{item.deleteDate}</td>
                  <td>{item.deletedBy}</td>
                  <td>
                    <button >Restore</button>
                    <button >Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="pat-ry">
          <button
            className="but-ry"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className="pat-bot-ry">{currentPage}</p>
          <button
            className="but-ry"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default Recyclebin;