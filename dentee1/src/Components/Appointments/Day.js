import React, { useState } from 'react';
import './Day.css';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';
import Viewport from './POP'; 
import Main from './Main';

function Month() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);
  const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);
  const [isDayModalOpen, setIsDayModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for the popup
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });


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

  const openMonthModal = () => {
    setIsMonthModalOpen(true);
  };

  const closeMonthModal = () => {
    setIsMonthModalOpen(false);
  };

  const openDayModal = () => {
    setIsDayModalOpen(true);
  };

  const closeDayModal = () => {
    setIsDayModalOpen(false);
  };

  // Function to open the popup
  const openPopup = (e) => {
    // Calculate the position of the popup relative to the clicked cell
    const cellRect = e.target.getBoundingClientRect();
    setPopupPosition({
      top: cellRect.top + window.scrollY + cellRect.height + 'px',
      left: cellRect.left + window.scrollX + 'px',
    });

    setIsPopupOpen(true);
  };

  return (
    <>
    <Main/>
    <div>
      <div className="day-modal">
        <div className="day-modal-content">
          <table className='Vaneey'>
          {isPopupOpen && (
        <Viewport
          style={{
            position: 'absolute',
            top: popupPosition.top,
            left: popupPosition.left,
          }}
          handleClose={() => setIsPopupOpen(false)}
        />
      )}
          <thead>
                <tr>
                  <th></th>      
                    <th >Sun 03-Sep-2023</th>  
                         </tr>
            </thead>
            <tbody>
              <tr>
                <td >9:00AM</td>
              <td onClick={openPopup}></td>
              </tr>
              <tr>
                  <td onClick={openPopup}></td>
                  <td onClick={openPopup}></td>
                </tr>
                <tr>
                  <td >9:30AM</td>
                  <td onClick={openPopup}></td>
                </tr>
                <tr>
                  <td onClick={openPopup}></td>
                  <td onClick={openPopup}></td>
                </tr>
                <tr>
                  <td>10:00AM</td>
                  <td  onClick={openPopup}></td>
                </tr>
                <tr>
                  <td  onClick={openPopup}></td>
                  <td  onClick={openPopup}></td>
                </tr>
                <tr>
                  <td > 10:30Am</td>
                  <td  onClick={openPopup}></td>
                </tr>
                <tr>
                  <td  onClick={openPopup}></td>
                  <td  onClick={openPopup}></td>
                </tr>
                <tr>
                  <td >11:00AM</td>
                  <td  onClick={openPopup}></td>
                </tr>
                <tr>
                  <td  onClick={openPopup}></td>
                  <td  onClick={openPopup}></td>
                </tr>
                <tr>
                  <td>12:00PM</td>
                  <td  onClick={openPopup}></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default Month;