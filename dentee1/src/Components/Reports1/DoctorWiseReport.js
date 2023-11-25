import React, { useState, useEffect } from 'react';
import './DoctorWiseReport.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward, AiOutlineEllipsis } from 'react-icons/ai';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';

function Doctorwise_Report_1() {
  const [dataDoctor, setDataDoctor] = useState([]);
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/doctorwise-report');
      setDataDoctor(response.data);
      console.log('Fetched Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentsport = dataDoctor.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= dataDoctor.length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(dataDoctor.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontdws">
        <div className="dwsmaincont">
          <div className="dws-body">
            <div className="dwsmain-head">
              <div className="dwsmainhead-icon">
                <Link to="/Areport">
                  <AiOutlineArrowLeft />{' '}
                </Link>
              </div>
              <div className="dwsmain-heading">Report / DoctorWise Report</div>
            </div>
            <div className="dws-sel">
              <div className="dws-treatment">
                <select className="dws-treatment-1">
                  <option className="option-el">Treatment-Wise</option>
                  <option className="option-el">Billing-Wise</option>
                  <option className="option-el">Payments-Wise</option>
                </select>
              </div>
              <div className="dws-date-sel">
                <select className="dws-date-sel-1">
                  <option className="option-el">Today</option>
                  <option className="option-el">Last 7 Days</option>
                  <option className="option-el">This Week</option>
                  <option className="option-el">This Month</option>
                  <option className="option-el">This Year</option>
                  <option className="option-el">Last Week</option>
                  <option className="option-el">Last Month</option>
                  <option className="option-el">Between</option>
                </select>
              </div>
              <div className="dws-date-1">
                <input className="dws-date-2" type="date"></input>
              </div>
              <div className="dws-date-to"> to </div>
              <div className="dws-date-3">
                <input className="dws-date-4" type="date"></input>
              </div>
              <div className="dws-view">
                <button className="dws-view-1">View</button>
              </div>
            </div>
          </div>
          <div>
            <table className="dws-table-nikhil">
              <thead className="thead-nikhil">
                <tr className="tr-0000">
                  <th className="dws-table-head">Treatment Date</th>
                  <th className="dws-table-head">Doctor Name</th>
                  <th className="dws-table-head">Patient Name</th>
                  <th className="dws-table-head">Treatment</th>
                  <th className="dws-table-head">Treatment Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {currentsport.map((item, index) => (
                  <tr key={index} className="dws-some-1">
                    <td className="td-some-1">{item.treatmentDate}</td>
                    <td className="td-some-1">{item.doctorName}</td>
                    <td className="td-some-1">{item.patientName}</td>
                    <td className="td-some-1">{item.treatment}</td>
                    <td className="td-some-1">{item.treatmentTotalCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='Polinati'>
            <button className='sury'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='Ram-Polinati'>{currentPage}</p>
            <button className='sury'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctorwise_Report_1;