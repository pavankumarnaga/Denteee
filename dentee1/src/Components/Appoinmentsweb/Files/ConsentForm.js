import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ConsentForm.css';
import { FiSettings } from 'react-icons/fi';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import Popup from 'reactjs-popup';

const ConsentForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items to display per page
  const dummyData = [
    {
      consentDate: '05-Oct-2023',
      doctor: 'John',
      procedureName: 'Normal',
      contactName: 'Contact',
      relation: 'none',
    },

    {
        consentDate: '05-Oct-2023',
        doctor: 'nani',
        procedureName: 'Normal',
        contactName: 'Contact',
        relation: 'none',
      },

      {
        consentDate: '05-Oct-2023',
        doctor: 'John345',
        procedureName: 'Normal',
        contactName: 'Contact',
        relation: 'none',
      },
    // Add more dummy data items here
  ];

  const totalItems = dummyData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = dummyData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="consentform-total">
      <div>

      <div className='doc-form2'>
            
            <select className='doc-option'>
                {/* <Link to="/Requconsent"><option>Request Consent form</option></Link> */}
                <option className='doc-ida'>IDA Consent Form</option>
                <option className='doc-covid'>General Medical Form</option>
            
            </select>
        
    </div>
        {/* ... Your code for document selection and table header ... */}
      </div>

     



<table className="doc-table">
  <thead className="doc-thead">
    <tr className="contr">
      <th className="conth">Consent Date</th>
      <th className="conth">Doctor</th>
      <th className="conth">Procedure Name</th>
      <th className="conth">Contact Name</th>
      <th className="conth">Relation</th>
      <th className="conth">Action</th>
    </tr>
  </thead>
  <tbody>
    {currentItems.map((item, index) => (
      <tr className="contr" key={index}>
        <td className="contd doc-td">{item.consentDate}</td>
        <td className="contd doc-td">{item.doctor}</td>
        <td className="contd doc-td">{item.procedureName}</td>
        <td className="contd doc-td">{item.contactName}</td>
        <td className="contd doc-td">{item.relation}</td>
        <td className="contd doc-td">
          <Popup
            trigger={
              <button className="doc-icon">
                <FiSettings className="doc-icon1" />
              </button>
            }
            position="bottom center"
          >
            <div className="doc-pop">
              <div className="doc-print">Print Consent Form</div>
              <div className="doc-delete">Delete Consent Form</div>
            </div>
          </Popup>
        </td>
      </tr>
    ))}
  </tbody>
</table>



      <div className="pat-footer33pat">
        <button
          className="butpagenation"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <AiFillStepBackward />
        </button>
        <p className="pat-bottom-num33pat">{currentPage}</p>
        <button
          className="butpagenation"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <AiFillStepForward />
        </button>
      </div>
    </div>
  );
};

export default ConsentForm;
