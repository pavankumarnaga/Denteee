import React, { useState } from 'react';
import './Ipaccesspage.css'; // Import your CSS file
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Ipaccesspage = ({ history }) => {
  const [startIp, setStartIp] = useState('');
  const [endIp, setEndIp] = useState('');
  const [clinicAccess, setClinicAccess] = useState('');

  const handleSave = () => {
   
    console.log('Start IP:', startIp);
    console.log('End IP:', endIp);
    console.log('Clinic Access:', clinicAccess);

    // After saving, you can navigate back to the previous page
    history.goBack();
  };

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='maincontipo33'>
      <div className="ip-settings-container-ipo33">
      <div className="top-row-ipo33">
        <div className="input-group-ipo33">
          <label className='label-ipo33'>Enter Start IP Range:</label>
          <input className='input-ipo33'
            type="text"
            value={startIp}
            onChange={(e) => setStartIp(e.target.value)}
          />
        </div>
        <div className="input-group-ipo33">
          <label className='label-ipo33'>Enter End IP Range:</label>
          <input className='input-ipo33'
            type="text"
            value={endIp}
            onChange={(e) => setEndIp(e.target.value)}
          />
        </div>
      </div>
      <div className="bottom-row-ipo33">
  <div className="input-group-ipo33">
    <label className='label-ipo33'>Allowed Clinic Access in this IP:</label>
    <select
      className='input-ipo33'
      value={clinicAccess}
      onChange={(e) => setClinicAccess(e.target.value)}
    >
      <option value="allow">Allow Access</option>
      <option value="block">Block Access</option>
    </select>
  </div>
</div>

      <div className="button-group-ipo33">
        <button className="save-button-ipo33" onClick={handleSave}>Save</button>
        {/* <button className="back-button-ipo33" onClick={() => history.goBack()}>Back</button> */}
        <Link to='/Ipaccess'> <button className="back-button-ipo33"> Back </button></Link>
      </div>
    </div>
    </div>
    </>
  );
};

export default Ipaccesspage;