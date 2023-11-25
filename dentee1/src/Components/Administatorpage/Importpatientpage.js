import React, { useState } from 'react';
import './Importpatientpage.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";  // Import your CSS file for styling
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


function Files() {
  // State to store the selected files
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Function to handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='container-9991'>
    <div className="container-999">
      <div className='patientdocument-head-999'>
        <div className='patient-icon-999'>
        <Link to="/Importpatient">
<AiOutlineArrowLeft/> </Link></div>
        <div className='patient-heading-999'>Administrator / Import Patient Data</div>
       </div>
       <br/>


      <div className="header">
        <button className="import-button-999">Import</button>
      </div>
    
      <div className="content-999">
        <h1 className='header-999'>1.Upload your file here</h1>
        <p className='paragraph-999'>Download format file. Download OR Provide data in (.xlsx). Maximum records 1000 at a time.</p>
        <div className="file-upload-999">
          <label className='label-999' htmlFor="file-input">Select Files</label>
          <input className='input-999'
            id="file-input"
            type="file"
            accept=".xlsx"
            multiple
            onChange={handleFileChange}
          />
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Files;