import React, { useState } from 'react';
import './DentalChart.css'; 
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {  MdDeleteForever } from "react-icons/md";   
import image1 from '../Components/images123/image1.jpeg';

const DentalChart = () => {
  const [showPrimaryTeethContainer, setShowPrimaryTeethContainer] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dropdownValue, setDropdownValue] = useState('');
  const [addedImageNumbers, setAddedImageNumbers] = useState([]);
  const [dropdownValue1, setDropdownValue1] = useState('');
  const [dropdownValue2, setDropdownValue2] = useState('');
  const [tableData, setTableData] = useState([]); // State for the table data

  const handleDropdownChange1 = (e) => {
    setDropdownValue1(e.target.value);
  };

  const handleDropdownChange2 = (e) => {
    setDropdownValue2(e.target.value);
  };

  const togglePrimaryTeethContainer = () => {
    setShowPrimaryTeethContainer(!showPrimaryTeethContainer);
  };

  const openPopup = (imageNumber) => {
    setSelectedImage(imageNumber);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const addImageNumber = () => {
    setAddedImageNumbers([...addedImageNumbers, selectedImage]);
    setDropdownValue(selectedImage); // or setDropdownValue(''); if you want to clear the selection
    setShowPopup(false);
  };

  const addToTable = () => {
    setTableData([
      ...tableData,
      {
        toothno: selectedImage,
        examination: dropdownValue1,
        treatmenttype: dropdownValue2,
        notes: '',
      },
    ]);
  };

  // const deleteRow = (index) => {
  //   const updatedData = [...tableData];
  //   updatedData.splice(index, 1);
  //   setTableData(updatedData);
  // };


  const deleteRow = (index) => {
    // Use window.confirm to confirm the delete action
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      const updatedData = [...tableData];
      updatedData.splice(index, 1);
      setTableData(updatedData);
    }
  };

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className="dental-chart-container">
      <h1>Dental Chart</h1>
      <div className="image-container">
        <div className="dental-image" onClick={() => openPopup(1)}>
          <img
            src={image1}
            alt="Tooth 1"
            className="hover-image"
          />
          <p>1</p>
        </div>

        <div className="dental-image" onClick={() => openPopup(2)}>
          <img
            src="image2.jpg"
            alt="Tooth 2"
            className="hover-image"
          />
          <p>2</p>
        </div>
        <div className="dental-image" onClick={() => openPopup(3)}>
          <img
            src="image3.jpg"
            alt="Tooth 3"
            className="hover-image"
          />
          <p>3</p>
        </div>
        <div className="dental-image" onClick={() => openPopup(4)}>
          <img
            src="image4.jpg"
            alt="Tooth 4"
            className="hover-image"
          />
          <p>4</p>
        </div>
        <div className="dental-image" onClick={() => openPopup(5)}>
          <img
            src="image5.jpg"
            alt="Tooth 5"
            className="hover-image"
          />
          <p>5</p>
        </div>
        {/* Add more dental-image divs as needed for other teeth */}

        <div className="orange-container">
        <label>
          <input
            type="checkbox"
            name="primaryteeth"
            onClick={togglePrimaryTeethContainer}
          />
          Primary Teeth
        </label>
        <input className='dateteeth' type="date" placeholder="Input 1" />
        <input className='datenameteeth' type="text" placeholder="Name" />
        <div className="image-cart">
          <p> {addedImageNumbers.join(', ')}</p>
        </div>
        <h2>Examination</h2>
        <select className='dropdownteeth' value={dropdownValue1} onChange={handleDropdownChange1}>
          <option value="">Select Examination</option>
          <option value="Mesisal">Mesisal</option>
          <option value="Distal">Distal</option>
          <option value="Bukkal">Bukkal</option>
        </select>
        <select className='dropdownteeth' value={dropdownValue2} onChange={handleDropdownChange2}>
          <option value="">Select Treatment Type</option>
          <option value="Advance Surgical Procedure">Advance Surgical Procedure</option>
          <option value="Braces">Braces</option>
          <option value="Crowns">Crowns</option>
        </select>
        <div className='Remarks-page-tnx'>
          <h5 className="heading-remarks-tnx">Examination Note</h5>
          <input className='rectangle-box' type='text' />
        </div>
        <div className='buttonteethbutton'>
          <button className='buttonteeth33' onClick={addToTable}>Add</button>
        </div>
      </div>
      </div>

      {showPrimaryTeethContainer && (
        <div className="skyblue-container">
          <h2>Primary Teeth Images</h2>
          <img src="primary_tooth1.jpg" alt="Primary Tooth 1" />
          <img src="primary_tooth2.jpg" alt="Primary Tooth 2" />
          {/* Add more images as needed */}
          
        </div>
      )}
      

      {/* Table */}
      {tableData.length > 0 && (
        <div className="table-container">
        <div className=''> 
           <h2>Table Data</h2>
          <table className='tableteeth'>
            <thead>
              <tr>
                <th>Tooth No</th>
                <th>Examination</th>
                <th>Treatment Type</th>
                <th>Notes</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.toothno}</td>
                  <td>{item.examination}</td>
                  <td>{item.treatmenttype}</td>
                  <td>{item.notes}</td>
                  {/* <td><button className='buttonteeth123' onClick={() => deleteRow(index)}>Delete</button></td> */}
                  <td>
  <button className='buttonteeth123' onClick={() => deleteRow(index)}>
    <MdDeleteForever />
  </button>
</td>

                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      )}




{showPopup && (
  <div className="image-popup">
    <h2>Image {selectedImage}</h2>
    <img src={image1} alt={`Tooth ${selectedImage}`} />
    <select value={dropdownValue} onChange={handleDropdownChange}>
      <option value="">Select Examination</option>
      <option value="Option 1">Mesial</option>
      <option value="Option 2">Distal</option>
      <option value="Option 3">Buccal</option>
    </select>
    <button onClick={addImageNumber}>Add</button>
  </div>
)}

    </div>
    </>


    
  );
};

export default DentalChart;
