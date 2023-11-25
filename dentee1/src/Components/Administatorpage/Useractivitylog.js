
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import './Useractivitylog.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [additionalDropdown, setAdditionalDropdown] = useState('');
  const [searchText, setSearchText] = useState('');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/Yourdata')
      .then(response => response.json())
      .then(result => setTableData(result))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        (item.name && item.name.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.createdOn && item.createdOn.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.usernamePatientName && item.usernamePatientName.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.eventTypeName && item.eventTypeName.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.eventDetails && item.eventDetails.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
  };
  

  // Pagination variables
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredTableData = filterData(tableData);
  const currentTableData = filteredTableData.slice(indexOfFirstItem, indexOfLastItem);

  const handleOptionChange = (event) => {
    // Your existing code
  };

  const handleAdditionalDropdownChange = (event) => {
    // Your existing code
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= filteredTableData.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont-777'>
        <div className='main-head-777'>
          <div className='mainhead-icon-777'>
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className='main-heading-777'>Administator / User Activity Log</div>
        </div>
        <br></br>
        <div className='mainbox-777'>
          
          <select className="select-77" value={additionalDropdown} onChange={handleAdditionalDropdownChange}>
            <option value="Pavan">Pavan</option>
            <option value="Gopi">Gopi</option>
            <option value="Jaggu">Jaggu</option>
          </select>

          <select className="select-7" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            <option value="Today">Today</option>
            <option value="ThisWeek">This Week</option>
            <option value="ThisMonth">This Month</option>
            <option value="Year">Year</option>
            <option value="Between">Between</option>
          </select>

          {selectedOption === 'ThisWeek' && 
            <div className="custom-fields-777">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
            </div>
          }

          {selectedOption === 'ThisMonth' && 
            <div className="custom-fields-777">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
            </div>
          }

          {selectedOption === 'Year' && 
            <div className="custom-fields-777">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
            </div>
          }

          {selectedOption === 'Between' && 
            <div className="custom-fields-777">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
            </div>
          }

          <div className='search-container-777'>
            <input className='search-bar-777' type='text' placeholder='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className='search-btn-777'><BiSearch /></button>
            <div><button className='button7772'>View Report</button></div>
          </div>

          <div className="tables-container-777">
            <table className="table777">
              <thead className='threadusera'>
                <tr className='trusera'>
                  <th className='th-heading-777'>Name</th>
                  <th className='th-heading-777'>Created On</th>
                  <th className='th-heading-777'>Username/Patient Name</th>
                  <th className='th-heading-777'>Event Type Name</th>
                  <th className='th-heading-777'>Event Details</th>
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((item, index) => (
                  <tr key={index}>
                    <td className="td-777">{item.name}</td>
                    <td className="td-777">{item.createdOn}</td>
                    <td className="td-777">{item.usernamePatientName}</td>
                    <td className="td-777">{item.eventTypeName}</td>
                    <td className="td-777">{item.eventDetails}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='pat-ua'>
            <button className='but-ua' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
              <AiOutlineStepBackward />
            </button>
            <p className='pat-b0t-ua'>{currentPage}</p>
            <button className='but-ua' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;