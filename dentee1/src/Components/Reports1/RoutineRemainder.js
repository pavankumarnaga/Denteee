import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import './RoutineRemainder.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { BiSearch } from 'react-icons/bi';
import { SiMicrosoftexcel } from 'react-icons/si';

const itemsPerPage = 3;

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className='pat-footer55pat1'>
      <button
        className='butpagenation-ak55'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <AiOutlineStepBackward />
      </button>
      <p className='pat-bottom-num55pat2'>{currentPage}</p>
      <button
        className='butpagenation-ak55'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        <AiOutlineStepForward />
      </button>
    </div>
  );
};

const Routine_Remainder = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/routine-remainder');
      setData(response.data);
      console.log('Fetched Data:', response.data); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        item.lastTreatmentDate.toLowerCase().includes(searchText.toLowerCase()) ||
        item.patientName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.emailAddress1.toLowerCase().includes(searchText.toLowerCase()) ||
        item.emailAddress2.toLowerCase().includes(searchText.toLowerCase()) ||
        item.address.toLowerCase().includes(searchText.toLowerCase()) ||
        item.mobileNumber.toLowerCase().includes(searchText.toLowerCase()) ||
        item.contactNo.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const totalPages = Math.ceil(filterData(data).length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filterData(data).slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className='maincontroutine-nk'>
        <div className='routine-TotalBody-nd'>
          <div className='routine-head'>
            <Link to='/Areport'>
              <div className='routine-icon'>
                <AiOutlineArrowLeft />
              </div>
            </Link>
            <div className='routine-heading'>
              Report / Routine Remainder Report
            </div>
          </div>

          <div className='routine-se-1'>
            <div className='search-containerremainder'>
              <input
                className='search-barremainder'
                type='text'
                placeholder='Search'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className='search-btnremainder'>
                <BiSearch />
              </button>
            </div>
            <div>
              <SiMicrosoftexcel className='routine-excel-icon' />
            </div>
          </div>

          <div>
            <table className='routine-table-detail'>
              <thead className='headerto-444'>
                <tr className='true-6668'>
                  <th className='th-routine-table-head'>LastTreatmentDate</th>
                  <th className='th-routine-table-head'>Patient Name</th>
                  <th className='th-routine-table-head'>EmailAddress1</th>
                  <th className='th-routine-table-head'>EmailAddress2</th>
                  <th className='th-routine-table-head'>Address</th>
                  <th className='th-routine-table-head'>Mobile Number</th>
                  <th className='th-routine-table-head'>Contact No</th>
                </tr>
              </thead>
              <tbody>
                {itemsToDisplay.map((dataItem, index) => (
                  <tr key={index} className='routine-some'>
                    <td className='td-so'>{dataItem.lastTreatmentDate}</td>
                    <td className='td-so'>{dataItem.patientName}</td>
                    <td className='td-so'>{dataItem.emailAddress1}</td>
                    <td className='td-so'>{dataItem.emailAddress2}</td>
                    <td className='td-so'>{dataItem.address}</td>
                    <td className='td-so'>{dataItem.mobileNumber}</td>
                    <td className='td-so'>{dataItem.contactNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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

export default Routine_Remainder;
