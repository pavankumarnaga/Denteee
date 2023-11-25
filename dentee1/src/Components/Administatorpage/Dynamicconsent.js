import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai"; // Import the necessary icons
import { Link } from 'react-router-dom';
import './Dynamicconsent.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function DynamicConsentForm() {
  const [forms, setForms] = useState([
    {
      title: 'Sample Title 1',
      category: 'Category A',
      date: '2023-09-08',
      action: 'Action 1',
    },
    {
      title: 'Sample Title 2',
      category: 'Category B',
      date: '2023-09-09',
      action: 'Action 2',
    },
    {
      title: 'Sample Title 1',
      category: 'Category A',
      date: '2023-09-08',
      action: 'Action 1',
    },
    {
      title: 'Sample Title 2',
      category: 'Category B',
      date: '2023-09-09',
      action: 'Action 2',
    },
    {
      title: 'Sample Title 1',
      category: 'Category A',
      date: '2023-09-08',
      action: 'Action 1',
    },
    {
      title: 'Sample Title 2',
      category: 'Category B',
      date: '2023-09-09',
      action: 'Action 2',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newForm, setNewForm] = useState({ title: '', category: '', date: '', action: '' });

  // Pagination settings
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentForms = forms.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= forms.length;

  const handleAddForm = () => {
    if (newForm.title && newForm.category && newForm.date && newForm.action) {
      setForms([...forms, newForm]);
      setNewForm({ title: '', category: '', date: '', action: '' });
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
          <div className='main-heading-ipog-89'> Administrator/Dynamic Consent Form</div>
          <Link to="/Dynamicconsentform">
            <Button className="dynamicbutton-ipog-89" onClick={handleAddForm}>
              Add Dynamic Consent Form
            </Button>
          </Link>
        </div>
        <br />
        <div className='search-container-ipog-89'>
          <input className='search-bar-ipog-89' type='text' placeholder='Search' />
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
                <td className='dynamc-ipog-079'>{form.title}</td>
                <td className='dynamc-ipog-079'>{form.category}</td>
                <td className='dynamc-ipog-079'>{form.date}</td>
                <td className='dynamc-ipog-079'>{form.action}</td>
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
