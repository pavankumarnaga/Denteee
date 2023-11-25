import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Import.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SlSettings } from 'react-icons/sl';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


const Table = () => {
  const [data, setData] = useState([
    {
      clinicName: 'Abhishek Clinic',
      clinicPhone: '9807654321',
      exportStatus: 'Request Pending',
      exportType: 'Data Export',
      requestedBy: '9807654321',
      requestedOn: '08-Sep-2023 04:37 PM',
    },
    {
      clinicName: 'Abhishek Clinic',
      clinicPhone: '9807654321',
      exportStatus: 'Request Pending',
      exportType: 'Data Export',
      requestedBy: '9807654321',
      requestedOn: '08-Sep-2023 04:37 PM',
    },
    // Add more data rows here as needed.
  ]);

  const [showDeleteLabel, setShowDeleteLabel] = useState(false);
  const [deletedRowIndex, setDeletedRowIndex] = useState(null);

  const handleSettingsClick = (rowIndex) => {
    setShowDeleteLabel(true);
    setDeletedRowIndex(rowIndex);
  };

  const handleDeleteClick = () => {
    if (deletedRowIndex !== null) {
      const newData = [...data];
      newData.splice(deletedRowIndex, 1);
      setData(newData);
      setShowDeleteLabel(false);
    }
  };

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='mainhead500'>
      <div className="patientdocument-head-500">
        <div className="patient-icon-500">
         <Link to='/Administator'><AiOutlineArrowLeft />
         </Link> </div>
        <div className="patient-heading-500">
          Report /Export Data/Files Request Report
        </div>
      </div>
      <br />
      <div>
        <div className="divmain-500">
          <div>
            <input className="datediv-500" type="date"></input>
          </div>
          <strong style={{ marginTop: '5px' }}>to</strong>
          <div>
            <input className="datediv-500 datediv1-500" type="date"></input>
          </div>
          
          <div>
            <button className="datediv2-500">View Report</button>
          </div>
          <div>
            <Link to="/Export">
              <button className="datediv2-500 ">Back</button>
            </Link>
          </div>
          
        </div>
      </div>
      <br />
      <div className="divmain1-500">
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&#128463; EXPORT TO PDF</div>&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <div>&#128462; EXPORT TO EXCEL</div>
      </div>
      <table className="tabdata-500">
        <thead className="tabhead-500">
          <tr>
            <td className='column-10'>Clinic name</td>
            <td  className='column-10'>Clinic Phone</td>
            <td  className='column-10'>Export Status</td>
            <td  className='column-10'>Export Type</td>
            <td  className='column-10'>Requested By</td>
            <td  className='column-10'>Requested On</td>
            <td  className='column-10'>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td  className='column-10'>{row.clinicName}</td>
              <td  className='column-10'>{row.clinicPhone}</td>
              <td  className='column-10'>{row.exportStatus}</td>
              <td  className='column-10'>{row.exportType}</td>
              <td  className='column-10'>{row.requestedBy}</td>
              <td  className='column-10' typeof="date">{row.requestedOn}</td>
              <td  className='column-10'>
                {showDeleteLabel && deletedRowIndex === index ? (
                  <div>
                    <span
                      onClick={handleDeleteClick}
                      style={{ cursor: 'pointer', color: 'red' }}
                    >
                      Delete
                    </span>
                  </div>
                ) : (
                  <div>
                    <span
                      onClick={() => handleSettingsClick(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <SlSettings />
                    </span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Table;