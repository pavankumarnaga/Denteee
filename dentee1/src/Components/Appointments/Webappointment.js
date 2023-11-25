import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineStepForward } from "react-icons/ai";
import { AiOutlineStepBackward } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Webappointment.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Web() {
  // Dummy data for the table
  const appointmentData = [
    {
      patientName: 'John Doe',
      mobileNumber: '123-456-7890',
      doctorName: 'Dr. Smith',
      emailAddress: 'john@example.com',
      startDateTime: '2023-10-28 10:00 AM',
      endDateTime: '2023-10-28 11:00 AM',
      appointmentStatus: 'Requested',
    },
    {
      patientName: 'John Doe',
      mobileNumber: '123-456-7890',
      doctorName: 'Dr. Smith',
      emailAddress: 'john@example.com',
      startDateTime: '2023-10-28 10:00 AM',
      endDateTime: '2023-10-28 11:00 AM',
      appointmentStatus: 'Requested',
    },
    {
      patientName: 'Jane Smith',
      mobileNumber: '987-654-3210',
      doctorName: 'Dr. Johnson',
      emailAddress: 'jane@example.com',
      startDateTime: '2023-10-29 02:30 PM',
      endDateTime: '2023-10-29 03:30 PM',
      appointmentStatus: 'Confirmed',
    },
    {
      patientName: 'Bob Brown',
      mobileNumber: '555-555-5555',
      doctorName: 'Dr. Davis',
      emailAddress: 'bob@example.com',
      startDateTime: '2023-11-01 09:15 AM',
      endDateTime: '2023-11-01 10:15 AM',
      appointmentStatus: 'Cancelled',
    },
    {
      patientName: 'Alice Johnson',
      mobileNumber: '111-222-3333',
      doctorName: 'Dr. Lee',
      emailAddress: 'alice@example.com',
      startDateTime: '2023-11-02 03:00 PM',
      endDateTime: '2023-11-02 04:00 PM',
      appointmentStatus: 'Requested',
    },
    {
      patientName: 'Mike Davis',
      mobileNumber: '999-888-7777',
      doctorName: 'Dr. Brown',
      emailAddress: 'mike@example.com',
      startDateTime: '2023-11-03 11:30 AM',
      endDateTime: '2023-11-03 12:30 PM',
      appointmentStatus: 'Confirmed',
    },
    // Add more dummy data entries...
  ];

  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointmentData.slice(indexOfFirstItem, indexOfLastItem);

  // Define a function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Determine if it's the first or last page for pagination controls
  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= appointmentData.length;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontka">
        <div className="main-headwebappoint">
          <div className="mainhead-iconwebappoint">
            <AiOutlineArrowLeft />
          </div>
          <div className="main-headingwebappoint">Report / Patient Documents</div>
        </div>

        <div className="ri">
          <h5>
            These Appointments are the list of Appointments Requested by patients online through the discover platform.
            Please take appropriate action to confirm or cancel the Appointment requests.
          </h5>
        </div>
        <div className="esd">
          <input type="date" placeholder="" className="dr"></input> to
          <input type="date" placeholder="" className="es"></input>
          <select className="but12390">
            <option value="" className="ag">
              Requested
            </option>
            <option value="" className="ij">
              Confirmed
            </option>
            <option value="" className="mn">
              Cancelled
            </option>
          </select>
          <button className="sel">View Report</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className='abserve-th'>Patient Name</th>
                <th className='abserve-th'>Mobile Number</th>
                <th className='abserve-th'>Doctor Name</th>
                <th className='abserve-th'>Email Address</th>
                <th className='abserve-th'>Start Date Time</th>
                <th className='abserve-th'>End Date Time</th>
                <th className='abserve-th'>Appointment Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment, index) => (
                <tr key={index}>
                  <td className='intiate-td'>{appointment.patientName}</td>
                  <td className='intiate-td'>{appointment.mobileNumber}</td>
                  <td className='intiate-td'>{appointment.doctorName}</td>
                  <td className='intiate-td'>{appointment.emailAddress}</td>
                  <td className='intiate-td'>{appointment.startDateTime}</td>
                  <td className='intiate-td'>{appointment.endDateTime}</td>
                  <td className='intiate-td'>{appointment.appointmentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='pat-footer33pat-nk333'>
          <button className='butpagenation-nk233'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <AiOutlineStepBackward />
          </button>
          <p className='pat-bottom-num33pat-nk133'>{currentPage}</p>
          <button className='butpagenation-nk233'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <AiOutlineStepForward />
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Web;