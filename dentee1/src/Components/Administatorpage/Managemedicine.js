import './Managemedicine.css';
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineStepForward, AiOutlineStepBackward } from "react-icons/ai";
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Managemedicine = () => {
  const [data, setData] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    medicineName: '',
    moleculeName: '',
    dosage: '',
    frequency: '0-0-1',
    duration: '',
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
        const response = await axios.get('http://localhost:5001/Managemedicine');
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
      medicineName: '',
      moleculeName: '',
      dosage: '',
      frequency: '0-0-1',
      duration: '',
      favourite: false,
    });
    setEditingIndex(-1);
  };

  const handleSaveNewMedicine = async () => {
    try {
      if (editingIndex !== -1) {
        const response = await axios.put(`http://localhost:5001/Managemedicine/${data[editingIndex]._id}`, newMedicine);
        const result = response.data;
        const updatedData = [...data];
        updatedData[editingIndex] = result;
        setData(updatedData);
      } else {
        const response = await axios.post('http://localhost:5001/Managemedicine', newMedicine);
        const result = response.data;
        setData([...data, result]);
      }

      setIsAddingNewMedicine(false);
      setEditingIndex(-1);
      setNewMedicine({
        medicineName: '',
        moleculeName: '',
        dosage: '',
        frequency: '0-0-1',
        duration: '',
        favourite: false,
      });
    } catch (error) {
      console.error('Error saving medicine:', error);
    }
  };

  const handleCancelNewMedicine = () => {
    setIsAddingNewMedicine(false);
    setEditingIndex(-1);
    setNewMedicine({
      medicineName: '',
      moleculeName: '',
      dosage: '',
      frequency: '0-0-1',
      duration: '',
      favourite: false,
    });
  };

  const handleEdit = (index) => {
    const medicineToEdit = data[index];
    setNewMedicine({ ...medicineToEdit });
    setEditingIndex(index);
    setIsAddingNewMedicine(true);
  };

  const handleDelete = async (index) => {
    try {
      const response = await axios.delete(`http://localhost:5001/Managemedicine/${data[index]._id}`);
      if (response.status === 200) {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
      } else {
        console.error('Error deleting medicine:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting medicine:', error);
    }
  };
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/Managemedicine?search=${searchKeyword}`);
      const allData = response.data;
  
      // Filter data based on the searchKeyword
      const filteredData = allData.filter((medicine) => {
        const medicineNameMatch = medicine.medicineName.toLowerCase().includes(searchKeyword.toLowerCase());
        const moleculeNameMatch = medicine.moleculeName.toLowerCase().includes(searchKeyword.toLowerCase());
        const dosageMatch = medicine.dosage.toLowerCase().includes(searchKeyword.toLowerCase());
        const frequencyMatch = medicine.frequency.toLowerCase().includes(searchKeyword.toLowerCase());
        const durationMatch = medicine.duration.toLowerCase().includes(searchKeyword.toLowerCase());
  
        // Simplified logic for the favourite field
        const favouriteMatch =
          (searchKeyword.toLowerCase() === 'yes' && medicine.favourite) ||
          (searchKeyword.toLowerCase() === 'no' && !medicine.favourite) ||
          (['true', 'false', 't', 'f', '1', '0'].includes(searchKeyword.toLowerCase()));
  
        return (
          medicineNameMatch ||
          moleculeNameMatch ||
          dosageMatch ||
          frequencyMatch ||
          durationMatch ||
          favouriteMatch
        );
      });
  
      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // Pagination code
  const itemsPerPage = 5;
  // const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMedicine = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= data.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="medicine-table-container-an411">
        <div className='patientdocument-head-an41'>
          <div className='patient-icon-an41'><Link to="/Administator"><AiOutlineArrowLeft/></Link></div>
          <div className='patient-heading-an41'>Administrator / Manage Medicine</div>
        </div>
        <div className="search-bar-an41">
          <div className='search-containeran41'>
            <input className='search-baran41' type='text' placeholder='Search' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
            <button className='search-btnan41' onClick={handleSearch}><BiSearch /></button>
          </div>
        </div>
        <div className="add-button-an41" onClick={handleAddNewMedicine}>
          + Add New Medicine
        </div>
        <div className="table-container-an41">
          <table className="medicine-table-an41">
            <thead>
              <tr>
                <th className='th-an41'>Medicine Name</th>
                <th className='th-an41'>Molecule Name</th>
                <th className='th-an41'>Dosage</th>
                <th className='th-an41'>Frequency</th>
                <th className='th-an41'>Duration</th>
                <th className='th-an41'>Favourite</th>
                <th className='th-an41'>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentMedicine.map((medicine, index) => (
                <tr key={indexOfFirstItem + index}>
                  <td className='td-an41'>{medicine.medicineName}</td>
                  <td className='td-an41'>{medicine.moleculeName}</td>
                  <td className='td-an41'>{medicine.dosage}</td>
                  <td className='td-an41'>{medicine.frequency}</td>
                  <td className='td-an41'>{medicine.duration}</td>
                  <td className='td-an41'>{medicine.favourite ? 'Yes' : 'No'}</td>
                  <td className='td-an41'>
                    <button className="edit-button-an41" onClick={() => handleEdit(indexOfFirstItem + index)}><MdOutlineModeEditOutline />
                      Edit
                    </button>
                    <button className="delete-button-an41" onClick={() => handleDelete(indexOfFirstItem + index)}><RxCross2 />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {isAddingNewMedicine && (
                <tr>
                  <td className='td-an41'>
                    <input
                      type="text"
                      name="medicineName"
                      placeholder="Medicine Name"
                      value={newMedicine.medicineName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <input
                      type="text"
                      name="moleculeName"
                      placeholder="Molecule Name"
                      value={newMedicine.moleculeName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <input
                      type="text"
                      name="dosage"
                      placeholder="Dosage"
                      value={newMedicine.dosage}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <select
                      name="frequency"
                      className="frequency-dropdown-an41"
                      value={newMedicine.frequency}
                      onChange={handleInputChange}
                    >
                      <option value="0-0-1">0-0-1</option>
                      <option value="0-1-0">0-1-0</option>
                      <option value="0-1-1">0-1-1</option>
                      <option value="1-0-1">1-0-1</option>
                      <option value="1-1-0">1-1-0</option>
                      <option value="1-1-1">1-1-1</option>
                      <option value="1-0-0">1-0-0</option>
                    </select>
                  </td>
                  <td className='td-an41'>
                    <input
                      type="text"
                      name="duration"
                      placeholder="Duration"
                      value={newMedicine.duration}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <input
                      type="checkbox"
                      name="favourite"
                      checked={newMedicine.favourite}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className='td-an41'>
                    <button className="edit-button-an41" onClick={handleSaveNewMedicine}>
                      Save
                    </button>
                    <button className="delete-button-an41" onClick={handleCancelNewMedicine}>
                      Cancel
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='pat-md'>
          <button className='but-md' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-md'>{currentPage}</p>
          <button className='but-md' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default Managemedicine;