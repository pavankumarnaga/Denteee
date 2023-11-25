import React, { useState, useEffect } from 'react';
import './ConsultantBilling.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

const ConsultantBilling = () => {
  const itemsPerPage = 3;
  const [consultantData, setConsultantData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = consultantData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= consultantData.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(consultantData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    // Fetch consultant billing data from the backend
    fetch('http://localhost:5001/api/consultantBilling')
      .then((response) => response.json())
      .then((data) => setConsultantData(data))
      .catch((error) => console.error('Error fetching consultant billing data:', error));
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(consultantData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Labwork Data');
    XLSX.writeFile(wb, 'labwork_data.xlsx');
  };

  const searchFields = ['doctorName', 'patientNumber', 'receiptNo', 'date', 'amount'];

  const filterBySearchTerm = (consultant) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return searchFields.some((field) => {
      const fieldValue = consultant[field];

      if (typeof fieldValue === 'string') {
        return fieldValue.toLowerCase().includes(lowerCaseSearchTerm);
      }

      return false; // Ignore non-string fields
    });
  };

  const filteredData = currentData.filter(filterBySearchTerm);

  
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontconsul'>
        <div className='ConsultantTotalBody'>
          <div className='consultant-head'>
            <Link to='/Areport'>
              <div className='consultant-icon'><AiOutlineArrowLeft /></div>
            </Link>
            <div className='consultant-heading'>Report / Consultant Billing Report</div>
          </div>
          <div>
          <div className='consultant-bill-contents'>
            <select className='consultant-bill-select'>
              <option className='opop'>Today</option>
              <option className='opop'>Last 7 Days</option>
              <option className='opop'>This Week</option>
              <option className='opop'>This Month</option>
              <option className='opop'>This Year</option>
              <option className='opop'>Last Week</option>
              <option className='opop'>Last Month</option>
              <option className='opop'>Between</option>
            </select>
            <select className='consultant-view-report'>
              <option className='opop-1'>
                View Report
              </option>
            </select>
            <button className="petty" onClick={exportToExcel}>
                <SiMicrosoftexcel style={{ color: 'green' }} className='nanaji' />
              </button>

          <div className='search-containerbreport'>
          <input
            className='search-barbreport'
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='search-btnbreport'>
            <BiSearch />
          </button>
          </div>
        </div>
            <table className='patient-table-sunil'>
              <thead className='th4t'>
                <tr className='trtr'>
                  <th className='consultant-table-head1'>Doctor Name</th>
                  <th className='consultant-table-head'>Patient Number</th>
                  <th className='consultant-table-head'>Receipt No</th>
                  <th className='consultant-table-head'>Date</th>
                  <th className='consultant-table-head'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((consultant, index) => (
                  <tr key={index} className="consultantsome">
                    <td className='tdtd'>{consultant.doctorName}</td>
                    <td className='tdtd'>{consultant.patientNumber}</td>
                    <td className='tdtd'>{consultant.receiptNo}</td>
                    <td className='tdtd'>{consultant.date}</td>
                    <td className='tdtd'>{consultant.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='lovaraju'>
            <button className='vanitha'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='Rohani'>{currentPage}</p>
            <button className='vanitha'
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

export default ConsultantBilling;