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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/patientNote');
        setPatientNotes(response.data);
      } catch (error) {
        console.error('Error fetching patient notes:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditDelete = (itemId) => {
    setSelectedItemId(itemId);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedItemId(null);
  };

  const handleEdit = () => {
    console.log(`Edit item with ID: ${selectedItemId}`);
    openEditModal();
  };

  const handleDelete = () => {
    console.log(`Delete item with ID: ${selectedItemId}`);
    // Implement your delete logic here
    // You can open a confirmation modal and perform the delete action

    // Clear the selected item after handling the delete
    setSelectedItemId(null);
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

  return (
    <div>
      <div className='appoin-patinotes'>Patient Notes</div>
      <div className='appoin-butt'>
        {/* Clickable button around the React icon */}
        <button className='appoin-addpati-icon' onClick={handleEdit}>
          <SiAppstore className='appoin-addpati-icon-1' />
        </button>
        <button className='appoin-addpati-text'>Add new Patient Notes</button>
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
                    <FiSettings className='edit-delete-icon' />
                    {selectedItemId === item._id && (
                      <div className='edit-delete-options'>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className='edit-modal'>
          <h2>Edit Patient Note</h2>
          {/* Add your edit form or component here */}
          <button onClick={closeEditModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default PatientNotes;
