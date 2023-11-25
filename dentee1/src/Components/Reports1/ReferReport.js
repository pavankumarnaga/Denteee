
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStepBackward, AiOutlineCaretRight, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from "react-icons/bi";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft } from "react-icons/ai";
import './ReferReport.css';

function ReferReport() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [Data, setData] = useState([
    // Select : "",
    // RegistrationDate: "",
    // ReferrerName: "",
    // ReferredBy: "",
    // MobileNumber: "",
    // EmailAddress: "",
  
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchFields = [
   ' Select',
  'RegistrationDate',
  'ReferrerName',
  'ReferredBy',
  'MobileNumber',
  'EmailAddress',
  ];



  useEffect(() => {
    // Correct placement of fetchData inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/referrers');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData when the component mounts

  }, [setData]); // Dependency array should be closed here
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = Data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(Data.length / itemsPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const filterBySearchTerm = (payment) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return searchFields.some((field) =>
      payment[field] && payment[field].toLowerCase().includes(lowerCaseSearchTerm)
    );
  };
  
  const filteredTrain = currentData.filter(filterBySearchTerm);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontrefer'>
        <div className='ReferReport-header'>
          <Link to='/Areport'>
            <div className='refer-icon'><AiOutlineArrowLeft className='refer-bckbtn' /></div>
          </Link>
          <h2 className='refer-heading'>Report/Referrer Report</h2>
        </div>
        <div className="doctor-form-group14">
          <label className='label-1111'></label>
          <select className="doctor-form-control14" name="specialization" required>
            <option className='option-control14'>Patient</option>
            <option className='option-control14'>Others</option>
            <option className='option-control14'>Doctor</option>
            <option className='option-control14'>External Referrer</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <select className="doctor-form-control14" name="specialization" required>
            <option className='option-control14'>Today</option>
            <option className='option-control14'>Last 7 Days</option>
            <option className='option-control14'>This Week</option>
            <option className='option-control14'>This year</option>
            <option className='option-control14'>Last Week</option>
            <option className='option-control14'>Last Month</option>
            <option className='option-control14'>Between</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className='button-refer'> View Report</button>
       
          {/* <div className='search-containerrefer'> */}
          <input
            className='search-barrefer'
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={handleSearchChange}  
          />
          <button className='search-btnrefer' onClick={() => setSearchTerm('')}>
            <BiSearch />
          </button>
        {/* </div> */}
        
        </div>
        <br></br>
        <table className="table123">
          <thead className='refer-table-head'>
            <tr className='tr-to'>
              <th className="thsize">Select</th>
              <th className="thsize">Registration Date</th>
              <th className="thsize">Referrer Name</th>
              <th className="thsize">Referred By</th>
              <th className="thsize">Mobile Number</th>
              <th className="thsize">Email Address 1</th>
            </tr>
          </thead>
          <tbody className='body-main'>
            {filteredTrain.map((item, index) => (
              <tr key={index} className='refer-table-data'>
                <td className='td-ata'>{item.Select}</td>
                <td className='td-ata'>{item.RegistrationDate}</td>
                <td className='td-ata'>{item.ReferrerName}</td>
                <td className='td-ata'>{item.ReferredBy}</td>
                <td className='td-ata'>{item.MobileNumber}</td>
                <td className='td-ata'>{item.EmailAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='sarala'>
          <button className='raji'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='janu'>{currentPage}</p>
          <button className='raji'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  )
};

export default ReferReport;