import React, { useState, useEffect } from 'react';
import './PatientNotes.css';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { SiAppstore } from 'react-icons/si';
import axios from 'axios';
import { FiSettings } from 'react-icons/fi';

const PatientNotes = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [patientNotes, setPatientNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);


  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setNewNoteData({
      doctorName: '',
      notes: '',
    });
  };
  const [newNoteData, setNewNoteData] = useState({
    doctorName: '',
    notes: '',
  });
  const [editNoteData, setEditNoteData] = useState({
    _id: '',
    doctorName: '',
    notes: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Patientnote');
        setPatientNotes(response.data);
      } catch (error) {
        console.error('Error fetching patient notes:', error);
      }
    };

    fetchData();
  }, []);

  
  const handleEditDelete = (itemId) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedItemId(null);
    setEditNoteData({
      _id: '',
      doctorName: '',
      notes: '',
    });
  };

  const handleEdit = (itemId) => {
    const selectedNote = patientNotes.find((item) => item._id === itemId);
    setEditNoteData({
      _id: selectedNote._id,
      doctorName: selectedNote.doctorName,
      notes: selectedNote.notes,
    });
    openEditModal();
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/Patientnote/${editNoteData._id}`, editNoteData);
      closeEditModal();
      const response = await axios.get('http://localhost:5000/api/Patientnote');
      setPatientNotes(response.data);
    } catch (error) {
      console.error('Error updating patient note:', error);
    }
  };
 
  const handleDelete = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`http://localhost:5000/api/Patientnote/${itemId}`);
        console.log(`Item with ID ${itemId} deleted successfully.`);
        // After successful deletion, update the state or refetch data if needed
        const response = await axios.get('http://localhost:5000/api/Patientnote');
        setPatientNotes(response.data);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };
  
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatientNotes = patientNotes.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= patientNotes.length;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNoteData({ ...newNoteData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/Patientnote', newNoteData);
      closeEditModal(); // Close the modal after successful submission
      const response = await axios.get('http://localhost:5000/api/Patientnote');
      setPatientNotes(response.data);
    } catch (error) {
      console.error('Error adding patient note:', error);
    }
  };

  return (
    <div>
      <div className='appoin-patinotes'>Patient Notes</div>
      <div className='appoin-butt'>
        <button className='appoin-addpati-icon' onClick={openAddModal}>
          <SiAppstore className='appoin-addpati-icon-1' />
        </button>
        <button className='appoin-addpati-text' onClick={openAddModal}>
          Add new Patient Notes
        </button>
      </div>
      <div>

        <table className='appoin-table'>
          <thead className='appoin-thead'>
            <tr className='appoin-headrow'>
              <th>Notes Date</th>
              <th>Doctor Name</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='appoin-tablebody'>
            {currentPatientNotes.map((item) => (
              <tr key={item._id}>
                <td>{item.notesDate}</td>
                <td>{item.doctorName}</td>
                <td>{item.notes}</td>
                <td>
              <div className='edit-delete-dropdown'>
                <FiSettings
                  className='edit-delete-icon'
                  onClick={() => handleEditDelete(item._id)}
                />
                {selectedItemId === item._id && (
                  <div className='edit-delete-options'>
                    <button className='editbut4325' onClick={() => handleEdit(item._id)}>Edit</button>
                    <button className='deletebut4325' onClick={() => handleDelete(item._id)}>Delete</button>
                  </div>
                )}
              </div>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='pat-footer33pat'>
          <button
            className='butpagenation'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bottom-num33pat'>{currentPage}</p>
          <button
            className='butpagenation'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>


        {isAddModalOpen && (
        <div className='edit-modal'>
          <h2>Add New Patient Note</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Doctor Name:
              <input
                type='text'
                name='doctorName'
                value={newNoteData.doctorName}
                onChange={handleInputChange}
                placeholder='Enter Doctor Name'
                required
              />
            </label>
            <label>
              Notes:
              <textarea
                name='notes'
                value={newNoteData.notes}
                onChange={handleInputChange}
                placeholder='Enter Notes'
                required
              ></textarea>
            </label>
            <button type='submit'>Submit</button>
            <button type='button' onClick={closeAddModal}>
              Cancel
            </button>
          </form>
        </div>
      )}


{isEditModalOpen && (
        <div className='edit-modal'>
          <h2>Edit Patient Note</h2>
          <form onSubmit={handleUpdate}>
            <label htmlFor='doctorName'>Doctor Name:</label>
            <input
              type='text'
              id='doctorName'
              value={editNoteData.doctorName}
              onChange={(e) =>
                setEditNoteData({ ...editNoteData, doctorName: e.target.value })
              }
            />
            <label htmlFor='notes'>Notes:</label>
            <textarea
              id='notes'
              value={editNoteData.notes}
              onChange={(e) =>
                setEditNoteData({ ...editNoteData, notes: e.target.value })
              }
            ></textarea>
            <button type='submit'>Update</button>
            <button type='button' onClick={closeEditModal}>
              Close
            </button>
          </form>
        </div>
      )}
      
    </div>
  );
};

export default PatientNotes;