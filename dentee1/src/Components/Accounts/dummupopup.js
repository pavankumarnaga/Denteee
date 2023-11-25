import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Recyclebin.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Recyclebin = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [searchText, setSearchText] = useState('');
  const [userActivityLogs, setUserActivityLogs] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState({
    id: null,
    description: '',
    deleteDate: '',
    deleteBy: '',
  });

  const filteredLogs = userActivityLogs.filter((item) => {
    const descriptionMatches = item.description.toLowerCase().includes(searchText.toLowerCase());
    const deleteDateMatches = item.deleteDate.toLowerCase().includes(searchText.toLowerCase());
    const deleteByMatches = item.deleteBy.toLowerCase().includes(searchText.toLowerCase());

    return descriptionMatches || deleteDateMatches || deleteByMatches;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/Recyclebin');
        setUserActivityLogs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteSelected = async () => {
    const confirmed = window.confirm('Are you sure you want to delete the selected items?');
    if (confirmed) {
      try {
        await Promise.all(
          selectedItems.map(async (item) => {
            await axios.delete(`http://localhost:5002/Recyclebin/${item._id}`);
          })
        );
  
        const updatedLogs = userActivityLogs.filter((log) => !selectedItems.includes(log));
        setUserActivityLogs(updatedLogs);
  
        setSelectedItems([]); 
        setShowActions(false);
  
        alert('Selected items deleted successfully!');
      } catch (error) {
        console.error('Error deleting items:', error);
      }
    }
  };

  const handleEmptyRecycleBin = async () => {
    const confirmed = window.confirm('Are you sure you want to empty the recycle bin?');
    if (confirmed) {
      try {
        await Promise.all(
          userActivityLogs.map(async (item) => {
            await axios.delete(`http://localhost:5002/Recyclebin/${item._id}`);
          })
        );
  
        setUserActivityLogs([]);
        setSelectedItems([]); 
        setShowActions(false); 
  
        alert('Recycle bin emptied successfully!');
      } catch (error) {
        console.error('Error emptying recycle bin:', error);
      }
    }
  };


const handleRestoreSelected = async () => {
  const confirmed = window.confirm('Are you sure you want to restore the selected items?');
  if (confirmed) {
    try {
      await Promise.all(
        selectedItems.map(async (item) => {
          try {
            await axios.put(`http://localhost:5002/Recyclebin/${item._id}`, {
              deleteDate: null, 
            });
          } catch (error) {
            console.error('Error restoring item:', error);
            throw error; 
          }
        })
      );

      const response = await axios.get('http://localhost:5002/Recyclebin');
      setUserActivityLogs(response.data);

      setSelectedItems([]); 
      setShowActions(false); 

      alert('Selected items restored successfully!');
    } catch (error) {
      console.error('Error restoring items:', error);
      alert('Failed to restore selected items');
    }
  }
};

  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleOption3Change = (e) => {
    setSelectedOption3(e.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleConfirmationYes = () => {
    setShowConfirmationPopup(false);
  };

  const handleConfirmationNo = () => {
    setShowConfirmationPopup(false);
  };

  const handleIconClick = (item) => {
    setSelectedItem(item);
    setShowActions(true);
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems([...userActivityLogs]);
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleDelete = async (item) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5002/Recyclebin/${item._id}`);

        const updatedLogs = userActivityLogs.filter((log) => log._id !== item._id);
        setUserActivityLogs(updatedLogs);

        alert('Item deleted successfully!');
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowEditPopup(true);
    setEditData({
      id: item._id,
      description: item.description || '',
      deleteDate: item.deleteDate || '',
      deleteBy: item.deleteBy || '',
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5002/Recyclebin/${editData.id}`, {
        description: editData.description,
        deleteDate: editData.deleteDate,
        deletedBy: editData.deleteBy,
      });
      setUserActivityLogs(userActivityLogs.map((log) => (log._id === editData.id ? response.data : log)));
      setShowEditPopup(false);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleEditClose = () => {
    setShowEditPopup(false);
  };

  const handleReportOptionClick = (reportType) => {
    setSelectedOption3(reportType);
    setShowReportDropdown(false);
  };

  const toggleReportDropdown = () => {
    setShowReportDropdown(!showReportDropdown);
  };

  const itemsPerPage = 2; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentTableData = filteredLogs.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= filteredLogs.length;

  const handlePageChange = (pageNumber) => {
    const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

    const updatedPage = Math.min(Math.max(pageNumber, 1), totalPages);

    setCurrentPage(updatedPage);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="container-777">
        <div className='patientdocument-head-777'>
          <div className='patient-icon-777'>
            <Link to="/Administator"><AiOutlineArrowLeft/></Link>
          </div>
          <div className='patient-heading-777'>Administrator / Recycle Bin</div>
        </div>
        <div className="top-left-inputs-777">
          <div className="input-group-777">
            <select className='select-777' value={selectedOption1} onChange={handleOption1Change}>
            <option value="">Select Option</option>
              <option value="patient">Patient</option>
              <option value="bill">Bill</option>
              <option value="treatment">Treatment</option>
              <option value="dental-chart">Dental Chart</option>            </select>
          </div>
          <div className="input-group-777">
            <select className='select-777' value={selectedOption2} onChange={handleOption2Change}>
            <option value="">Select Option</option>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="last-week">Last Week</option>            </select>
          </div>
          <div className="input-group-777">
            <div className="dropdown-button-777">
              <button className='btn-777'>
                View Report
              </button>
              {showReportDropdown && (
                <div className="report-options-dropdown-777">
                  <button onClick={() => handleReportOptionClick('Tabular')}>Tabular</button>
                  <button onClick={() => handleReportOptionClick('Graphical')}>Graphical</button>
                </div>
              )}         
                 </div>
          </div>
        </div>
        <div className="bar-button-flex78">
        <div className="search-container-777">
        <input
          className='search-bar-777'
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <button className='search-btn-777'><BiSearch/></button>
      </div>
      <div className="action-buttons-left-777">
      <button className="action-buttons delete-777" onClick={handleDeleteSelected}>
        Delete
      </button>
      <div className="abc123-777">
        <button className="action-buttons empty-777" onClick={handleEmptyRecycleBin}>
          Empty Recycle Bin
        </button>
      </div>
    </div>
        </div>

        <table className="data-table-777">
          <thead>
            <tr>
              <th>
                <input type="checkbox" onChange={handleSelectAll} />Select All
              </th>
              <th>Description</th>
              <th>Delete On</th>
              <th>Deleted By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
         
             {currentTableData.map((item) => (
            <tr key={item._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleItemSelect(item)}
                  />
                </td>
                <td>{item.description}</td>
                <td>{item.deleteDate}</td>
                <td>{item.deleteBy}</td>
                <td>
                <button className='settingoptionbut81' onClick={() => handleIconClick(item)}>
                  <IoMdSettings />
                </button>
                {showActions && selectedItem && (
                  <div className="action-buttons3451">
                    <button className='settingoptionbut812' onClick={() => handleEdit(item)}>Edit</button>
                    {showEditPopup && (
        <div className="edit-popup">
          <div className="edit-form">
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={editData.description}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Delete Date"
              name="deleteDate"
              value={editData.deleteDate}
              onChange={handleInputChange}
            />
          <input
  type="text"
  placeholder="Delete By"
  name="deleteBy"
  value={editData.deleteBy}
  onChange={handleInputChange}
/>

            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleEditClose}>Close</button>
          </div>
        </div>
      )}
                    <button className='settingoptionbut812' onClick={() => handleDelete(item)}>Delete</button>
                  </div>
                )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        <div className="pat-ry">
          <button
            className="but-ry"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className="pat-bot-ry">{currentPage}</p>
          <button
            className="but-ry"
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

export default Recyclebin;