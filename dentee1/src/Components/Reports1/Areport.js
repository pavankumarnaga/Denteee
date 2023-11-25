import React from 'react';
import { Link } from 'react-router-dom';
import './Areport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { MdManageAccounts} from 'react-icons/md';
import {ImUsers} from 'react-icons/im';
import {FaHospitalUser  } from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';    
import {IoIosChatbubbles} from 'react-icons/io';    
import {IoAnalyticsSharp} from 'react-icons/io5';  
import {FaUserDoctor} from 'react-icons/fa6'; 
import {SiWheniwork} from 'react-icons/si'; 
import {BsPersonLinesFill,BsFillCalendar2PlusFill} from 'react-icons/bs'
import {VscReferences} from 'react-icons/vsc';
import {MdContactEmergency} from 'react-icons/md';
import {BiSolidAnalyse , BiSolidCustomize} from 'react-icons/bi';
import {GrUserSettings} from 'react-icons/gr';
import {HiDocumentReport} from 'react-icons/hi';
import {TfiWrite} from 'react-icons/tfi';
import {FaUserClock} from 'react-icons/fa';
import {TbReport} from 'react-icons/tb';
import {TbReportMedical} from 'react-icons/tb';
import {BiSolidReport} from 'react-icons/bi';








function AReport() {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='Adminstration'>
       
    <div>

    <div className='Adminstration1'>
       
         <p><strong className='strong1'>Patient Report</strong></p>
    <div className="card-container737-go">
      <div className="card737-go">
        <Link to="/Patient Analysis">
          <MdManageAccounts />
          <span className='span-go'>Patient Analysis</span>
        </Link>
      </div>
      <div className="card737-go">
        <Link to="/PatientPersonalReport">
          <ImUsers />
          <span className='span-go'>Patient Personal Attribute Report</span>
        </Link>
      </div>
      <div className="card737-go">
        <Link to="/DailyCollection">
          <FaHospitalUser />
          <span className='span-go'>Collection Report</span>
        </Link>
      </div>
      <div className="card737-go">
        <Link to="/OutsandingReport">
          <FaUserAlt />
          <span className='span-go'>Outstanding Report</span>
        </Link>
      </div>
      <div className="card737-go">
      <Link to="/RevenueReportAnalysis">
        <IoAnalyticsSharp />
        <span className='span-go'>Renenue Analysis</span>
      </Link>
    </div>
    <div className="card737-go">
    <Link to="/DoctorWiseReport">
      <FaUserDoctor />
      <span className='span-go'>Doctorwise Report</span>
    </Link>
  </div>       
  <div className="card737-go">
  <Link to="/WorkReport">
    <SiWheniwork />
    <span className='span-go'>Work Report</span>
  </Link>
</div> <div className="card737-go">
<Link to="/OnlinePatientPaymentReport">
  <BsPersonLinesFill />
  <span className='span-go'>Online Patient Payment Analysis</span>
</Link>
</div> <div className="card737-go">
<Link to="/Clinicpatient">
  <IoIosChatbubbles />
  <span className='span-go'>Clinic Insight</span>
</Link>
</div> <div className="card737-go">
<Link to="/ConsultantBilling">
  <MdContactEmergency />
  <span className='span-go'>Consultant Billing Report</span>
</Link>
</div> <div className="card737-go">
<Link to="/ReferReport">
  <VscReferences />
  <span className='span-go'>Referrer Report</span>
</Link>
</div> <div className="card737-go">
<Link to="/CilnicDataAnlaysis">
  <BiSolidAnalyse  />
  <span className='span-go'>Clinic Data Analysis</span>
</Link>
</div> 
{/* <div className="card737-go">
<Link to="/UserRoleAccess">
  <FaUserAlt />
  <span className='span-go'>Clinic Dashboard</span>
</Link>
</div> */}
 <div className="card737-go">
<Link to="/Customizedpatientreports">
  <BiSolidCustomize />
  <span className='span-go'>Customized Patient Report</span>
</Link>
</div> <div className="card737-go">
<Link to="/Generalreport">
  <BiSolidReport/>
  <span className='span-go'>General Report</span>
</Link>
</div> <div className="card737-go">
<Link to="/Patient Document Report">
  <TfiWrite />
  <span className='span-go'>Patient Document Report</span>
</Link>
</div>
     
    </div>


<hr></hr>
    <div>

<p><strong className='strong1'>Patient Appointment</strong></p>
    
    </div>
    <div className="card-container737-go">
    <div className="card737-go">
      <Link to="/AppointmentReport">
        <BsFillCalendar2PlusFill />
        <span className='span-go'>Appointment Report</span>
      </Link>
    </div>
    <div className="card737-go">
      <Link to="/WaitingAnalysis">
        <FaUserClock />
        <span>Waiting Analysis</span>
      </Link>
    </div>
    <div className="card737-go">
      <Link to="/RoutineRemainder">
        <TbReport />
        <span className='span-go'>Routine Reminder Report</span>
      </Link>
    </div>
    </div>
   



  </div>
  <hr></hr>


{/* 
    <div>

       <p><strong>Communication</strong></p>
    
    </div>
    <div className="card-container737-go">
    <div className="card737-go">
      <Link to="/heading/1">
        <MdManageAccounts />
        <span>Email Analysis</span>
      </Link>
    </div>
    <div className="card737-go">
      <Link to="/heading/2">
        <ImUsers />
        <span>Transactional Sms</span>
      </Link>
    </div>
    <div className="card737-go">
      <Link to="/heading/3">
        <FaHospitalUser />
        <span>Promotional Sms</span>
      </Link>
    </div>
    <div className="card737-go">
    <Link to="/heading/3">
      <FaHospitalUser />
      <span>Whatsapp Sms Report</span>
    </Link>
  </div>
  <div className="card737-go">
  <Link to="/heading/3">
    <FaHospitalUser />
    <span>Birthday Report</span>
  </Link>
</div>  <div className="card737-go">
<Link to="/heading/3">
  <FaHospitalUser />
  <span>Patient Followup Analysis</span>
</Link>
</div>
    </div> */}




    </div>
<div>
<h3><span>LabNetwork</span></h3>
    <div className="card737-go">
    <Link to="/LabworkReport">
      <TbReportMedical />
      <span>Labwork Report</span>
    </Link>
  
</div>
</div>

    </div>
    </>
  );
}





export default AReport;