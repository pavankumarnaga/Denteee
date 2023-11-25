import React, { useState, useEffect } from 'react';
import './Smstemplet.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';   
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function YourComponent() {
  const [tableData, setTableData] = useState([]);        
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    fetchSmsTemplates();
  }, []);

  const fetchSmsTemplates = async () => {
    try {
      const response = await axios.get('/sms-template');
      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = tableData.length <= currentPage * itemsPerPage;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => { 
    setIsModalOpen(false);
    setEditIndex(null);
  };       
  
  const handleSave = async () => {
    if (title && message) {
      if (editIndex !== null) {
        try {
          await axios.put(`/sms-template/${tableData[editIndex]._id}`, { title, message });
          const updatedData = [...tableData];
          updatedData[editIndex] = { ...updatedData[editIndex], title, message };
          setTableData(updatedData);
        } catch (error) {
          console.error(error);
        }
        setEditIndex(null);
      } else {
        const smstemplates = {
          title: title,
          message: message,
        };

        // Send a POST request to the backend API
        axios.post('http://localhost:5001/sms-template', smstemplates)
          .then(response => {   
            console.log('SMS saved successfully');
            // Optionally, you can perform any necessary actions after a successful save
          })
          .catch(error => {
            console.error('Failed to save SMS:', error);
            // Handle the error, e.g., display an error message to the user
          });

        closeModal();
        setTitle('');
        setMessage('');
      }
    }
  };

  const handleEdit = (id) => {
    const index = tableData.findIndex((template) => template._id === id);
    setTitle(tableData[index].title);
    setMessage(tableData[index].message);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/sms-templates/${id}`);
      const updatedData = tableData.filter((template) => template._id !== id);
      setTableData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch data from backend when the component mounts
    axios.get('http://localhost:5001/sms-template')
      .then(response => {
        console.log(response.data); // Log the data received from the backend
        setTableData(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const currentTableData = tableData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont-555'>
        <div className="container-555">
          <div className='patientdocument-head-555'>
            <div className='patient-icon-555'>
              <Link to="/Administrator">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className='patient-heading-555'>Message/Manage Sms Template</div>
          </div>
          <br />
          <div className="header-555">
            <div className='search-container-555'>
              <input className='search-bar-555' type='text' placeholder='Search' />
              <button className='search-btn-555'><BiSearch /></button>
            </div>
            <button className="sms-button-555" onClick={openModal}>
              Add SMS
            </button>
          </div>
          <table className="table-555">
            <thead className='threadsmstemplete'>
              <tr className='trsmstemplete'>
                <th className="header-title">Title</th>
                <th className="header-title">Message</th>
                <th className="header-title">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((data, index) => (
                <tr key={index}>
                  <td className='tds'>{data.title}</td>
                  <td className='tds'>{data.message}</td>
                  <td className='tds'>
                    <button className='smsbtn' onClick={() => handleEdit(data._id)}>Edit</button>
                    &nbsp;
                    <button className='smsbtn' onClick={() => handleDelete(data._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='pat-sms'>
            <button
              className='butp-sms'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='pat-but-sms'>{currentPage}</p>
            <button
              className='butp-sms'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-555">
          <div className="modal-content-555">
            <span className="close-555" onClick={closeModal}>
              &times;
            </span>
            <h2 className='modalh2-555'>{editIndex !== null ? 'Edit Template' : 'Add Template'}</h2>
            <div className="modal-input-555">
              <label className='modal-label-555' htmlFor="title">Title:</label>
              <input
                className='modal-type-555'
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />  
            </div>
            <div className="modal-input-555">
              <label className='modal-label-555' htmlFor="message">Message:</label>
              <textarea
                className='modal-area-555'
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="modal-save-555" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default YourComponent;