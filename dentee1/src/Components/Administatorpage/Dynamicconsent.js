import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import './Dynamicconsent.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function DynamicConsentForm() {
  const [forms, setForms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newForm, setNewForm] = useState({ title: '', category: '', date: '', action: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', category: '', date: '', action: '' });

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentForms = forms.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= forms.length;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/consentforms');
      setForms(response.data);
    } catch (error) {
      console.error('Error fetching consent forms:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const handleAddForm = () => {
    // Handle adding a new form logic
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const editedForm = forms[index];
    setEditForm({
      title: editedForm.title,
      category: editedForm.category,
      date: editedForm.date,
      action: editedForm.action,
    });
  };
  
const handleChangeEdit = (e) => {
  setEditForm({
    ...editForm,
    [e.target.name]: e.target.value,
  });
};


  const handleUpdateForm = async (index) => {
    console.log('Updating form at index:', index);
    const updatedForms = [...forms];
    updatedForms[index] = { ...editForm };
  
    try {
      // Send a PUT request to update the form on the backend
      const response = await axios.put(`http://localhost:5001/consentforms/${forms[index]._id}`, editForm);
      console.log('Update response:', response);
  
      // Check if the update was successful
      if (response.status === 200) {
        console.log('Form updated successfully');
        setForms(updatedForms);
        setEditingIndex(null);
        setEditForm({ title: '', category: '', date: '', action: '' });
      } else {
        console.error('Failed to update form. Server returned:', response);
      }
    } catch (error) {
      console.error('Error updating form:', error);
    }
  };
 
  const handleDeleteForm = async (id) => {
    console.log('Deleting form with ID:', id);
  
    const confirmDelete = window.confirm('Are you sure you want to delete this form?');
  
    if (confirmDelete) {
      try {
        // Send a DELETE request to remove the form from the backend
        const response = await axios.delete(`http://localhost:5001/consentforms/${id}`);
        
        // Check the response and handle accordingly
        console.log('Delete response:', response);
  
        if (response.status === 200) {
          // Form deleted successfully
          const updatedForms = forms.filter(form => form._id !== id);
          setForms(updatedForms);
        } else {
          console.error('Failed to delete form. Server returned:', response);
        }
      } catch (error) {
        console.error('Error deleting form:', error);
      }
    }
  };
    

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont-ipog-89'>
        <div className='main-head-ipog-89'>
          <div className='mainhead-icon-ipog-89'>
            <Link to="/Administator">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className='main-heading-ipog-89'> Administrator/Dynamic Consent</div>
          <Link to="/Dynamicconsentform">
            <Button className="dynamicbutton-ipog-89" onClick={handleAddForm}>
              Add Dynamic Consent Form
            </Button>
          </Link>
        </div>
        <br />
        <div className='search-container-ipog-89'>
          <input
            className='search-bar-ipog-89'
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='search-btn-ipog-89'><BiSearch /></button>
        </div>
        <table className='dynamic-ipog-89' striped bordered hover>
          <thead className='dynamic-ipog-99'>
            <tr className='dynamc-ipog-00923'>
              <th className='dynamc-ipog-099'>Title</th>
              <th className='dynamc-ipog-099'>Category</th>
              <th className='dynamc-ipog-099'>Date</th>
              <th className='dynamc-ipog-099'>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentForms.map((form, index) => (
              <tr key={index}>
                <td className='dynamc-ipog-079'>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="title"
                      value={editForm.title}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    form.title
                  )}
                </td>
                <td className='dynamc-ipog-079'>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="category"
                      value={editForm.category}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    form.category
                  )}
                </td>
                <td className='dynamc-ipog-079'>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="date"
                      value={editForm.date}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    form.date
                  )}
                </td>
                <td className='dynamc-ipog-079'>
                  {editingIndex === index ? (
                    <div>
                      <button onClick={() => handleUpdateForm(index)}>Update</button>
                      <button onClick={() => handleDeleteForm(form._id)}>Delete</button>

                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDeleteForm(index)}>Delete</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pat-dyc'>
          <button
            className='but-dyc'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bot-dyc'>{currentPage}</p>
          <button
            className='but-dyc'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default DynamicConsentForm;
