import React, { useState, useEffect } from 'react';
import './PatientPersonalReport.css';
import { BiSearch } from 'react-icons/bi';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const itemsPerPage = 3;

const PatientPersonalReport = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/patient-personal-report');
      setData(response.data);
      console.log('Fetched Data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        (item.patientName && item.patientName.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.mobile && item.mobile.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.attribute && item.attribute.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.value && item.value.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
  };
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const current = filterData(data).slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= filterData(data).length;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(filterData(data).length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontpatient">
        <div className="personal-head">
          <Link to="/Areport">
            <div className="personalreport-icon">
              <AiOutlineArrowLeft />
            </div>
          </Link>
          <div className="personalreport-acc-1">
            Report / Patient Personal Attribute Report
          </div>
        </div>
        <div className="personalreport-total">
          <div className="personalreport-buttons">
            <input
              className="personalreport-search"
              placeholder="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-btnpersonal">
              <BiSearch />
            </button>
            <select className="personalview-select">
              <option className="optio">All Attributes</option>
              <option className="optio">School Name</option>
              <option className="optio">Date of Anniversary</option>
              <option className="optio">Tags</option>
              <option className="optio">Company Name</option>
              <option className="optio">Spouse Name</option>
            </select>
            <button className="personalreport-view">view</button>
          </div>
          <div>
            <table className="personalpetty-table-tnx">
              <thead className="theaduv">
                <tr className="trmobi">
                  <th className="th-nx">Patient Name</th>
                  <th className="th-nx">Mobile</th>
                  <th className="th-nx">Attribute</th>
                  <th className="th-nx">Value</th>
                </tr>
              </thead>
              <tbody className="tbodyuv">
                {current.map((patient) => (
                  <tr className="trmobi" key={patient.id}>
                    <td className="dt-yz77">{patient.patientName}</td>
                    <td className="dt-yz77">{patient.mobile}</td>
                    <td className="dt-yz77">{patient.attribute}</td>
                    <td className="dt-yz77">{patient.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='Pichi-1'>
            <button className='Amg-sch'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='pat-bag-21'>{currentPage}</p>
            <button className='Amg-sch'
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
};

export default PatientPersonalReport;