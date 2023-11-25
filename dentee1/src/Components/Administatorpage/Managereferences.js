import React, { useState, useEffect } from 'react';
import './Managereferences.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ManageReferences() {
  const [tableData, setTableData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const itemsPerPage = 3;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = tableData.length <= currentPage * itemsPerPage;

  const openPopup = () => {
    setIsModalOpen(true);
  };

  const closePopup = () => {
    setIsModalOpen(false);
    setEditIndex(null);
    // Clear form fields when closing the popup
    setName('');
    setEmail('');
    setMobileNum('');
    setDescription('');
  };

  const saveReference = async () => {
    if (name && email && mobileNum && description) {
      if (editIndex !== null) {
        try {
          await axios.put(`/ManageReferences/${tableData[editIndex]._id}`, { name, email, mobileNum, description });
          const updatedData = [...tableData];
          updatedData[editIndex] = { ...updatedData[editIndex], name, email, mobileNum, description };
          setTableData(updatedData);
        } catch (error) {
          console.error(error);
        }
        setEditIndex(null);
      } else {
        const referenceData = {
          name,
          email,
          mobileNum,
          description,
        };

        // Send a POST request to the backend API
        axios.post('http://localhost:5001/ManageReference', referenceData)
          .then(response => {
            console.log('Reference saved successfully');
            // Optionally, you can perform any necessary actions after a successful save
          })
          .catch(error => {
            console.error('Failed to save Reference:', error);
            // Handle the error, e.g., display an error message to the user
          });

        closePopup();
      }
    }
  };

  const handleEdit = (id) => {
    const index = tableData.findIndex((reference) => reference._id === id);
    setName(tableData[index].name);
    setEmail(tableData[index].email);
    setMobileNum(tableData[index].mobileNum);
    setDescription(tableData[index].description);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/ManageReference/${id}`);
      const updatedData = tableData.filter((reference) => reference._id !== id);
      setTableData(updatedData);
    } catch (error) {
      console.error('Error deleting reference:', error);
    }
  };

  useEffect(() => {
    // Fetch data from backend when the component mounts
    axios.get('http://localhost:5001/ManageReference')
      .then(response => {
        console.log(response.data); // Log the data received from the backend
        setTableData(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleSearch = () => {
    const filteredData = filterData();
    setTableData(filteredData);
  };

  const filterData = () => {
    return tableData.filter((reference) => {
      return (
        reference.name.toLowerCase().includes(searchText.toLowerCase()) ||
        reference.email.toLowerCase().includes(searchText.toLowerCase()) ||
        reference.mobileNum.toLowerCase().includes(searchText.toLowerCase()) ||
        reference.description.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const currentTableData = tableData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontva1'>
        <div className="ref-Body">
          <div className='patientdocument-headva11'>
            <div className='patient-iconva11'>
              <Link to="/Administator">
                <AiOutlineArrowLeft />{' '}
              </Link>
            </div>
            <div className='patient-headingva11'>Administator/ Manage References</div>
          </div>

          <div className="ref-man"></div>
          <br></br>
          <div className="ref-search">
            <div className='search-container-ref'>
              <input
                className='search-bar-ref'
                type='text'
                placeholder='Search'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className='search-btn-ref' onClick={handleSearch}>
                <BiSearch />
              </button>
            </div>
            <button className="ref-excel" onClick={openPopup}>
              Add
            </button>
          </div>

          <div className="ref-table">
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>MOBILE NUM</th>
                  <th>EMAIL</th>
                  <th>Description</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((reference, index) => (
                  <tr key={index}>
                    <td>{reference.name}</td>
                    <td>{reference.mobileNum}</td>
                    <td>{reference.email}</td>
                    <td>{reference.description}</td>
                    <td>
                      <button className='ref-btn-edit' onClick={() => handleEdit(reference._id)}>Edit</button>
                      <button className='ref-btn-delete' onClick={() => handleDelete(reference._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && (
          <div className="ref-popup">
            <div className="ref-popup-content">
              <button className="ref-popup-close11" onClick={closePopup}>
                X
              </button>
              <div className='ref-add'>
                <h1>{editIndex !== null ? 'Edit Reference' : 'Add Reference'}</h1>
              </div>
              <hr></hr>&nbsp;
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={mobileNum}
                  onChange={(e) => setMobileNum(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button className="ref-popup-save" onClick={saveReference}>
                Save
              </button>
            </div>
          </div>
        )}

        <div className='pat-mf'>
          <button className='but-mf' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-mf'>{currentPage}</p>
          <button className='but-mf' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default ManageReferences;