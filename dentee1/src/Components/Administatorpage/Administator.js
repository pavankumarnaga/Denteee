import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './Administator.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { MdManageAccounts} from 'react-icons/md';
import {ImUsers} from 'react-icons/im';
import {FaHospitalUser ,FaWpforms  } from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';    
import {AiOutlinePlusSquare} from 'react-icons/ai';  
import { AiFillMedicineBox} from 'react-icons/ai';   
import { BiSolidBank} from 'react-icons/bi';   
import { MdManageHistory , MdGroups} from 'react-icons/md';    
import { LuNewspaper} from 'react-icons/lu';   
import { LuSettings} from 'react-icons/lu'; 
import { MdSettings} from 'react-icons/md';    
import {MdSms } from 'react-icons/md';    
import { LuImport} from 'react-icons/lu';    
import { BiExport} from 'react-icons/bi';      
import { BsFillPrinterFill} from 'react-icons/bs';   
import { RiRecycleFill} from 'react-icons/ri';    
import { RxActivityLog} from 'react-icons/rx';  
import { RiComputerFill } from 'react-icons/ri';      










function Administator() {
  return (
    <>
    
    <Navbar/>
    <Sidebar/>
    <div className='Adminstration'>
    
    <div className='some'>

    <div className='Adminstration1'>
       
         <p><strong>User Management</strong></p>
    <div className="card-container73-go">
      <div className="card73-go">
        <Link to="/Manageclinicone">
          <MdManageAccounts />
          <span>Manage Clinic</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Manageuser">
          <ImUsers />
          <span>Manage Users</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Doctormanage">
          <FaHospitalUser />
          <span>Manage Doctors</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Userroleaccess">
          <FaUserAlt />
          <span>User Role Access</span>
        </Link>
      </div>
     
    </div>
    </div>


<hr></hr>

    <div>
         <p><strong>Manage Master</strong></p>
    <div className="card-container73-go">
      <div className="card73-go">
        <Link to="/Managetreatment">
          <AiOutlinePlusSquare />
          <span>Manage Treatments</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Managemedicine">
          < AiFillMedicineBox />
          <span>Manage Medicine</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Bankaccount">
          <BiSolidBank/>
          <span>Manage Bank accounts</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Managemaster">
          <MdManageHistory />
          <span>Manage Masters</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Rxtemplete">
          < LuNewspaper />
          <span>Manage Rx Templet</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Dentalchart">
          <LuNewspaper />
          <span>Manage Dental Chart</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Manageclinic">
          <MdGroups />
          <span>Manage Chairs</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Managereferences">
          <MdManageAccounts />
          <span>Manage Refferencs</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Customerview">
          <LuSettings />
          <span>Manage Custom View</span>
        </Link>
      </div>
    </div>
    </div>


    <hr></hr>


    <div>
         <p><strong>Communication</strong></p>
    <div className="card-container73-go">
      {/* <div className="card73-go">
        <Link to="/heading/1">
          <MdSettings />
          <span>Communication Attribute</span>
        </Link>
      </div> */}
      <div className="card73-go">
        <Link to="/Smstemplet">
          <MdSms/>
          <span>Sms Template</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Email">
          <MdSms/>
          <span>E-Mail Template</span>
        </Link>
      </div>
     
    </div>
    </div>

    <hr></hr>


    <div>
         <p><strong>Others</strong></p>
    <div className="card-container73-go">
      <div className="card73-go">
        <Link to="/Import">
          <LuImport />
          <span>Import and Export Data</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Importpatient">
          <BiExport />
          <span>Import Patient Data Request</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/PrintSetting">
          <BsFillPrinterFill />
          <span>Print Settings</span>
        </Link>
      </div>

      <div className="card73-go">
        <Link to="/Personalizesettings">
          <LuSettings />
          <span>Personalize Setting</span>
        </Link>
      </div>


      <div className="card73-go">
        <Link to="/Recyclebin">
          <RiRecycleFill />
          <span>Recycle-Bin</span>
        </Link>
      </div>


      <div className="card73-go">
        <Link to="/Dynamicconsent">
          <FaWpforms />
          <span>Dynamic Content Form</span>
        </Link>
      </div>


      <div className="card73-go">
        <Link to="/Useractivitylog">
          <RxActivityLog />
          <span>Users Activity Log</span>
        </Link>
      </div>
     
    </div>
    </div>

    <hr></hr>


    <div>
         <p><strong>Security</strong></p>
    <div className="card-container73-go">
      <div className="card73-go">
        <Link to="/Ipaccess">
          <RiComputerFill />
          <span>Manage Ip Access</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Deviceaccess">
          <RiComputerFill  />
          <span>Device Access</span>
        </Link>
      </div>
      <div className="card73-go">
        <Link to="/Browsersessionhistroy">
          <RiComputerFill />
          <span>Browser Session History</span>
        </Link>
      </div>
    </div>
    </div>
    </div>

    </div>
    </>
  );
}





export default Administator;



