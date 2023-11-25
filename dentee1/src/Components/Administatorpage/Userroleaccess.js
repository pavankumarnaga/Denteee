import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { IoSettings } from 'react-icons/io5';
import { BiEdit} from 'react-icons/bi';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import'./Userroleaccess.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

class Administrator extends React.Component {

    render(){
        return(
            <>  
            <Navbar/>
            <Sidebar/>
            <div className='useroleed'>
                {/* <div className='Admin-head'> */}
                    {/* <div className='Admin-Column'> */}
                        
        <div className='Admin-icon1'>
        <Link to='/Administator'> <AiOutlineArrowLeft className='Admin-icon2'/></Link>
            <div className='Admin-text1'>Administrator / User Role Access </div>
        </div>
                       
                    {/* </div> */}
                {/* </div>  */}
                <div className='Admin-Row'>
                    <div className='Admin-body'>
                        <select class="Admin-Dropdown" id="Dropdown" name="Selecttype">
                            <option value="All">All</option>
                            <option value="Staff">Staff</option>
                            <option value="Administrator">Administrator</option>
                            <option value="Support">Support</option>
                            <option value="Accounts">Accounts</option>
                            <option value="Doctor">Doctor</option>
                        </select>
                    </div> 
                    <div className='Admin-search'>
                        <input className='Admin-search1' type="text" placeholder='Search'/>
                    </div>  
                    <div className='Admin-icon5'>
                        <button className='Admin-icon3'><BsSearch className='Admin-icon4'/></button>
                    </div>
                </div>
                <div className='Admin-table1'>
                    <div className='Admin-Row'>
                        <div className='Admin-text3'>
                            Raju
                        </div>
                        <div className='Admin-text4'>
                            Administrator
                        </div>
                        <div className='Admin-text5'>
                            9099577677
                        </div>
                        <div className='Admin-text13'>
                            <button className='Admin-button7'>Active</button>
                        </div>
                        <div className='Admin-text8'>
                            <button className='Admin-button9'>C</button>
                        </div>
                        <div className='Admin-text9'>
                            <Popup trigger={<button className='Admin-button6'><IoSettings className='React-icons123'/></button>}
                                position="bottom left">
                                    <div> 
                                        <div className=' Admin-Popup'>
                                            <div className='Admin-Row'>
                                                <div className='React-icon7'>

                                                   <Link to="/Userroleaccesspage">  <BiEdit className='icon9'/></Link>
                                                </div>
                                                <div className='React-text'>
                                                    <Link to="/Userroleaccesspage"><button className='Qw'>Edit Access</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            </Popup>
                        </div>
                    </div>
                </div>
                <div className='Admin-table2'>
                    <div className='Admin-Row'>
                        <div className='Admin-text10'>
                            Karthik
                        </div>
                        <div className='Admin-text11'>
                            Administrator
                        </div>
                        <div className='Admin-text12'>
                            7098654543
                        </div>
                        <div className='Admin-text13'>
                            <button className='Admin-button7'>Active</button>
                        </div>
                        <div className='Admin-text14'>
                            <button className='Admin-button8'>P</button>
                        </div>
                        <div className='Admin-text15'>
                            <button className='Admin-button9'>C</button>
                        </div>
                        <div className='Admin-text16'>
                            <button className='Admin-button10'>A</button>
                        </div>
                        <div className='Admin-text17'>
                            <button className='Admin-button11'>Primary Admin</button>
                        </div>
                    </div>
                </div>
                    
            </div>
            </>
        )
    }
}
export default Administrator;