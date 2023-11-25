import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { BiSearch } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import './Managetreatment.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Managetreatment() {
  const [data, setData] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    treatmentName: '',
    treatmentCost: '',
    favourite: false,
  });

  const [isAddingNewMedicine, setIsAddingNewMedicine] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [searchKeyword, currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/Managetreatment?search=${searchKeyword}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddNewMedicine = () => {
    setIsAddingNewMedicine(true);
    setNewMedicine({
      treatmentName: '',
      treatmentCost: '',
      favourite: false,
    });
    setEditingIndex(-1);
  };

  const handleSaveNewMedicine = async () => {
    if (editingIndex !== -1) {
      try {
        const updatedMedicine = { ...data[editingIndex], ...newMedicine };
        await axios.put(`http://localhost:5001/Managetreatment/${data[editingIndex]._id}`, updatedMedicine);
        const updatedData = [...data];
        updatedData[editingIndex] = updatedMedicine;
        setData(updatedData);
      } catch (error) {
        console.error('Error updating medicine:', error);
      }
    } else {
      try {
        const response = await axios.post('http://localhost:5001/Managetreatment', newMedicine);
        setData([...data, response.data]);
      } catch (error) {
        console.error('Error adding medicine:', error);
      }
    }

    setIsAddingNewMedicine(false);
    setEditingIndex(-1);
    setNewMedicine({
      treatmentName: '',
      treatmentCost: '',
      favourite: false,
    });
  
  };

  const handleCancelNewMedicine = () => {
    setIsAddingNewMedicine(false);
    setEditingIndex(-1);
    setNewMedicine({
      treatmentName: '',
      treatmentCost: '',
      favourite: false,
    });
  };

  const handleEdit = (index) => {
    const indexOfData = indexOfFirstItem + index; // Calculate the index of the item in the complete data array
    setEditingIndex(indexOfData);
    setIsAddingNewMedicine(true);
    setNewMedicine({ ...data[indexOfData] });
  };

  const handleDelete = async (index) => {
    try {
      const medicineId = currentPatients[index]._id; // Get the ID of the specific row in the current page
      await axios.delete(`http://localhost:5001/Managetreatment/${medicineId}`);
      const updatedData = [...data];
      updatedData.splice(indexOfFirstItem + index, 1); // Remove the item from the complete data array
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting medicine:', error);
    }
  };
  
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/Managetreatment`);
      const allData = response.data;
  
      // Filter data based on the searchKeyword
      const filteredData = allData.filter((medicine) => {
        const treatmentNameMatch = medicine.treatmentName.toLowerCase().includes(searchKeyword.toLowerCase());
        const treatmentCostMatch = medicine.treatmentCost.includes(searchKeyword);
        const favouriteMatch = searchKeyword.toLowerCase() === 'yes' && medicine.favourite
          || searchKeyword.toLowerCase() === 'no' && !medicine.favourite
          || searchKeyword.toLowerCase() !== 'yes' && searchKeyword.toLowerCase() !== 'no' && searchKeyword.toLowerCase() !== 'true' && searchKeyword.toLowerCase() !== 'false' && searchKeyword.toLowerCase() !== 't' && searchKeyword.toLowerCase() !== 'f' && searchKeyword.toLowerCase() !== '1' && searchKeyword.toLowerCase() !== '0';
  
        return treatmentNameMatch || treatmentCostMatch || favouriteMatch;
      });
  
      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = data.slice(indexOfFirstItem, indexOfLastItem);
  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <>
     
     <Navbar />
      <Sidebar />
      <div className="medicine-table-container-an51">
        <div className='patientdocument-head-an51'>
          <div className='patient-icon-an51'>
            <Link to="/Administator"><AiOutlineArrowLeft /></Link>
          </div>
          <div className='patient-heading-an51'>Administrator / Manage Treatments</div>
        </div>
        <div className='search-containeran51'>
          <input
            className='search-baran51'
            type='text'
            placeholder='Search'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button className='search-btnan51' onClick={handleSearch}>
            <BiSearch />
          </button>
        </div>
        <br></br>
        <div className="add-button-an51" onClick={handleAddNewMedicine}>
          + Add New Medicine
        </div>
        <table className="medicine-table-an51">
          <thead>
            <tr className="tr-an51">
              <th className="th-an51">Treatment Name</th>
              <th className="th-an51">Treatment Cost</th>
              <th className="th-an51">Favourite</th>
              <th className="th-an51">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((medicine, index) => (
              <tr key={index}>
                <td className="td-an51">{medicine.treatmentName}</td>
                <td className="td-an51">{medicine.treatmentCost}</td>
                <td className="td-an51">{medicine.favourite ? 'Yes' : 'No'}</td>
                <td className="td-an51">
                  <button className="edit-button-an51" onClick={() => handleEdit(index)}>
                    <MdOutlineModeEditOutline />
                    Edit
                  </button>
                  <button className="delete-button-an51" onClick={() => handleDelete(index)}>
                    <RxCross2 />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {isAddingNewMedicine && (
              <tr className="tr-an51">
                <td className="td-an51">
                  <input
                    type="text"
                    name="treatmentName"
                    placeholder="Treatment Name"
                    value={newMedicine.treatmentName}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="td-an51">
                  <input
                    type="text"
                    name="treatmentCost"
                    placeholder="Treatment Cost"
                    value={newMedicine.treatmentCost}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="td-an51">
                  <input
                    type="checkbox"
                    name="favourite"
                    checked={newMedicine.favourite}
                    onChange={handleInputChange}
                  />
                </td>
                <td className="td-an51">
                  <button className="edit-button-an51" onClick={handleSaveNewMedicine}>
                    Save
                  </button>
                  <button className="delete-button-an51" onClick={handleCancelNewMedicine}>
                    Cancel
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className='pat-mt'>
          <button className='but-mt' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-mt'>{currentPage}</p>
          <button className='but-mt' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default Managetreatment;