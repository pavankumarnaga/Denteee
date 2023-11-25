import React, { useState } from 'react';
// import './Navbar.css';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';
import Viewport from './POP'; // Replace with the correct file path
import './Week.css';
import Main from './Main';

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isWeekModalOpen, setIsWeekModalOpen] = useState(false);
  const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for the popup

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

  const openWeekModal = () => {
    setIsWeekModalOpen(true);
  };

  const closeWeekModal = () => {
    setIsWeekModalOpen(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <div>
      <div className="week-modal">
        <div className="week-modal-content">
          {/* <span className="week-modal-close" onClick={closeWeekModal}>
            &times;
          </span> */}
          <Week />
        </div>
      </div>
    </div>
  );
}

export const Week = () => {
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for the popup
  
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
      <div>
        <table className='Shalm-1'>
        <thead className='Shalm'>

<tr className='weektr'>
    <th className='weekth'></th>
    <td className='weektd'>sun-11-sep-2023</td>
    <td className='weektd'>Mon-12-sep-2023</td>
    <td className='weektd'> Tue-13-sep-2023</td>
    <td className='weektd'> Wed-14-sep-2023</td>
    <td className='weektd'> Thrus-15-sep-2023</td>
    <td className='weektd'> Fri-16-sep-2023</td> 
    <td className='weektd'> sat-17-sep-2023</td>
   

     
</tr>
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
</thead>
          <tbody>
           
<tr className='weektr'>
       <td>allday</td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>           
</tr>
    
<tr className='weektr'>      
        <td rowspan="2" className='time'>09:00AM</td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
    </tr>
    <tr className='weektr'>      
        <td  className='qa'></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
    </tr>
    <tr className='weektr'>    
        <td rowspan="2">09:30AM</td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td  className='qa'></td>
    </tr>
    <tr className='weektr'>      
        <td className='qa'></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
    </tr>
    <tr className='weektr'>
        <td rowspan="2">10:00AM</td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td  className='qa'></td>
        
    </tr>
    <tr className='weektr'>      
        <td className='qa'></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
    </tr>
    <tr className='weektr'>
        <td rowspan="2"> 10:30AM</td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        
        <td  className='qa'></td>
    </tr>
    <tr className='weektr'>      
        <td className='qa'></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td  className='qa'></td>
    </tr>
    
   
    <tr className='weektr'>
        <td rowspan="2">11:30AM</td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td  className='qa'></td>
    </tr>
 
    <tr className='weektr'>
        <td className='qa'></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        
    </tr>
    <tr className='weektr'>
        <td rowspan="2">12:00AM</td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td  className='qa'></td>
    </tr>
    <tr className='weektr'>
        <td className='qa'></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td onClick={openPopup}></td>
        <td></td>
    </tr>

          </tbody>
        </table>
      </div>
      
      
    </div>
    </>
  );
};

export default Navbar;