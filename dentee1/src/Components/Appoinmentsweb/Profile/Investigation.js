import './Investigation.css';
import Popup from 'reactjs-popup';
import { IoSettings } from 'react-icons/io5';
import { AiOutlineStepForward, AiOutlineStepBackward } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineClose, AiOutlineCheckCircle } from 'react-icons/ai';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Investigation = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [investigationData, setInvestigationData] = useState({
    date: '',
    weight: '',
    temperature: '',
    bloodPressure: '',
    oxygenSaturation: '',
    bloodSugar: '',
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [editedInvestigation, setEditedInvestigation] = useState({
    _id: '',
    date: '',
    weight: '',
    temperature: '',
    bloodPressure: '',
    oxygenSaturation: '',
    bloodSugar: '',
  });
  const [dummypatient1, setDummyPatient1] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // const [editedInvestigation, setEditedInvestigation] = useState({});
  const [dummydata1, setDummyData1] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [isFirstPage, setIsFirstPage] = useState(true);
const [isLastPage, setIsLastPage] = useState(false);
const itemsPerPage = 3;
const totalPages = Math.ceil(dummypatient1.length / itemsPerPage);
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = dummypatient1.slice(indexOfFirstItem, indexOfLastItem);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

useEffect(() => {
  const totalPages = Math.ceil(dummypatient1.length / itemsPerPage);
  setIsFirstPage(currentPage === 1);
  setIsLastPage(currentPage === totalPages);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummypatient1.slice(indexOfFirstItem, indexOfLastItem);
}, [currentPage, dummypatient1, itemsPerPage]);


const closeForm = () => {
  setIsFormOpen(false);
};

const fetchInvestigationData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/investigation');
    const fetchedData = response.data;
    setDummyPatient1(fetchedData);
  } catch (error) {
    console.error('Error fetching investigation data:', error);
  }
};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvestigationData({ ...investigationData, [name]: value });
  };

