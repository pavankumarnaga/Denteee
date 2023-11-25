import React, { useState } from 'react';
import './Main.css';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { PiWechatLogoFill } from 'react-icons/pi';
import { BsArrowsMove } from 'react-icons/bs';
import { AiTwotonePrinter } from 'react-icons/ai';
import { SiMicrosoftexcel } from 'react-icons/si';
import { PiArrowsCounterClockwiseFill } from 'react-icons/pi';
import { FiSettings } from 'react-icons/fi';
import POP from './POP';
import * as XLSX from 'xlsx';

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [showPopup, setShowPopup] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isContentMoved, setIsContentMoved] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('Scheduled');
  const [selectedDate, setSelectedDate] = useState('');
  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    setOptionsOpen(false);
    console.log('Selected option:', option);
  };

  const data = [
    ['Patient Name', 'Category Name', 'Order No', 'LabWork Date', 'Supplier Name', 'Cost'],
    ['John', 'None', '013', '12/09/2023', 'sai', '₹2000'],
    ['John', 'jerry', '013', '12/09/2023', 'sai', '₹2000'],
  ];

  const refresh = (e) => {
    e.preventDefault();

    window.location.reload();
}

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Labwork Data');
    XLSX.writeFile(wb, 'labwork_data.xlsx');
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  };
  const toggleContentMove = () => {
    setIsContentMoved(!isContentMoved);
  };

  const handleStatusChange = (status) => {
    setCurrentStatus(status);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const options = [
    { value: 'Add Treatment', label: 'Add Treatment' },
    { value: 'Add Precription', label: 'Add Precription' },
    { value: 'Billing', label: 'Billing' },
    { value: 'Mark as Missed', label: 'Mark as Missed' },
    { value: 'Send Feedback Sms', label: 'Send Feedback Sms' },
    { value: 'Send Whatsapp Sms', label: 'Send Whatsapp Sms' },

  ];
  const handlePrintClick = () => {
    window.print();
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log('Checkbox changed');
  };
  const handleClick = () => {
    setShowPopup(!showPopup);
    console.log('Button clicked');
  };
  const handleClose = () => {
    setShowPopup(false);
    console.log('Button press');
  };
  const handleCheckin = () => {
    console.log('Check-in clicked'); 
  };
  
  return (
    <div className="maincontweb">
      <div className={`page-container ${isContentMoved ? 'flex-move-right' : ''}`}>
        <div>
          <div className="Joha-1">
            <div className="Joha-Icon">
            <div className='mainhead-iconsaiv'><Link to='/Administator'><AiOutlineArrowLeft/></Link></div>
              <h3 className="Lakshmi">Appointment</h3>&nbsp;&nbsp;
              <PiArrowsCounterClockwiseFill className="Joha-icon-3" onClick={refresh} />&nbsp;&nbsp;&nbsp;
              <button className="petty-exce" onClick={handlePrintClick}>
                <AiTwotonePrinter className="Joha-icon-2" />
              </button>
              &nbsp;&nbsp;&nbsp;
              <button className="petty-exce" onClick={exportToExcel}>
                <SiMicrosoftexcel style={{ color: 'green' }} className="Joha-icon-2" />
              </button>
            </div>
            <div className="Joha-icons-33">

              <button className="Joha-sai-2" onClick={toggleFullscreen}>
                <BsArrowsMove style={{ color: 'blue' }} className="Joha-icon-1" />
              </button>
           
            </div>
            <hr />
          </div>
        </div>
        <div className="Joha-section-1">
          <select className="Joha-menu-1" value={selectedOption} onChange={(e) => handleDropdownChange(e.target.value)}>
            <option value="option1">Ratan</option>
            <option value="option2">Select All Doctor</option>
            <option value="option3">Unavailable</option>
          </select>
          <label style={{ color: 'black' }}>
            <input type="checkbox" className="Joha1" checked={isChecked} onChange={handleCheckboxChange} />
            Group View
          </label>
          <button className="Joha-act" onClick={handleClick}>
            Add new appointment
          </button>
          {showPopup && <POP handleClose={handleClose} />}
        </div>
        <nav className="Nani">
          <div className="Joha-Page">
            <li className="Joha-previous">TODAY</li>
            <li className="Joha-previous">
              <BiSkipPrevious />
            </li>
            <li className="Joha-previous">
              <BiSkipNext />
            </li>
            <input className="Jona-Sai" type="date" value={selectedDate} onChange={handleDateChange} />
            <div className="Jona-11">{formatDate(selectedDate)}</div>
            <div className="Jona-234">
              <Link to="/Day">
                <button className="header-button">DAY</button>
              </Link>&nbsp;&nbsp;
              <Link to="/Week">
                <button className="header-button">WEEK</button>
              </Link>&nbsp;&nbsp;
              <Link to="/Month">
                <button className="header-button">MONTH</button>
              </Link>&nbsp;&nbsp;
              <Link to="/AGENDA">
                <button className="header-button">AGENDA</button>
              </Link>
            </div>
          </div>
        </nav>
        <table className="Joyaci-table">
          <button className="Joyaci-button1" onClick={() => handleStatusChange('Scheduled')}>
            Scheduled <button className="shayam">0</button>
          </button>
          <button className="Joyaci-button2" onClick={() => handleStatusChange('Waiting')}>
            Waiting <button className="shayam1">0</button>
          </button>
          <button className="Joyaci-button3" onClick={() => handleStatusChange('Engaging')}>
            Engaging <button className="shayam2">0</button>
          </button>
          <button className="Joyaci-button4" onClick={() => handleStatusChange('Completed')}>
            Completed <button className="shayam3">0</button>
          </button>
          <button className="Joyaci-button5" onClick={() => handleStatusChange('Missed')}>
            Missed <button className="shayam4">0</button>
          </button>
        </table>
        <div className="Patients-saivas">
          <h4>
            <PiWechatLogoFill /> {currentStatus} Patients
          </h4>
        </div>

       <div className="supriya">
          <div className="custom-dropdown">
          <button onClick={handleCheckin}>Checkin</button>

            <button className="custom-dropdown-toggle" onClick={() => setOptionsOpen(!optionsOpen)}>
              <FiSettings />
            </button>
            {optionsOpen && (
              <div className="custom-dropdown-options">
                <div className='flex462'>
                  <Link to='/Appointment_header'>
                    <button
                      key={options[0].value}
                      className={`custom-dropdown-option ${selectedOption === options[0].value ? 'selected' : ''}`}
                      onClick={() => handleDropdownChange(options[0].value)}
                    >
                      {options[0].label}
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;