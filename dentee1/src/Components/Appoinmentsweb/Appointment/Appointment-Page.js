import React, { useState,useEffect } from 'react';
import './Appointment-Page.css';
import { FiSettings } from "react-icons/fi";   
import { AiOutlineClose } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import Popup from 'reactjs-popup';
import { SiAppstore } from "react-icons/si";
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import  axios from 'axios';


const Histroy = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState({
    doctor:'select Doctor',
    date: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSave = () => {
    axios
      .post('http://127.0.0.1:5000/api/newappointment', appointment)
      .then((response) => {
        console.log('Response from server:', response.data);
        window.alert('data posted successfully...!');
        
        // Handle any further actions, e.g., redirect or show a success message
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/api//deleteappointment/${id}`)
      .then((response) => {
        console.log('Appointment deleted:', response.data);
        window.alert('data deleted successfully...!');
        // Update your state or fetch appointments again after deletion
      })
      .catch((error) => {
        console.error('Error deleting appointment:', error);
      });
  };

  const handleEdit = (id) => {
    // You can create an object with the updated data here
    const updatedData = {
      // ... (update the fields accordingly)
      doctor: 'Updated Doctor',
      date: 'Updated Date',
      notes: 'Updated Notes',
    };

    axios
      .put(`http://127.0.0.1:5000/api/updateappointment/${id}`, updatedData)
      .then((response) => {
        console.log('Appointment updated:', response.data);
        window.alert('data update successfully...!');
        // Update your state or fetch appointments again after edit
      })
      .catch((error) => {
        console.error('Error updating appointment:', error);
      });
  };


  useEffect(() => {
    // Fetch data from backend when the component mounts
    axios.get('http://localhost:5000/api/newappointment',appointment)
      .then(response => {
        console.log(response.data); // Log the data received from the backend
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError(error.message);
      });
  }, []);

  const [error,setError] = useState(null);
  const [sampleData, setSampleData] = useState([]);
  const [updatedData,setupdatedData]=useState([]);

  const [isFormOpen, setIsFormOpen] = useState(true); // Default to open
  const [patientType, setPatientType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePatientTypeChange = (event) => {
    setPatientType(event.target.value);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= appointments.length;

  

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
              {/* <label>
                <input
                  type='radio'
                  value='existing'
                  checked={patientType === 'existing'}
                  onChange={handlePatientTypeChange}
                />
                Existing patient
              </label> */}
              {/* <label className='hist-one'>
                <input
                  type='radio'
                  value='new'
                  checked={patientType === 'new'}
                  onChange={handlePatientTypeChange}
                />
                New patient
              </label> */}
            </div>
            <div className='hist-fourthcontent-1'>
              <div className='hist-patient'>Doctor</div>
              <div>
              <select 
                className='hist-count'
                name='doctor'
                value={appointment.doctor}
                onChange={handleInputChange}
                >
                <option value=''>select Doctor</option>
                <option value='Abhishek'>Abhishek</option>
                <option value='s'>sahith</option>  
                <option value='st'>karishmat</option>
                <option value='t'>karthikt</option>
                <option value='t'>vani</option>
              </select>
              </div>
            </div>
            <div className='hist-fourthcontent-2'>  
              <div className='hist-time'>Date&time</div>     
              <div>
              <label className='hist-label'>
                <input
                  type='date'
                  name='date'   
                  value={appointment.date}          
                  checked={patientType === 'existing'}
                  onChange={handleInputChange}
                  // onChange={handlePatientTypeChange}
                  className='ment-write'
                />
                {/* <BiTime className=' hist-time-icon' /> */}
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
              <input 
                type='text'
                placeholder='Notes' 
                className='hist-input'
                name='notes'
                value={appointment.notes}
                onChange={handleInputChange}
                />
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
            
              <button 
                className='appointpagebut'
                onClick={handleSave} >SAVE</button>

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
            {currentData.map((appointment, index) => (
              <tr key={index}>
                <td className='texttd'>{appointment.date}</td>
                <td className='texttd'>{appointment.doctor}</td>
                <td className='texttd'>{appointment.status}</td>
                <td className='texttd'>{appointment.arrivalTime}</td>
                <td className='texttd'>{appointment.operationTime}</td>
                <td className='texttd'>{appointment.completeTime}</td>
                <td className='texttd'>{appointment.tokenNumber}</td>
                <td className='texttd'>{appointment.notes}</td>
              
                <Popup
                    trigger=
                    {  <td className='texttd'><FiSettings className='set-icon1' /></td>}
                    position='bottom center'
                    >
                      {/* <div className='appointment-box'>
                         <div className='appointment-edit'>Edit</div> 
                        
                        <div className='appointment-edit'>Delete</div> 
                      
                      </div> */}

  

<div className='appointment-box'>
                <div className='appointment-edit' onClick={() => handleEdit(appointment._id, updatedData)}>
                  Edit
                </div>
                <div className='appointment-edit' onClick={() => handleDelete(appointment._id)}>
                  Delete
                </div>
              </div>
                    </Popup>
               
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