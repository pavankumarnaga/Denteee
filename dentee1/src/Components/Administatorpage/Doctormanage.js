import React from 'react';
import { AiOutlineArrowLeft} from "react-icons/ai";
import { BiEdit} from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { BiSearch} from "react-icons/bi";
import { IoMdSettings} from "react-icons/io";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Doctormanage.css';
import Popup from 'reactjs-popup';

const Manage = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='doctordss'>
        {/* <div className='manage-backarrow'>
            <Link to='/Administator'></Link>
        < AiOutlineArrowLeft/>Administrator/ManageDoctor
        </div> */}
        
 <div className='main-head-manage'>
        <div className='mainhead-icon-manage'><Link to='/Administator'><AiOutlineArrowLeft/></Link></div>
        <div className='main-heading-manage'>Administrator/ManageDoctor</div>
       </div>
        <div className='manage-searchbar'>
            {/* <input type='text' placeholder='search' className='manage-input'></input> 
            <div className='mangage-searchicon'>
            <FaSearch className='manage-icon'/>
            </div> */}
             <div className='search-container-manage'>
    <input className='search-bar-manage' type='text' placeholder='Search'/>
    <button className='search-btn-manage'><BiSearch/></button>
    </div>
            <Link to="/Doctormanagepage">
            <button className='manage-addbutton'>AddNewDoctor</button>
            </Link>
        </div>
<div className='manage-notetext'>
    [Note:you can drag and drop table row for updating doctor sequence.]</div>
    <div className='manage-content'>
        <div  className='manage-name'>Abhi</div>
        <div  className='manage-mail'>Abhi157@gmail.com</div>
        <div className='manage-number'>+91</div>
        <div  className='manage-ph'>7011001146</div>
        <button className='manage-activebtn'> Active</button>
        <button className='manage-pbtn'>P</button>
        <button className='manage-cbtn'>C</button>
        <button className='manage-abtn'>A</button>
        <button className='manage-outbtn'>OUT</button>
        <div className=' manage-column'>
            <button className='manage-adminbtn'>Primary Admin</button> 
            <Popup trigger=
                {<button className='Admin-popup'><IoMdSettings className='manage-settingicons'/></button>}
                position="bottom right">
                <div>
                    <div className='Row'>
                        <div className='icon0'>
                            <BiEdit className='icon01'/>
                        </div>
                        
                        <div className='text123'>
                         <Link to='/Doctormanagepage'> 
                          EditDoctor
                         </Link>
                           
                        </div>
                    </div>
                </div>
            </Popup>
        </div>        
    </div>
       </div>
       </>
  )
}
export default Manage;