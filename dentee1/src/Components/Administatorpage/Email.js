import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';
import './Email.css';
import React, { useState,useEffect } from 'react';

function App() {
  const [sendType, setSendType] = useState('individual');
  const [sendTo, setSendTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [remarks, setRemarks] = useState('');
  const [attachments, setAttachments] = useState([]);


  const handleSendTypeChange = (event) => {
   
    setSendType(event.target.value);
  };

  const handleSendEmail = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sendType,
          sendTo,
          emailSubject,
          remarks,
          attachments,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally, you can reset form fields or show a success message
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:5001/send-email',)
      .then((response) => {
        console.log('API Response:', response.data); // Log the response
        setSendType(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincont222'>
        <div className="container-222">
          <div className="heading-222">
            <div className='patientdocument-head-222'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className='patient-icon-222'>
                <Link to="/Administator"><AiOutlineArrowLeft /></Link>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className='patient-heading-222'>Message / Email</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="send-button-222" onClick={handleSendEmail}>Send Email</button>
              <Link to='/Emailpage'>
                <button className="view-report-button-222">View Email</button>
              </Link>
            </div>
          </div>
          <hr className="divider-222" />
          <div className="radio-group-222">
            <input
              type="radio"
              id="individual"
              value="individual"
              checked={sendType === 'individual'}
              onChange={handleSendTypeChange}
            />
            <label htmlFor="individual">Individual Send</label>
            <input
              type="radio"
              id="group"
              value="group"
              checked={sendType === 'group'}
              onChange={handleSendTypeChange}
            />
            <label htmlFor="group">Group Send</label>
          </div>
          <div className="send-fields-222">
            <div>
              <label htmlFor="send-to">Send To:</label>
              <input
                type="text"
                id="send-to"
                value={sendTo}
                onChange={(e) => setSendTo(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-subject">Email Subject:</label>
              <input
                type="text"
                id="email-subject"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
              />
            </div>
          </div>
          <div className='Remarks-page-tnx-222'>
            <textarea
              className='rectangle-box-222'
              type='text'
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
          <div className='attach-20-222'>
            <h3>Attachments</h3>
            <div className="choose-files">
              <input
                type="file"
                id="file-upload"
                className="file-upload-input-222"
                multiple
                onChange={(e) => setAttachments([...attachments, ...e.target.files])}
              />
              <label htmlFor="file-upload" className="file-upload-label-222">
                Select Files
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;