const handleSaveInvestigation = () => {
  const newInvestigation = {
    date: investigationData.date,
    weight: investigationData.weight,
    temperature: investigationData.temperature,
    bloodPressure: investigationData.bloodPressure,
    oxygenSaturation: investigationData.oxygenSaturation,
    bloodSugar: investigationData.bloodSugar,
  };

  axios.post('http://localhost:5000/Investigation', newInvestigation)
    .then((response) => {
      console.log('Investigation data saved successfully');
      fetchInvestigationData(); 
    })
    .catch((error) => {
      console.error('Error while saving investigation data:', error);
    });

  setIsFormOpen(false);
};
  useEffect(() => {
    fetchInvestigationData();
  }, []);

  

  const handleEditDelete = (itemId) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  };

  const handleEditFormSubmit = () => {
    axios
      .put(`http://localhost:5000/Investigation/${editedInvestigation._id}`, editedInvestigation)
      .then((response) => {
        console.log('Investigation data updated successfully');
        alert('Investigation data updated successfully');
        fetchInvestigationData(); // Fetch updated data after successful update
        setShowEditForm(false); // Close the edit form after successful update
      })
      .catch((error) => {
        console.error('Error while updating investigation data:', error);
        // Handle errors or display an error message to the user
      });
  };


  const handleDelete = (itemId) => {
    axios.delete(`http://localhost:5000/Investigation/${itemId}`)
      .then((response) => {
        console.log('Investigation data deleted successfully');
        fetchInvestigationData();
        alert('Investigation data deleted successfully'); // Show alert after successful deletion
      })
      .catch((error) => {
        console.error('Error while deleting investigation data:', error);
        alert('Error while deleting investigation data'); // Show alert if there's an error
      });
  };


  

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedItemId(null);
    setEditedInvestigation({
      _id: '',
      date: '',
      weight: '',
      temperature: '',
      bloodPressure: '',
      oxygenSaturation: '',
      bloodSugar: '',
    });
  };

  const handleEdit = (itemId) => {
    const selectedInvestigation = dummypatient1.find((item) => item._id === itemId);
    setEditedInvestigation({
      _id: selectedInvestigation._id,
      date: selectedInvestigation.date,
      weight: selectedInvestigation.weight,
      temperature: selectedInvestigation.temperature,
      bloodPressure: selectedInvestigation.bloodPressure,
      oxygenSaturation: selectedInvestigation.oxygenSaturation,
      bloodSugar: selectedInvestigation.bloodSugar,
    });
    openEditModal();
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/Investigation/${editedInvestigation._id}`, editedInvestigation);
      closeEditModal();
      // Refresh data after update
      fetchInvestigationData();
    } catch (error) {
      console.error('Error updating investigation data:', error);
    }
  };


  
  return (
    <div className="Formsq2">
      {isFormOpen && (
        <div className="invest-main">
          <div className="invest-add">
            <Popup
              trigger={
                <button className="Invest-button">
                  Add Investigation
                </button>
              }
              position="bottom center"
              modal
              nested
            >
              <div>
                <div className="invest-popup">
                  <div className="invest-column">
                    <div className="invest-row">
                      <div className="invest-investigation">
                        Investigation
                      </div>
                      <div className="invest-icons">
                        <button className="Invest-0" onClick={closeForm}>
                          X
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="invest-box">
                      <div className="invest-row">
                        <div className="invest-date">
                          Investigation Date:
                        </div>
                        <div className="invest-place">
                          <input
                            className="invest-place"
                            type="date"
                            id="date"
                            name="date"
                            value={investigationData.date}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="insert-row">
                      <div className="insert-box1">
                        <div className="insert-attributes">
                          Investigation attributes
                        </div>
                      </div>
                      <div className="insert-box-2">
                        <form>
                          <div className="invest-row">
                            <div className="invest-column">
                              <div className="insert-name1">
                                <label for="temperature">Temperature :</label>
                                <input
                                  className="insert-name2"
                                  type="text"
                                  placeholder="Temperature"
                                  name="temperature"
                                  value={investigationData.temperature}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="insert-blood1">
                                <label for="bloodPressure">Blood Pressure : </label>
                                <input
                                  className="insert-blood2"
                                  type="text"
                                  placeholder="Blood Pressure"
                                  name="bloodPressure"
                                  value={investigationData.bloodPressure}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="insert-sugar1">
                                <label for="bloodSugar">Blood Sugar :</label>
                                <input
                                  className="insert-sugar2"
                                  type="text"
                                  placeholder="Blood Sugar"
                                  name="bloodSugar"
                                  value={investigationData.bloodSugar}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="insert-column">
                              <div className="insert-weight1">
                                <label for="weight">Weight :</label>
                                <input
                                  className="insert-weight2"
                                  type="text"
                                  placeholder="Weight"
                                  name="weight"
                                  value={investigationData.weight}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="insert-oxygen1">
                                <label for="oxygenSaturation">Oxygen Saturation : </label>
                                <input
                                  className="insert-oxygen2"
                                  type="text"
                                  placeholder="Oxygen Saturation"
                                  name="oxygenSaturation"
                                  value={investigationData.oxygenSaturation}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="insert-button8">
                                <button
                                  className="insert-button9"
                                  onClick={handleSaveInvestigation}
                                >
                                  Save Investigation
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
          <div className="invest-table1">
            <table className="invest-table">
              <thead className="invest-thead">
                <tr className="invest-headrow">
                  <th className="invest">Date</th>
                  <th className="invest">Weight</th>
                  <th className="invest">Temperature</th>
                  <th className="invest">Blood Pressure</th>
                  <th className="invest">Oxygen Saturation</th>
                  <th className="invest">Blood Sugar</th>
                  <th className="invest">Action</th>
                </tr>
              </thead>
              <tbody className="invest-tablebody">
              {currentItems.map((data, index) => (
                  <tr key={index}>
                    <td className="invest">{data.date}</td>
                    <td className="invest">{data.weight}</td>
                    <td className="invest">{data.temperature}</td>
                    <td className="invest">{data.bloodPressure}</td>
                    <td className="invest">{data.oxygenSaturation}</td>
                    <td className="invest">{data.bloodSugar}</td>                  
              <td>
                  <div className='edit-delete-dropdown'>
                    <IoSettings
                      className='edit-delete-icon'
                      onClick={() => handleEditDelete(data._id)}
                    />
                    {selectedItemId === data._id && (
                      <div className='edit-delete-options'>
                        <button className='editbut4325' onClick={() => handleEdit(data._id)}>Edit</button>
                        <button className='deletebut4325' onClick={() => handleDelete(data._id)}>Delete</button>
                      </div>
                    )}
                  </div>
                </td>             
                  </tr>
                ))}
              </tbody>
              </table>        
            <div className="pat-footer33pat123">
              <button
                className="butpagenation1235"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <AiOutlineStepBackward />
              </button>
              <p className="pat-bottom-num33pat123">{currentPage}</p>
              <button
                className="butpagenation1235"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <AiOutlineStepForward />
              </button>
            </div>       
          </div>         
{isEditModalOpen && (
  <div className="edit-modal">
    <h2>Edit Investigation</h2>
    <label htmlFor="editDate">Date:</label>
    <input
      type="date"
      id="editDate"
      name="date"
      value={editedInvestigation.date}
      onChange={(e) =>
        setEditedInvestigation({ ...editedInvestigation, date: e.target.value })
      }
    />
    <label htmlFor="editWeight">Weight:</label>
    <input
      type="text"
      id="editWeight"
      name="weight"
      value={editedInvestigation.weight}
      onChange={(e) =>
        setEditedInvestigation({ ...editedInvestigation, weight: e.target.value })
      }
    />
    <label htmlFor="editTemperature">Temperature:</label>
    <input
      type="text"
      id="editTemperature"
      name="temperature"
      value={editedInvestigation.temperature}
      onChange={(e) =>
        setEditedInvestigation({ ...editedInvestigation, temperature: e.target.value })
      }
    />
    <label htmlFor="editBloodPressure">Blood Pressure:</label>
    <input
      type="text"
      id="editBloodPressure"
      name="bloodPressure"
      value={editedInvestigation.bloodPressure}
      onChange={(e) =>
        setEditedInvestigation({ ...editedInvestigation, bloodPressure: e.target.value })
      }
    />
    <label htmlFor="editOxygenSaturation">Oxygen Saturation:</label>
    <input
      type="text"
      id="editOxygenSaturation"
      name="oxygenSaturation"
      value={editedInvestigation.oxygenSaturation}
      onChange={(e) =>
        setEditedInvestigation({ ...editedInvestigation, oxygenSaturation: e.target.value })
      }
    />
    <label htmlFor="editBloodSugar">Blood Sugar:</label>
    <input
      type="text"
      id="editBloodSugar"
      name="bloodSugar"
      value={editedInvestigation.bloodSugar}
      onChange={(e) =>
        setEditedInvestigation({ ...editedInvestigation, bloodSugar: e.target.value })
      }
    />
    <button onClick={handleUpdate}>Update</button>
    <button onClick={closeEditModal}>Cancel</button>
  </div>
)}

        </div>
      )}


    </div>
    
  );};
export default Investigation;