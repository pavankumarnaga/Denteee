// navBar.js


import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { TbDentalBroken } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";   
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdLocalGroceryStore} from "react-icons/md";
import {FaPlusSquare } from "react-icons/fa";  
import {AiOutlineUserSwitch } from "react-icons/ai";   
import {  BiEdit } from "react-icons/bi";   
import { FaCcDiscover } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };
    
    
    return (
    <>

    
      <div className="navbar-doctor-95">
        <div className="left-page-91">
          <div className="logo45">
          {/* <Link to="/" className="doc-link-nav">
              {" "} */}
             <TbDentalBroken className="icon1234567"/>DENTEE
            {/* </Link> */}
          </div>
          <input type="text" placeholder="Search" className="search-bar-doc-86" />



            <div className="nav2345">
          <div className="icon-dropdown" onClick={toggleDropdown}>
             
             
              <MdLocalHospital className="icon-size2346" />
              <h3>Matrical</h3>
              {isDropdownOpen && (
                <div className="dropdown-content-13">
                  <a className='abc-cont' onClick={() => handleOptionSelect("Option 1")}><FaPlusSquare/>Matrical clinic </a>
                   <a className='abc-cont' onClick={() => handleOptionSelect("Option 2")}>Add More Clinic</a>

                </div>
              )}
            </div>  

            </div>



{/* <div className="ipog">
            <div className="nav-item1">
            <div className="icon-dropdown" onClick={toggleDropdown}>
             <span> <FaUser className="icon-size234" /></span>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a onClick={() => handleOptionSelect("Option 1")}><FaCcDiscover/> Discover</a>
                  <a onClick={() => handleOptionSelect("Option 2")}><MdManageAccounts/> Management</a>
                  <a onClick={() => handleOptionSelect("Option 3")}><MdOutlineCastForEducation/> Educate</a>
                  <a onClick={() => handleOptionSelect("Option 4")}><MdLocalGroceryStore/>Buy</a>
                </div>
              )}
            </div>
          </div> */}
          

           
          
          
           <div className="nav-item2">
            <div className="icon-dropdown" onClick={toggleDropdown}>
            <div className="name574">
             <span> <AiOutlineUserSwitch className="icon-size2345" /></span>
             <h3 className="nare18">Dr.Matrical</h3>
             </div>
              {isDropdownOpen && (
                <div className="dropdown-content-14">
                  {/* <a className='abc-cont' onClick={() => handleOptionSelect("Option 1")}><BiEdit/>Switch Clinic </a> */}
                  {/* <a className='abc-cont' onClick={() => handleOptionSelect("Option 2")}><BiEdit/>Switch Product </a> */}
                  <a className='abc-cont' onClick={() => handleOptionSelect("Option 3")}><BiEdit/>Change password </a>
                  <a className='abc-cont' onClick={() => handleOptionSelect("Option 4")}> <Link to='/EditProfile'><BiEdit/>Edit Profile</Link></a>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
        
        
      {/* </div> */}
    </>
  );
};

export default Navbar;