



import React, { useState } from 'react';
import './Appointment-Page.css';
import { FiSettings } from "react-icons/fi";   
import { AiOutlineClose } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

import Popup from 'reactjs-popup';
import { SiAppstore } from "react-icons/si";
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';

const sampleData = [
  {
    appointmentDate: '13-Oct-2023 09:AM',
    doctor: 'Abishek',
    status: 'Cancelled',
    arrivalTime: '10-Oct-2023-11:49AM',
    operationTime: '-',
    completeTime: '-',
    tokenNumber: 1,
    notes: '-',
  },
  {
    appointmentDate: '13-Oct-2023 09:AM',
    doctor: 'Abhi',
    status: 'Cancelled',
    arrivalTime: '10-Oct-2023-11:49AM',
    operationTime: '-',
    completeTime: '-',
    tokenNumber: 1,
    notes: '-',
  },
   {
    appointmentDate: '13-Oct-2023 09:AM',
    doctor: 'Abi',
    status: 'Cancelled',
    arrivalTime: '10-Oct-2023-11:49AM',
    operationTime: '-',
    completeTime: '-',
    tokenNumber: 1,
    notes: '-',
  },];

const Histroy = () => {
  const [isFormOpen, setIsFormOpen] = useState(true); // Default to open
  const [patientType, setPatientType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const handlePatientTypeChange = (event) => {
    setPatientType(event.target.value);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = sampleData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= sampleData.length;

  return (
    <div className='appointment-total-app'>
      <div>
        <div className='text-history'>Appointment History</div>
      </div>

      <Popup
        trigger={
          // <div className='text-add'>
          //   <button className='text-add-text'>Add new Appointment</button>
          // </div>
          <button className='text-add-icon'><SiAppstore className='text-add-icon-1' />Add new Appointment</button>

        }
        modal
        nested
      >
        {
                close => (
              <div className=' hist-asd'>
                    <div className='row'>
                         <div className='hist-firstcontent'>
                            <h1 className='hist-start'> Patient Appointment</h1>
                            <button className='hist-on' onClick=
                                  {() => close()}>
                              <AiOutlineClose className='hist-iconclose' />
                               </button>
                         </div>
                         {/* <div className='second'>
                          
                          </div> */}
                     </div>
            <div className='hist-thirdcontent'>
              <label>
                <input
                  type='radio'
                  value='existing'
                  checked={patientType === 'existing'}
                  onChange={handlePatientTypeChange}
                />
                Existing patient
              </label>
              <label className='hist-one'>
                <input
                  type='radio'
                  value='new'
                  checked={patientType === 'new'}
                  onChange={handlePatientTypeChange}
                />
                New patient
              </label>
            </div>
            <div className='hist-fourthcontent-1'>
              <div className='hist-patient'>Doctor</div>
              <div>
              <select className='hist-count'>
                <option value='select patient'>Abishek</option>
                <option value='s'>s</option>
                <option value='st'>st</option>
                <option value='t'>t</option>
                <option value='t'>t</option>
              </select>
              </div>
            </div>
            <div className='hist-fourthcontent-2'>
              <div className='hist-time'>Date&time</div>
              <div>
              <label className='hist-label'>
                <input
                  type='date'
                  value=''
                  checked={patientType === 'existing'}
                  onChange={handlePatientTypeChange}
                  className='ment-write'
                />
                <BiTime className=' hist-time-icon' />
              </label>
              </div>
            </div>
            <div className='hist-fivecontent'>
              <div className='hist-chair'>Duration</div>
              <select className='hist-drop'>
                <option value=''>15mins</option>
                <option value='2'>20mins</option>
                <option value='3'>30mins</option>
                <option value='4'>40mins</option>
                <option value='5'>50mins</option>
              </select>
            </div>
            <div className='hist-sixthcontent'>
              <div className='hist-treat'>Treatment</div>
              <input type='text' placeholder='Select Treatment' className='hist-ten'></input>
            </div>
            <div className='hist-seventhcontent'>
              <div className='hist-note'>Notes</div>
              <input type='text'placeholder='Notes' className='hist-input'></input>
            </div>
            
            <div className='hist-seventhcontent-1'>
              
            <div className='hist-fication'>Notification</div>
              <label className='hist-check'>
                <input
                  type='checkbox'
                  value='existing'
                  checked={patientType === 'existing'}
                  onChange={handlePatientTypeChange}
                />
                on
              </label>
              <label className='hist-check'>
                <input
                  type='checkbox'
                  value='existing'
                  checked={patientType === 'existing'}
                  onChange={handlePatientTypeChange}
                />
                Doctor
              </label>
              <label className='hist-check'>
                <input
                  type='checkbox'
                  value='existing'
                  checked={patientType === 'existing'}
                  onChange={handlePatientTypeChange}
                />
                patient
              </label>
            </div>
              <div className='appointpageclass'>
            
              <button className='appointpagebut'>SAVE</button>
              &nbsp;&nbsp;&nbsp;&nbsp;  <button className='appointpagebut' onClick=
                                  {() => close()}>
                CLOSE
              </button>
</div>
          </div>
      
             )
        }
      </Popup>

      <div className='text-table-container'>
        <table className='text-table'>
          <thead className='text-color'>
            <tr className='text-firstrow'>
              <th className='textth'>Appointment Date</th>
              <th className='textth'>Doctor</th>
              <th className='textth'>Status</th>
              <th className='textth'>Arrival Time</th>
              <th className='textth'>Operation Time</th>
              <th className='textth'>Complete Time</th>
              <th className='textth'>Token Number</th>
              <th className='textth'>Notes</th>
              <th className='textth'>Action</th>
            </tr>
          </thead>
          <tbody className='text-body'>
            {currentData.map((data, index) => (
              <tr key={index}>
                <td className='texttd'>{data.appointmentDate}</td>
                <td className='texttd'>{data.doctor}</td>
                <td className='texttd'>{data.status}</td>
                <td className='texttd'>{data.arrivalTime}</td>
                <td className='texttd'>{data.operationTime}</td>
                <td className='texttd'>{data.completeTime}</td>
                <td className='texttd'>{data.tokenNumber}</td>
                <td className='texttd'>{data.notes}</td>
                <td className='texttd'><FiSettings className='set-icon1' /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pat-footer33pat">
        <button
          className="butpagenation"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          <AiOutlineStepBackward />
        </button>
        <p className="pat-bottom-num33pat">{currentPage}</p>
        <button
          className="butpagenation"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}
        >
          <AiOutlineStepForward />
        </button>
      </div>
    </div>
  );
};

export default Histroy;