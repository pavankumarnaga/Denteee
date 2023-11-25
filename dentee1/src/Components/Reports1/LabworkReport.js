import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import './LabworkReport.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { BiSearch } from "react-icons/bi";
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from 'xlsx';

const itemsPerPage = 3;

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className='pat-footer339pat'>
      <button className='butpagenation9'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <AiOutlineStepBackward />
      </button>
      <p className='pat-bottom-num339pat'>{currentPage}</p>
      <button className='butpagenation9'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        <AiOutlineStepForward />
      </button>
    </div>
  );
};

const LabworkReport = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/labwork-report');
      setData(response.data);
      console.log('Fetched Data:', response.data); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        item.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.orderNo.toLowerCase().includes(searchText.toLowerCase()) ||
        item.labWorkDate.toLowerCase().includes(searchText.toLowerCase()) ||
        item.supplierName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.cost.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filterData(data).slice(startIndex, endIndex);

  const totalPages = Math.ceil(filterData(data).length / itemsPerPage);

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(filterData(data));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Labwork Data");
    XLSX.writeFile(wb, "labwork_data.xlsx");
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontlab'>
        <div className='labworkTotalBody'>
          <div className='labmain-head'>
            <div className='labmainhead-icon'>
              <Link to="/Areport">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className='labmain-heading'>Report / Labwork Product Wise Report</div>
          </div>

          <div className='labwork-bill-contents'>
            <select className='labwork-bill-select'>
              <option className='option-conten'>Today</option>
              <option className='option-conten'>Last 7 Days</option>
              <option className='option-conten'>This Week</option>
              <option className='option-conten'>This Month</option>
              <option className='option-conten'>This Year</option>
              <option className='option-conten'>Last Week</option>
              <option className='option-conten'>Last Month</option>
              <option className='option-conten'>Between</option>
            </select>
            <select className='labwork-view-report'>
              <option className='option-conten'>
                View Report
              </option>
            </select>
            <SiMicrosoftexcel className='labwork-excel-icon' onClick={exportToExcel} />
          </div>

          <div className='search-containerlabpw'>
            <input
              className='search-barlabpw'
              type='text'
              placeholder='Search'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className='search-btnlabpw'><BiSearch /></button>
          </div>

          <table className='labwork-table-sunil'>
            <thead className='labheaddot-6665'>
              <tr className='labdot-4445'>
                <th className='labwork-table-head'>Patient Name</th>
                <th className='labwork-table-head'>Category Name</th>
                <th className='labwork-table-head'>Order No</th>
                <th className='labwork-table-head'>LabWork Date</th>
                <th className='labwork-table-head'>Supplier Name</th>
                <th className='labwork-table-head'>Cost</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr className="labworksome" key={index}>
                  <td className='tddt'>{item.patientName}</td>
                  <td className='tddt'>{item.categoryName}</td>
                  <td className='tddt'>{item.orderNo}</td>
                  <td className='tddt'>{item.labWorkDate}</td>
                  <td className='tddt'>{item.supplierName}</td>
                  <td className='tddt'>{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default LabworkReport;
