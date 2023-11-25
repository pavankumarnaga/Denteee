import React, { useState, useEffect } from 'react';
import './Manageclinic.css';
import { AiOutlineArrowLeft, AiOutlineStepForward, AiOutlineStepBackward } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ManageClinicChair() {
  const [clinicChairs, setClinicChairs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [chairName, setChairName] = useState('');
  const [description, setDescription] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editIndex, setEditIndex] = useState(null);

  const itemsPerPage = 5;

  useEffect(() => {
    fetchClinicChairs();
  }, []);

  const fetchClinicChairs = async () => {
    try {
      const response = await axios.get('/clinic-chair');
      setClinicChairs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = clinicChairs.length <= currentPage * itemsPerPage;

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setEditIndex(null);
    setChairName('');
    setDescription('');
  };

  const handleSave = async () => {
    if (chairName && description) {
      if (editIndex !== null) {
        try {
          await axios.put(`/clinic-chair/${clinicChairs[editIndex]._id}`, { chairName, description });
          const updatedData = [...clinicChairs];
          updatedData[editIndex] = { ...updatedData[editIndex], chairName, description };
          setClinicChairs(updatedData);
        } catch (error) {
          console.error(error);
        }
        setEditIndex(null);
      } else {
        const newChair = {
          chairName: chairName,
          description: description,
        };

        axios.post('http://localhost:5001/clinic-chair', newChair)
          .then(response => {
            console.log('Chair saved successfully');
          })
          .catch(error => {
            console.error('Failed to save Chair:', error);
          });

        closePopup();
      }
    }
  };

  const handleEdit = (id) => {
    const index = clinicChairs.findIndex((chair) => chair._id === id);
    setChairName(clinicChairs[index].chairName);
    setDescription(clinicChairs[index].description);
    setEditIndex(index);
    setShowPopup(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/clinic-chairs/${id}`);
      const updatedData = clinicChairs.filter((chair) => chair._id !== id);
      setClinicChairs(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClinicChairs = clinicChairs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont221-1'>
        <div className='maincont-ad-11'>
          <div className='main40'>
            <div className='main-headmanage'>
              <div className='mainhead-iconmanage'>
                <Link to='/Administator'>
                  <AiOutlineArrowLeft />
                </Link>
              </div>
              <div className='main-headingmanage'>Administrator/ManageClinicChair</div>
            </div>

            <div className='Manage-button-flexrow'></div>

            <div className='Manage-Delet-chair'>
              <button className="Manage-add-button41" onClick={openPopup}>Add Chairs</button>
              <button className="Manage-add-button43">Delete Chairs</button>
            </div>

            <table className="Manage-table">
              <thead>
                <tr>
                  <th className='mc-mc'>Select all</th>
                  <th className='mc-mc'>Chair</th>
                  <th className='mc-mc'>Description</th>
                  <th className='mc-mc'>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentClinicChairs.map((chair, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className='search-input345'
                        type="checkbox"
                      />
                    </td>
                    <td>{chair.chairName}</td>
                    <td>{chair.description}</td>
                    <td>
                      <button className='smsbtn' onClick={() => handleEdit(chair._id)}>Edit</button>
                      &nbsp;
                      <button className='smsbtn' onClick={() => handleDelete(chair._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showPopup && (
              <div className="Manage-popup">
                <div className="Manage-popup-content">
                  <button className="Manage-close-button" onClick={closePopup}>X</button>
                  <h3>{editIndex !== null ? 'Edit Chair' : 'Add Chair'}</h3>
                  <hr></hr>
                  <form className='vamanage11'>
                    <div className='Manage-data123'>
                      <label className='manage1va' htmlFor="chairName">Chair name:</label>
                      <input
                        className='manage1vaa1'
                        type="text"
                        id="chairName"
                        value={chairName}
                        onChange={(e) => setChairName(e.target.value)}
                      />

                      <label className='manage1va' htmlFor="description">Description:</label>
                      <input
                        className='manage1vaa1'
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <button className='but-va-11' onClick={handleSave} type="button">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='pat-mc'>
        <button
          className='but-mc'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          <AiOutlineStepBackward />
        </button>
        <p className='pat-bot-mc'>{currentPage}</p>
        <button
          className='but-mc'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}
        >
          <AiOutlineStepForward />
        </button>
      </div>
    </>
  );
}

export default ManageClinicChair;
