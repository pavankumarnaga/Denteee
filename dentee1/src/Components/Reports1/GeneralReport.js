
import React, { useState, useEffect } from 'react'; // Import useState
import { AiOutlineArrowLeft, AiOutlineStepForward, AiOutlineStepBackward } from 'react-icons/ai';
import { BsSearch, BsFileEarmarkExcelFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import './GeneralReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import * as XLSX from 'xlsx';
import { Link } from "react-router-dom";

const Generalreport = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
const [filteredData, setFilteredData] = useState([]);

  
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5001/generalReport`);
      const result = await response.json();
      console.log('API Response:', result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;
  
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };
  
  const exportExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "GeneralReport");
    XLSX.writeFile(wb, "GeneralReport.xlsx");
  };

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [data, searchInput]);
  
  // Use filteredData instead of currentData
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontgeneral'>
        <div className='GeneralReportBody'>
          <div className='General'>
            <div className="Row">
              <div className='Report'>
                <Link to="/Areport"><AiOutlineArrowLeft className='icon-8' /></Link>
              </div>
              <div className="GeneralReport">
                Report / General Report
              </div>
            </div><br></br>
          </div>
          <div className='Row1'>
            <div className='Selecttype'>
              <select className="Dropdown" id="Dropdown" name="Selecttype">
                <option className='option-doe'>Select Type</option>
                <option className='option-doe' value="BirthDay Report">BirthDay Report</option>
              </select>
            </div>
            <div className='Date'>
              <select className="Today" id="Today" name="Today">
                <option className='option-doe' value="Today">Today</option>
                <option className='option-doe' value="">Last 7 Days</option>
                <option className='option-doe' value="">This Week</option>
                <option className='option-doe' value="">This Month</option>
                <option className='option-doe' value="">This Year</option>
                <option className='option-doe' value="">Last Week</option>
                <option className='option-doe' value="">Last Month</option>
                <option className='option-doe' value="">Between</option>
              </select>
            </div>
            <form className='formgene'>
            <input
  className='Search'
  type="text"
  placeholder='Search'
  value={searchInput}
  onChange={(e) => setSearchInput(e.target.value)}
/>
            </form>
            <div className='Searchicon'>
              <button className='Searchicon1'><BsSearch className='icon' /></button>
            </div>
            <div className='Exel'>
              <button className='excel' type='submit' onClick={exportExcel}><BsFileEarmarkExcelFill className="Icon2" /></button><br></br>
            </div>
          </div><br></br>
           
          <div className='Talke'>
            <table className='daily-table'>
              <thead className='daily-thead'>
                <tr className='daily-headrow'>
                <th className='repor-table-head'>Patient Name</th>
                <th className='repor-table-head'>Mobile Number</th>
                <th className='repor-table-head'>Registration Date</th>
                 <th className='repor-table-head'>Address</th>
                 <th className='repor-table-head'>Gender</th>
                   <th className='repor-table-head'>Email Address</th>
             </tr>
              
              </thead>
              <tbody className='daily-tablebody'>
                {currentData.map((row, rowIndex) => (
                  <tr key={rowIndex} className='daily-tablerow'>
                    
                <td className='daily-tablerow-079'>{row.patientName}</td>
                <td className='daily-tablerow-079'>{row.mobileNumber}</td>
                <td className='daily-tablerow-079'>{row.registrationDate}</td>
                <td className='daily-tablerow-079'>{row.address}</td>
                <td className='daily-tablerow-079'>{row.gender}</td>
                <td className='daily-tablerow-079'>{row.emailAddress}</td>
        
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='kasu'>
            <button className='rama'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='dora'>{currentPage}</p>
            <button className='rama'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Generalreport;