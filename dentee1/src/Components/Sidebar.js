import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { MdOutlineGroups2 } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";   
import { FaMoneyBillAlt } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { BiSolidNotepad } from "react-icons/bi";

const Sidebar = () => {
  const [isPatientDropdownOpen, setPatientDropdownOpen] = useState(false);
  const [isAppointmentDropdownOpen, setAppointmentDropdownOpen] = useState(false);

  const togglePatientDropdown = () => {
    setPatientDropdownOpen(!isPatientDropdownOpen);
    setAppointmentDropdownOpen(false);
  };

  const toggleAppointmentDropdown = () => {
    setAppointmentDropdownOpen(!isAppointmentDropdownOpen);
    setPatientDropdownOpen(false);
  };

  return (
    <div className="Gayatri">
      <div className="Gayatri-11">
        <div className="doc-link-nav">
          <div
            className="Gayatri-item"
            onClick={togglePatientDropdown}
            onMouseEnter={togglePatientDropdown} // Add mouse enter event
          >
            <span className="sidebar-icon">
              <MdOutlineGroups2 />
            </span>
            <span>Patient</span>
          </div>
          <hr></hr>
        </div>

        {isPatientDropdownOpen && (
          <div className="array" onMouseLeave={togglePatientDropdown}>
        <Link className="array456"  to="/Patient">   <div className="array345"> Patient</div></Link>
            
            
        <Link  className="array456" to="/Addpatient">    <div className="array345"> Add Patient</div></Link>
          </div>
        )}

        <div className="doc-link-nav">
          <div
            className="Gayatri-item"
            onClick={toggleAppointmentDropdown}
            onMouseEnter={toggleAppointmentDropdown} // Add mouse enter event
          >
            <span className="sidebar-icon">
              <FcCalendar />
            </span>
            <span>Appointments</span>
          </div>
          <hr></hr>
        </div>

        {isAppointmentDropdownOpen && (
          <div className="array" onMouseLeave={toggleAppointmentDropdown}>
        <Link  className="array456" to="/Main">   <div className="array345"> Appointment </div></Link>
            
           
        <Link  className="array456" to="/Webappointment">  <div className="array345">Web Appointment </div></Link>
          </div>
        )}

        <Link to="/HomePage" className="doc-link-nav">
          <div className="Gayatri-item">
            <span className="sidebar-icon">
              <FaMoneyBillAlt />
            </span>
            <span>Accounts</span>
          </div>
          <hr></hr>
        </Link>

        <Link to="/Areport" className="doc-link-nav">
          <div className="Gayatri-item">
            <span className="sidebar-icon">
              <TbReport />
            </span>
            <span>Reports</span>
          </div>
          <hr></hr>
        </Link>

        <Link to="/Administator" className="doc-link-nav">
          <div className="Gayatri-item">
            <span className="sidebar-icon">
              <BiSolidNotepad />
            </span>
            <span>Administrator</span>
          </div>
          <hr></hr>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;