import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


// import ToggleButton from 'react-toggle-button'
import "./Appointment-header.css"
import denteelogo from "./Images/denteelogo.png";
import { AiOutlineFullscreen,AiFillPrinter } from "react-icons/ai";
import { FaQuestionCircle, FaRegLightbulb, FaUserTie } from "react-icons/fa";
import { BiLogoWhatsapp, BiCaretDownSquare } from "react-icons/bi";
import { PiChatsDuotone } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { FaPencil, FaMobileRetro } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { LuMailPlus } from "react-icons/lu";
import { TbDentalBroken } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6"; 
import { GrLocal } from "react-icons/gr";
import Popup from 'reactjs-popup';

import Profile_11 from './Profile/App';
import Prescription_22 from './Prescriptionhome'
import Files_11 from './Files/App'
import Bills_22 from './Bills/App'
import Appointment_22 from './Appointment/Appointment-Page'
import Treatment_33 from './Treatment/App'
import PatientNotes_22 from './PatientNotes'
import { BsArrowsMove } from 'react-icons/bs';


const Appointment_header = () => {

 

  // const [patientData, setPatientData] = useState(null);

  const { patientId } = useParams();
  const [selectedPatient, setSelectedPatient] = useState(null);


  const [patients, setPatients] = useState(null);

  const [isFullscreen, setIsFullscreen] = useState(false);

    const inputRef = useRef(null);

    const handleImageClick = () =>{
      inputRef.current.click();
    }



    const handlePatientClick = (id) => {
      setSelectedPatient(id);
    };

    useEffect(() => {
      if (patientId) {
        const apiUrl = `http://localhost:5002/Addpatient/${patientId}`;
        axios
          .get(apiUrl)
          .then((response) => {
            setSelectedPatient(response.data);
          })
          .catch((error) => {
            console.error('Error fetching patient data:', error);
          });
      }
    }, [patientId]);
   


  

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

// -----------------------------------
 const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

    

      return (
    <div>
        <div className='ntr-appo-total'>
            <div className='ntr-dentee'>
      <Link className='link455' to='/Administator'>   <div style={{ color: '#007bff' }} className="logo4557">
       
                           DENTEE 

          </div></Link>
              <button className="ntr-screen-adjust" onClick={toggleFullscreen}>
                <BsArrowsMove style={{ color: 'black' }} className="ntr-screen-adjust-1" />
              </button>
            </div>
            <div className='ntr-appo-headpart'>
              <div className='ntr-left-upload'
              //  onClick={handleImageClick}
                 >
              <div>

              <button className='ntr-img-upload'>
      {selectedPatient && selectedPatient.imagePath && (
        <img src={`http://localhost:5002/${selectedPatient.imagePath}`} alt={`Patient ${selectedPatient.firstName} ${selectedPatient.lastName}`} className="patient-image775557" />
      )}
    </button>
    </div>
                {/* <button className='ntr-img-upload'>            
                <img src={`http://localhost:5002/${selectedPatient.imagePath}`} alt={`Patient ${selectedPatient.firstName} ${selectedPatient.lastName}`} className="patient-image775557" />
              </button></div> */}
              {/* <input type='file'  ref={inputRef} className='ntr-img-upload-1' placeholder='upload'> */}

                {/* </input>  */}

              </div>
              <div className='ntr-patient-de'>
             


{selectedPatient && (
  
          <table>
            <thead className="ntr-patient-de-1">
              <tr>
                <th className="ntr-patient-de-head">
                  <FaUserTie /> {selectedPatient.firstName} {selectedPatient.lastName}
                </th>
              </tr>
            </thead>
            <tr className="ntr-table-data" key={selectedPatient._id}>
              <td>
                <BsFillPeopleFill className="ntr-patient-gender" /> {selectedPatient.gender}
              </td>
              <td>
                <FaUserTie className="ntr-patient-age" /> {selectedPatient.age}
              </td>
            </tr>
            <tr className="ntr-table-data-1" key={selectedPatient._id}>
              <td>
                <FaMobileRetro className="ntr-patient-mno" /> {selectedPatient.phoneNumber}
              </td>
              <td>
                <LuMailPlus className="ntr-patient-mail" /> {selectedPatient.email}
              </td>
              
            </tr>
            <tr>
              <td>
              <FaUserTie  className="ntr-patient-mail" /> {selectedPatient.customerId}
              </td>
              <td>
              <Link to='/Manageclinicone'> <p  className="ntr-portal-acc">Patient Portal Access</p></Link> 

              </td>
              </tr>
          </table>
        )}



                 {/* <div className='ntr-portal-new'>
                <Link to='/Manageclinicone'> <p  className="ntr-portal-acc">Patient Portal Access</p></Link> 

                  <Link to='/Treatment' >  <button className='ntr-portal-btn'>23456</button> </Link>
                 </div> */}
              </div>
             
              <div className='ntr-patient-contact'>
                <div className='ntr-patient-contact-1'>

{/* ----------------------- Whatsapp Popup-----------------------------------              */}


                <Popup trigger=
                {<button className='ntr-wtsapp'>

<ReactWhatsapp number="+91" class="btn btn-outline-primary" message="">Whatsapp</ReactWhatsapp>
                  <BiLogoWhatsapp className='ntr-wtsapp-icon'/>Whatsapp</button>} 
                modal nested>
                {   
                    close => (
                        <div className='ntr-modal-whatsapp'>
                            <div className='ntr-modal-whatsapp-head'>
                                <span className='ntr-whatsapp-1'> Whatsapp Message</span> 
                                <button className='ntr-whatsapp-2' onClick=
                                    {() => close()}>
                                        <IoCloseSharp/>
                                </button>
                            </div>
                            <div>
                              <p className='ntr-whatsapp-pano' >Patient Mobile Number</p>
                              <input className='ntr-whatspp-pano-1' type='mobile'></input>
                              <p className='ntr-whatsapp-message' >Message</p>
                              <div className='ntr-whatspp-message-2' ><input className='ntr-whatspp-message-1' type='textarea' placeholder='Type any message'></input></div>
                              <button className='ntr-whatsapp-mesend'>Send</button>
                            </div>
                        </div>
                    )
                }
                </Popup>  
{/* -------------------------------SMS popup-------------------------------------------/ */}

                <Popup trigger=
                { <button className='ntr-sms'><PiChatsDuotone className='ntr-sms-icon'/> Sms</button>} 
                modal nested>
                  {   
                    close => (
                        <div className='ntr-modal-sms'>
                            <div className='ntr-modal-sms-head'>
                              <p className='ntr-sms-text'> SMS</p>
                              <div className='ntr-sms-1'>
                                <span className='ntr-sms-3'>50</span>
                                <p className='ntr-sms-2'>Total Available SMS</p>
                              </div>
                              <div  className='ntrsms-5'>
                                <span className='ntr-sms-7'>0</span>
                                <p className='ntr-sms-6'>Use SMS</p>
                              </div>
                              <div className='ntr sms-10'>
                                <span className='ntr-sms-12'>50</span>
                                <p className='ntr-sms-11'>Balance SMS</p>
                              </div>
                                <button className='ntr-sms-15' onClick=
                                    {() => close()}>
                                        <IoCloseSharp/>
                                </button>
                            </div>
                            <div className='ntr-sms-body'>
                               <span className='ntr-sms-b-1'> Characters :</span>
                               <span className='ntr-sms-b-2'> 0</span>
                               <span className='ntr-sms-b-3'>Message Count:</span>
                               <span className='ntr-sms-b-4'>0</span>
                            </div>
                            <div className='ntr-sms-body-1'>
                              <span>Text</span>
                              <div  className='ntr-sms-b-5'>
                              <input className='ntr-sms-b-6' type='textarea' placeholder='Type any message'></input>
                              </div>
                            </div>
                            <button className='ntr-sms-mesend'>Send</button>
                        </div>
                    )
                }

                </Popup>


{/* -----------------------------------mail popup------------------------------------- ----------      */}

               {/* <Popup trigger=
                { <button className='ntr-mail'><FiMail className='ntr-mail-icon'/> Mail</button>} 
                modal nested>
                  {   
                     close => (
                      <div className='ntr-modal-mail'>
                          <div className='ntr-modal-mail-head'>
                              <span className='ntr-mail-1'> Email</span> 
                              <button className='ntr-mail-2' onClick=
                                  {() => close()}>
                                      <IoCloseSharp/>
                              </button>
                          </div>
                          
                      </div>
                  )
              }
              </Popup>   */}
 
                </div>

    {/* ---------------------------- Printsummarypopup--------------------------------- */}
                <Popup trigger=
                {<div className='ntr-print'>
                <button><div className='ntr-print-1'><AiFillPrinter className='ntr-print-icon'/></div></button>
                <button><div className='ntr-print-2'>Patient Summary</div></button>
             </div>} 
                modal nested>
                  {   
                     close => (
                      <div className='ntr-modal-patientsummary'>
                          <div className='ntr-modal-ps-head'>
                              <span className='ntr-ps-1'>Please select print summary options</span>
                              <button className='ntr-ps-2' onClick=
                                  {() => close()}>
                                      <IoCloseSharp/>
                              </button>
                          </div>
                          <div className='ntr-ps-date-select'>
                           <span className='ntr-ps-date-text'> Select Date:</span>
                           <input className='ntr-ps-date-from' type='date'></input>
                           <span className='ntr-ps-date-text-1'>date:</span>
                           <input className='ntr-ps-date-to' type='date'></input>
                          </div>
                          <div className='ntr-ps-fil-select'>
                            <div className='ntr-ps-fil-select-1'>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Contact details</span>
                                </div>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Medical Alarts</span>
                                </div>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Examination details</span>
                                </div>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Examination dental chart</span>
                                </div>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Treatment Details</span>
                                </div>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Prescription Details</span>
                                </div>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Passbook Details</span>
                                </div>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Appointment Details</span>
                                </div>
                            </div>
                            <div className='ntr-ps-fil-select-2'>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Investigation</span>
                                </div>
                                <div>
                                  <input className='ntr-ps-cb' type='checkbox'></input>
                                  <span className='ntr-ps-cb-text' >Patient Notes</span>
                                </div>
                            </div>
                          </div>
                          <div className='ntr-ps-submit'>
                            <button className='ntr-ps-email'>Email</button>
                            <button className='ntr-ps-printp'>PrintView</button>
                            <button className='ntr-ps-print'>Print</button>
                          </div>
                      </div>
                  )
              }
              </Popup> 

 {/* ---------------------------- Add Investigation popup--------------------------------- */}
              <Popup trigger=
                {<div className='ntr-addinvest'>
                <button><div className='ntr-addinvest-1'><CgNotes className='ntr-addinvest-icon'/></div></button>
                <button><div className='ntr-addinvest-2'>Add Investigation</div></button>
             </div>} 
                modal nested>
                  {   
                     close => (
                      <div className='ntr-modal-addinvestigation'>
                          <div className='ntr-modal-addin-head'>
                              <span className='ntr-addin-1'>Investigation</span> 
                              <button className='ntr-addin-2' onClick=
                                  {() => close()}>
                                      <IoCloseSharp/>
                              </button>
                          </div>
                          <div className='ntr-addin-date-sele'>
                           <div className='ntr-addin-text-1' ><span className='ntr-addin-text'>Investigation Date:</span></div>
                           <div> <input className='ntr-addin-date' type='date'></input></div>
                          </div>
                          <div className='ntr-addin-body'>
                            <div className='ntr-addin-body-1'>Investigation Attributes</div>
                            <div className='ntr-addin-attri'>
                              <div className='ntr-addin-attri-1'>
                                 <div className='ntr-addin-leftatt-1'>
                                    <span> Temparature:</span>
                                    <input className='ntr-addin-temp' placeholder='Temparature'></input>
                                 </div>
                                 <div  className='ntr-addin-leftatt-2'>
                                    <span> Blood Pressure:</span>
                                    <input className='ntr-addin-bp' placeholder='Blood Pressure'></input>
                                 </div>
                                 <div className='ntr-addin-leftatt-3'>
                                    <span> Blood Sugar:</span>
                                    <input className='ntr-addin-bs' placeholder='Blood Sugar'></input>
                                 </div>
                                 
                              </div>
                              <div className='ntr-addin-attri-2'>
                                  <div className='ntr-addin-right-1'>
                                    <span> Weight:</span>
                                    <input className='ntr-addin-weight' placeholder='Weight'></input>
                                  </div>
                                  <div className='ntr-addin-right-2'>
                                    <span> Oxygen Saturation:</span>
                                    <input className='ntr-addin-oxs' placeholder='Oxygen Saturation'></input>
                                  </div>
                              </div>
                            </div>
                            <div>
                              <button className='ntr-addin-saveinvest'>Save Investigation</button>
                            </div>
                          </div>  
                      </div>
                  )
              }
              </Popup>

                <div className='ntr-covid-20'>

{/* -----------------------------------covid19-consent-popupp----------------------------------- */}
                <Popup trigger=
                {<div className='ntr-covid19'>
                <button><div className='ntr-covid19-1'><PiChatsDuotone className='ntr-covid19-icon'/></div></button> 
                <button><div className='ntr-covid19-2'>Covid-19 Consent</div></button> 
               </div>} 
                modal nested>
                  {   
                     close => (
                      <div className='ntr-modal-c19-consent'>
                          <div className='ntr-modal-c19-c-head'>
                              <span className='ntr-c19-c-1'> Confirm</span> 
                              <button className='ntr-c19-c-2' onClick=
                                  {() => close()}>
                                      <IoCloseSharp/>
                              </button>
                          </div>
                          <div className='ntr-c19-c-text'>
                            <span>Are you sure you want to send covid-19 </span>
                            <span> consent SMS/Whatsapp</span>
                          </div>
                          <div className='ntr-c19-c-confirm'>
                             <button className='ntr-c19-c-yes'>Yes</button>
                             <button className='ntr-c19-c-no'>No</button>
                          </div>
                          
                      </div>
                  )
              }
              </Popup>
                 <div className='ntr-covid-20-2'><button className='ntr-covid-20-3'>View</button></div>
                </div>
              </div>
              <div className='ntr-patient-sum'>
                <p className='ntr-patient-sum-15'> Treatment Cost: INR <span>0.00</span> {''}| {''} Paid: INR <span>0.00</span>  {''}|{''} Balance: INR <span>0.00</span></p>
                <p  className='ntr-patient-sum-22'> Billed: INR <span>0.00</span> {''}| {''} Billed Balance: INR <span>0.00</span></p>
                <div className='ntr-patient-tips-20'>
                <div><input type='date' className='ntr-date-123'></input></div>
                 {/* <div className='ntr-patient-tips-19'> 
                   <button><div className='ntr-patient-tips-1-1'><FaRegLightbulb className='ntr-patient-tips-1-icon'/></div></button>
                   <button><div className='ntr-patient-tips-1-2'>Page Tips</div></button>
                 </div> */}
                </div>
                <div className='ntr-patient-notes' onClick={() => handleButtonClick('PatientNotes_1')}>
                <button><div className='ntr-patient-notes-1'><FaPencil className='ntr-patient-notes-icon'/></div></button>
                   <button><div className='ntr-patient-notes-2'>Page Tips</div></button>
                </div>
              </div>
            </div>
            <div className='ntr-appo-selection'>

            </div>

{/* ------------------------------------Filed selection bar------------------------------------------- */}
            <div className='ntr-appo-selectionbar'>
               <div className='ntr-nav-btns'>
               <button className='ntr-appo-profile' onClick={() => handleButtonClick('Profile_1')}>Profile</button>
               {/* <button className='ntr-appo-profile' onClick={() => handleButtonClick('Examination_1')}>Examination</button> */}
               <button className='ntr-appo-profile' onClick={() => handleButtonClick('Treatment_1')}>Treatment</button>
               <button className='ntr-appo-profile' onClick={() => handleButtonClick('Prescriptionhome_1')}>Prescription</button>
               <button className='ntr-appo-profile' onClick={() => handleButtonClick('Files_1')}>Files</button>
               <button className='ntr-appo-profile' onClick={() => handleButtonClick('Billing_1')}>Billing</button>
               <button className='ntr-appo-profile' onClick={() => handleButtonClick('Appointment_1')}>Appointment</button>
               {/* <Popup trigger={
                <button className='ntr-appo-profile'><BiCaretDownSquare className='ntr-other-popup-contents-pop'/></button>
                  }  position={'left top'}>
                  <div className='ntr-other-popup-contents'>
                   <div className='ntr-other-popup-contents-s1'><span>View Appointment</span></div>
                   <span>Patient Follow-Up Reminder</span>
                   <span>Communication Details</span>
                   <span>Labdetails</span>
                   <span>Print On Behalf Consent Form</span>
                   <span>Print Self Consent Form</span>
                   <span>Print IDA Consent Form</span>
                   <span>Request Consent Form</span>
                   <span>Patient Notes</span>
                 </div>
               </Popup>
               <Popup trigger={<button className='ntr-appo-profile'><FaPlus className='ntr-other-popup-contents-1-pop'/></button>} 
               position={'left top'}>
                 <div className='ntr-other-popup-contents-1'>
                   <span>Add Examination</span>
                   <span>Add Treatment</span>
                   <span>Add Prescription</span>
                   <span>Generate Bill</span>
                   <span>Add Payment</span>
                   <span>Refund Against Advance</span>
                   <span>Refund Against Bill</span>
                 </div> 
               </Popup>
                */}
               </div>
               <div className="ntr-sectionContainer">
               {activeSection === 'Profile_1' && <Profile_11 />}
               {/* {activeSection === 'Examination_1' && <Prescription_22/>} */}
               {activeSection === 'Treatment_1' && <Treatment_33 />}
               {activeSection === 'Prescriptionhome_1' && <Prescription_22/>}
               {activeSection === 'Files_1' && <Files_11 />}
               {activeSection === 'Billing_1' && <Bills_22 />}
               {activeSection === 'Appointment_1' && <Appointment_22 />}
               {activeSection === 'PatientNotes_1' && <PatientNotes_22 />}
               </div>
            </div>
        </div>
    </div>
 );
};

export default Appointment_header