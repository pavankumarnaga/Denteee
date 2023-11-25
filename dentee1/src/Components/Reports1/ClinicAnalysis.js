import React, { useState, useEffect } from 'react';
import './ClinicAnalysis.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { SiMicrosoftexcel } from 'react-icons/si';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

    
const ClinicDataAnalysis = () => {
    const [data, setData] = useState([]);
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      fetchData();
    }, [currentPage]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/clinicAnalysis');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const exportExcel = () => {
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "ClinicAnalysis Data");
        XLSX.writeFile(wb, "ClinicAnalysis_data.xlsx");
    };



    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const isFirstPage = currentPage === 1;
    const isLastPage = indexOfLastItem >= data.length;

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="maincontclinic">
                <div className="clinic-head">
                    <Link to="/Areport">
                        <div className="clinic-icon">
                            <AiOutlineArrowLeft />
                        </div>
                    </Link>
                    <div className="clinic-acc-1">Report / Clinic Data Analysis</div>
                </div>
                <div className="clinic-total">
                    <select className="clinic-select">
                        <option className="option-total">Today</option>
                        <option className="option-total">Last 7 days</option>
                        <option className="option-total">This Week</option>
                        <option className="option-total">This Month</option>
                        <option className="option-total">This year</option>
                        <option className="option-total">Last Week</option>
                        <option className="option-total">Last Month</option>
                        <option className="option-total">Between</option>
                    </select>
                    <input type="date" className="clinicdate-1" />
                    <div className="clinic-to">to</div>
                    <input type="date" className="clinicdate-2" />
                    <select className="clinic-report">
                        <option className="option-total">View Report</option>
                        <option className="option-total">Tabular</option>
                        <option className="option-total">Graph</option>
                    </select>
                    <button onClick={exportExcel} className="clinic-button">
                        <SiMicrosoftexcel className="clinic-icon2" />
                    </button>
                </div>
                <div>
                <table className='daily-table3'>
              <thead className='daily-thead3'>
                <tr className='daily-headrow3'>
                <th className='repor-table-head3'>Header</th>
                <th className='repor-table-head3'>2022-9</th>
                <th className='repor-table-head3'>2022-10</th>
                 <th className='repor-table-head3'>2022-11</th>
                 <th className='repor-table-head3'>2022-12</th>
                <th className='repor-table-head3'>2023-1</th>
                <th className='repor-table-head3'>2023-2</th>
                <th className='repor-table-head3'>2023-3</th>
                <th className='repor-table-head3'>2023-4</th>
                 <th className='repor-table-head3'>2023-5</th>
                 <th className='repor-table-head3'>2023-6</th>
                 <th className='repor-table-head3'>2023-7</th> 
                 <th className='repor-table-head3'>2023-8</th>                  
             </tr>    
              </thead>
              <tbody className='daily-tablebody3'>
                {currentData.map((row, rowIndex) => (
                  <tr key={rowIndex} className='daily-tablerow3'>
                <td className='daily-tablerow-0793'>{row.header}</td>
                <td className='daily-tablerow-0793'>{row.yeara}</td>
                <td className='daily-tablerow-0793'>{row.yearb}</td>
                <td className='daily-tablerow-0793'>{row.yearc}</td>
                <td className='daily-tablerow-0793'>{row.yeard}</td>
                <td className='daily-tablerow-0793'>{row.yeare}</td>
                <td className='daily-tablerow-0793'>{row.yearf}</td>
                <td className='daily-tablerow-0793'>{row.yearg}</td>
                <td className='daily-tablerow-0793'>{row.yearh}</td>
                <td className='daily-tablerow-0793'>{row.yeari}</td>
                <td className='daily-tablerow-0793'>{row.yearj}</td>
                <td className='daily-tablerow-0793'>{row.yeark}</td> 
                <td className='daily-tablerow-0793'>{row.yearl}</td>               
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
        </>
    );
};

export default ClinicDataAnalysis;