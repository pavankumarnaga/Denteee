import React, { useState, useEffect } from 'react';
import './Managemaster.css';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function DentalChart() {
  const [selectedToothInvestigation, setSelectedToothInvestigation] = useState('');
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the backend
        const response = await fetch(`http://localhost:5001/Managemaster?search=${searchTerm}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]); // Dependency on searchTerm to trigger re-fetch on search term change

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

  const handleToothInvestigationChange = (event) => {
    setSelectedToothInvestigation(event.target.value);
  };

  const handleEditClick = (index) => {
    // Set the selectedToothInvestigation to the current title when editing
    setSelectedToothInvestigation(data[indexOfFirstItem + index].title);
    setEditingRowIndex(index);
  };

  const handleUpdateClick = async (index) => {
    try {
      const updatedData = [...data];
      const dataIndex = indexOfFirstItem + index; // Calculate the index in the original data array

      updatedData[dataIndex].title = selectedToothInvestigation;

      await fetch(`http://localhost:5001/Managemaster/${updatedData[dataIndex]._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: selectedToothInvestigation }),
      });

      setData(updatedData);
      setEditingRowIndex(null);
      setSelectedToothInvestigation('');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDeleteClick = async (index) => {
    try {
      const deletedData = [...data];
      const dataIndex = indexOfFirstItem + index; // Calculate the index in the original data array
      const deletedItem = deletedData.splice(dataIndex, 1)[0];

      await fetch(`http://localhost:5001/Managemaster/${deletedItem._id}`, {
        method: 'DELETE',
      });

      setData(deletedData);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleAddNewRecord = () => {
    // Add a new row with an empty input field
    setEditingRowIndex(-1);
    setSelectedToothInvestigation('');
  };

  const handleSaveRecord = async () => {
    if (editingRowIndex === -1) {
      // Add a new record
      try {
        const newRecordData = { title: selectedToothInvestigation };
        const response = await fetch('http://localhost:5001/Managemaster', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newRecordData),
        });

        const newRecord = await response.json();
        const updatedData = [...data, newRecord];

        setData(updatedData);
        setEditingRowIndex(null);
        setSelectedToothInvestigation('');
      } catch (error) {
        console.error('Error adding new record:', error);
      }
    } else {
      // Update the existing record
      handleUpdateClick(editingRowIndex);
    }
  };

  const renderEditInput = (index) => (
    <input
      type="text"
      value={selectedToothInvestigation}
      onChange={(e) => setSelectedToothInvestigation(e.target.value)}
    />
  );

  const renderTitle = (item, index) => (
    <td>
      {editingRowIndex === index ? renderEditInput(index) : item.title}
    </td>
  );

  const renderActionButtons = (index) => (
    <td>
      {editingRowIndex === index ? (
        <div className="headingbutton">
          <button onClick={handleSaveRecord}>Save</button>
        </div>
      ) : (
        <>
          <div className="headingbutton">
            <button onClick={() => handleEditClick(index)}>Edit</button>&nbsp;
            <button onClick={() => handleDeleteClick(index)}>X Delete</button>
          </div>
        </>
      )}
    </td>
  );

  const renderNewRow = () => {
    if (editingRowIndex === -1) {
      return (
        <tr key="new-row">
          {renderTitle({}, -1)}
          {renderActionButtons(-1)}
        </tr>
      );
    }
    return null;
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5001/Managemaster?search=${searchTerm}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Dentalchart22va1212">
        <div className="Dental-head">
          <div className="Dental-icon">
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className="Dental-heading">Administrator / Manage Master</div>
        </div>

        <div className="Dental-rowva">
          <div className="search-boxva">
            <input
              className="search-barva"
              type="text"
              placeholder="Search Dental chart"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-bar-buttonva" onClick={handleSearch}>
              <BiSearch />
            </button>
          </div>

          <div className="dropdownva">
            <select
              className="data-inputva"
              value={selectedToothInvestigation}
              onChange={handleToothInvestigationChange}
            >
              <option value="">Select Tooth Investigation</option>
              {/* Tooth investigations options go here */}
            </select>
          </div>
        </div>
        <div className="Dental-recordva">
          <button className="add-button40va" onClick={handleAddNewRecord}>
            + Add New record
          </button>
        </div>

        <table className="Dental-tableva">
          <thead>
            <tr>
              <th className="headingname">Title</th>
              <th className="headingname">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item._id}>
                {renderTitle(item, index)}
                {renderActionButtons(index)}
              </tr>
            ))}
            {renderNewRow()}
          </tbody>
        </table>
      </div>

      <div className="pat-mm">
        <button className="but-mm" onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
          <AiOutlineStepBackward />
        </button>
        <p className="pat-bot-mm">{currentPage}</p>
        <button className="but-mm" onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
          <AiOutlineStepForward />
        </button>
      </div>
    </>
  );
}

export default DentalChart;