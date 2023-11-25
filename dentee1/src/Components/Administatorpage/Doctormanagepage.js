import {useRef} from 'react';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiFillCaretDown} from "react-icons/ai";
import { AiFillCloseCircle} from "react-icons/ai";
import {IoIosAddCircle } from "react-icons/io";
import {FaUserAlt} from 'react-icons/fa';
import './Doctormanagepage.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


const Patient = () => {

  const [isFormOpen, setIsFormOpen] = useState(true); // Default to open
  const [patientType, setPatientType] = useState(''); // State to track the patient type

  // Function to close the form
  const closeForm = () => {
    setIsFormOpen(false);
  };
  const [signature, setSignature] = useState('');
  const clearSignature = () => {
    setSignature('');
  };
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    event.target.value = null;

    console.log(event.target.files);

    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='adddoctorsfd'>
      {isFormOpen && (

<div>

     {/* <div className='admin-heading'>
            <h2 className='admin-header'>
            <Link to='/Doctormanage'> <AiOutlineArrowLeft className='admin-backicon'/>
             </Link>
              Administrator/Add New Doctor </h2> 
     </div> */}
      <div className='main-head-admin1'>
        <div className='mainhead-icon-admin1'><Link to='/Doctormanage'><AiOutlineArrowLeft/></Link></div>
        <div className='main-heading-admin1'>Administrator/Add New Doctor</div>
       </div>

     <div className='admin-contents'>
             <h2 className='admin-header3'>Doctor Details</h2>
             <div className='admin-contentdisplay'>
             <div className=' admin-row'>
             <div className=' admin-box1'>
             <div className=' admin-row'>
             <div className=' admin-image'>
      
     </div>
     <div className=' admin-number'>
             + 91
     </div>
     <div>
     </div>
     </div>
     </div>
    <div className=' admin-box2'>
     <div className=''>
          <input  className='icon11' type='text' placeholder='Mobile Number'/>
     </div>
    </div>                
     </div>
    <div className=' admin-box3'>
      <div className=' row'>
      <div className='icon5'>        
     <FaUserAlt/>
    </div>
     <div className=' admin-Input'>
         < input type='text' placeholder='name' className='admin-input2'></input>
     </div>
     </div>
     </div>
     <div className='admin-box'>
        <div className='admin-box3'>
        <div className='row'>
        <div className='admin-row'>
    <div className='icon5'>        
        <FaUserAlt/>
    </div>
        < input type='email' placeholder='email' className='admin-input2'></input>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className=' admin-row'>
         <div className=' admin-box3'>
          <div className=' admin-row'>
          <div className='icon5'>        
          <FaUserAlt/>
    </div>
  <div className='admin-Input'>
         < input type='text' placeholder='Reg Num' className='admin-input2'></input>
     </div>
     </div>
    </div>
    <div className='admin-box3'>
          <div className=' admin-row'>
          <div className='icon5'>   
          <FaUserAlt/>
    </div>
    <div className=' admin-Input'>
            <div className=' admin-row'>
            <input type='text' placeholder='Doctor code' className='admin-textcolor'></input>
            <input type='color' placeholder='Doctor code' className='admin-color'></input>
    </div>
    </div>
    </div>
    </div>
    </div>
  
  <div className='admin-checkbox2'>
  <div><input type='checkbox'></input></div>
  <div className='show'>show in appontiment view</div>
  </div>
  <hr></hr>
 <div className='admin-box12'>
         <div className='admin-doctor'>
        <div className='admin-text30'>
        <h2 className='doctorff'>Doctor Signature</h2>
        </div>
         <div className='admin-files'>
         <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <button  className='admin-button30' onClick={handleClick}>Select Files</button>
        </div>
         <div className='admin-signature'>
                    <button className='admin-button31'>Signature</button>
        </div>
        </div>
         <div className='admin-top'>
          <div className='admin-for'>........................................ Upload Signature Image OR Sign On Signature Pad Bellow...............................................</div>
          <input type='text'placeholder=''  className='signature'  value={signature}
          onChange={(e) => setSignature(e.target.value)}></input>
         <button className='admin-onclick' onClick={clearSignature}>Clear SignaturePad</button>
        </div><br></br>
        <hr></hr>
        <div className='admin-middler'>
          <h3 className='admin-timing'>Appotiment Timing</h3>
            <div className='admin-main'>
            <div className='admin-text14' >start<br></br> Time</div>
            <button className='admin-time'>09:00Am</button>
        <div className='admin-end'>end<br></br> Time</div>
            <button className='admin-time2'>09:00Pm</button>
            <div className='admin-row'>
             <div className='select'>
             <select className='admin-select2'>
               <option className='admin-option'>15</option>
               <option className='admin-option'>15</option>
               <option className='admin-option'>15</option>
             </select>
             </div>
            <div className='admin-icons'>
                        <IoIosAddCircle className='admin-icon1'/>
         </div>
        </div>
       </div>
</div>
<div className='admin-box11'>
                <div className='admin-row'>
                <button className='admin-savebtn'>Save</button>
                <button className='admin-cancle' onClick={closeForm}>Close</button>
 </div>
 </div>
 </div>
 </div>
 </div>
     

 )}
    </div>
    </>
  );
};

export default Patient