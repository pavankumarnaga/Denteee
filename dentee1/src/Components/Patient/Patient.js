import React, { useState, useEffect } from 'react';
import './Patient.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';


import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPatientId, setSelectedPatientId] = useState(null); // Track selected patient for options
  const [searchText, setSearchText] = useState('');


  
  useEffect(() => {
    axios.get('http://localhost:5002/Addpatient')
      .then((response) => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching patient data', error);
        setLoading(false);
      });
  }, []);



  const handleDeletePatient = (id) => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this patient?');
    if (confirmDelete) {
      // If the user confirms, proceed with the deletion
      deletePatient(id);
    }
  };
  
  const deletePatient = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5002/Addpatient/${id}`);
      if (response.data.message === 'Record deleted successfully') {
        // If the deletion was successful, update the state to reflect the changes
        const updatedPatients = patients.filter((patient) => patient._id !== id);
        setPatients(updatedPatients);
      }
    } catch (error) {
      console.error('Error deleting patient', error);
    }
  };
  

  const toggleOptions = (id) => {
    // Toggle options for the selected patient
    setSelectedPatientId(selectedPatientId === id ? null : id);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedPatientId(null); // Reset selected patient when changing pages
  };


  const handleSearch = () => {
    setCurrentPage(1); // Reset current page when searching
  };

  const filteredPatients = patients.filter((patient) => {
    const searchLowerCase = searchText.toLowerCase();
    return (
      patient.firstName.toLowerCase().includes(searchLowerCase) ||
      patient.lastName.toLowerCase().includes(searchLowerCase) ||
      patient.customerId.toLowerCase().includes(searchLowerCase) ||
      patient.age.toString().includes(searchLowerCase) ||
      patient.gender.toLowerCase().includes(searchLowerCase) ||
      patient.phoneNumber.includes(searchLowerCase)
    );
  });


  const patientsPerPage = 2;
  const isFirstPage = currentPage === 1;
  const isLastPage = (currentPage * patientsPerPage) >= patients.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont3312'>
        <div className='main-head33'>
          <div className='mainhead-icon33'>
            <Link to='/Administator'><AiOutlineArrowLeft /></Link>
          </div>
          <div className='main-heading33'>Patient / All Patients</div>
        </div>

        <div className='search-container33'>
          <input
          className='search-bar33'
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className='search-btn33' onClick={handleSearch}>
          <BiSearch />
        </button>
          <Link to='/Addpatient'>
            <button type='text' className='patient-addnew33'>Add New Patient</button>
          </Link>
        </div>

        <table className="patient-custom-table33">
          <thead className='patient-tbl'>
            <tr className='patient-tble'>
              <th className='custom-tableth33'>Image</th>
              <th className='custom-tableth33'>Name</th>
              <th className='custom-tableth33'>Patient code</th>
              <th className='custom-tableth33'>Age</th>
              <th className='custom-tableth33'>Gender</th>
              <th className='custom-tableth33'>Contact</th>
              <th className='custom-tableth33'>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7">Loading...</td>
              </tr>
      ) : filteredPatients.length === 0 ? (
        <tr>
                <td colSpan="7">No patients found</td>
              </tr>
            ) : (
              filteredPatients
              .slice((currentPage - 1) * patientsPerPage, currentPage * patientsPerPage).map((patient) => (
                <tr key={patient._id}>
                  <td className='patient-gt'>
                       <img src={`http://localhost:5002/${patient.imagePath}`} alt={`Patient ${patient.firstName} ${patient.lastName}`} className="patient-image77331" />
                  </td>
                  <td className='patient-gt'>{patient.firstName}{patient.lastName}</td>
                  <td className='patient-gt'>{patient.customerId}</td>
                  <td className='patient-gt'>{patient.age}</td>
                  <td className='patient-gt'>{patient.gender}</td>
                  <td className='patient-gt'>{patient.phoneNumber}</td>
                  <td className='patient-gt'>
                  

<div className="custom-dropdown">
  <button className="custom-dropdown-toggle" onClick={() => toggleOptions(patient._id)}>
    <FiSettings />
  </button>
  {selectedPatientId === patient._id && (
    <div className="custom-dropdown-options">
      <div className='flex46288'>
        <button className='custom-dropdown-option' onClick={() => handleDeletePatient(patient._id)}>
          Delete
        </button>
       


<Link to={`/Appointment_header/${patient._id}`} className='anchor259'>
  <button
    className='custom-dropdown-option'
    onClick={() => toggleOptions(patient._id)}
  >
    View Details
  </button>
</Link>



      </div>
    </div>
  )}
</div>

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className='pat-footer33'>
          <button className='butpage' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bottom-num33'>{currentPage}</p>
          <button className='butpage' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default Patient;
