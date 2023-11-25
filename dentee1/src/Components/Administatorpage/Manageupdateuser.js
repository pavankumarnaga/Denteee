import React from 'react'
import './Manageupdateuser.css'
import {FaUserAlt} from 'react-icons/fa'
// import update from './images/flag.jpg'
import { AiFillCaretDown, AiOutlineArrowLeft } from "react-icons/ai";
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


const Updateuser = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='updatenon'>
        <div className='update-main'>
        <Link to="/Manageuser"><button className='update-button1'><AiOutlineArrowLeft className='update-icon'/></button></Link>
            <div className='update-user'>Administrator / Update User</div>
        </div>
        <div className='update-box'>
            <div className='update-text-1'>User Details</div>
        <div className='update-row'>
            <div className='update-box1'>
                <div className='update-row'>
                    <FaUserAlt  className='update-icon1'/>
                    <input type='text' placeholder='dff@dfd' className='update-input'></input>
                </div>
            </div>
            <div className='update-box2'>
                <div className='update-row'>
                    {/* <img src={update}className='update-image'/> */}
                    <div className='update-text-2'>+91</div>
                    <div className='update-icon2'><AiFillCaretDown className='update-icon3'/></div>
                </div>
            </div>
            <div className='update-box3'>
                <input type='text' placeholder='23345452242' className='update-input1'></input>
            </div>
        </div>
        <div className='update-row'>
                <div className='update-box4'>
                    <div className='update-row'>
                        <FaUserAlt  className='update-icon1'/>
                        <input type='text' placeholder='wewe' className='update-input'></input>
                    </div>
                </div>
                <select className='update-select'>
                <option>Select Role</option>
                <option>accounts</option>
                <option>administrator</option>
                <option>staff</option>
                <option>Support</option>
            </select>
        </div>
        <div className='update-line'></div>
            <div className='update-text-3'>User authorized</div>
            <div className='update-row'>
                <input type='checkbox' className='update-input2' />
                <div className='update-text-4'>Is user authorized in clinic (Used in validate access code.)</div>
            </div>
        <div className='update-line'></div> 
        <Popup trigger=
            {<button className='update-active'>Active</button>}
            position='bottom left'>
                <div className='update-popupbox'>
                    <input type='text' placeholder='Active / De-Active Reason' className='update-input3'></input>
                </div>
        </Popup>
            <div className='update-lastbox'>
                <button className='update-save'>Update</button>
                <button className='update-cancel'>Cancel</button>
            </div>  
        </div>    
    </div>
    </>
  )
}

export default Updateuser