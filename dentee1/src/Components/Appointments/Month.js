import React, { useState } from 'react';
import './Month.css';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';
import { Link} from 'react-router-dom';
import Main from './Main';



function Month() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    console.log('Button clicked');
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log('Checkbox changed');
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
    console.log('Selected option:', e.target.value);
  };
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    return new Date(year, month, 0).getDate();
  };

  const firstDayOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const totalDays = daysInMonth();
    const startingDay = firstDayOfMonth();

    const days = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty${i}`} className="empty-cell"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      days.push(<div key={day} className="day-cell">{day}</div>);
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <Main/>
    <div>
        <div className="popup123">
          <div className="popup-content">
            {/* <button className="popup-close" onClick={closePopup}>
              &times;
            </button> */}
             <div className="calendar455">
              {/* <div className="calendar-header">
                <button onClick={goToPreviousMonth}>&#8249;</button>
                <h2>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
                <button onClick={goToNextMonth}>&#8250;</button>
              </div>  */}
              <div className="calendar-grid">
                <div className="day-cell day-label" >Sun</div>
                <div className="day-cell day-label">Mon</div>
                <div className="day-cell day-label">Tue</div>
                <div className="day-cell day-label">Wed</div>
                <div className="day-cell day-label">Thu</div>
                <div className="day-cell day-label">Fri</div>
                <div className="day-cell day-label">Sat</div>
                {renderDays()}
              </div>
            </div>
          </div>
        </div>
    
    </div>
    </>
  );
}

export default Month;