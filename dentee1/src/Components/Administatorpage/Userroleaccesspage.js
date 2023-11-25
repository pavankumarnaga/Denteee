import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import'./Userroleaccesspage.css'
import { Link } from 'react-router-dom';
class Form extends React.Component {
    render(){
        return(
            <>  
            <Navbar/>
            <Sidebar/>
            <div className='admins                                                                                                              '>
                {/* <div className='Admin-header'>
                    <div className='Admin-row'>
                        <div className='We-icon1'>
                            <AiOutlineArrowLeft className='We-icon2'/>
                        </div>
                        <div className='We-text1'>
                            Administrator / Manage Access
                        </div>
                    </div>
                </div> */}




<div className='main-headupage23'>
       <div className='mainhead-iconupage23'><Link to='/Userroleaccess'><AiOutlineArrowLeft/></Link></div>
       <div className='main-headingupage23'>Report / Patient Documents</div>
      </div>
                <div className='Admin-middle'>
                    <div className='We-text2'>
                        Role
                    </div>
                    <div className='We-text3'>
                        <select class="We-Dropdown" id="Dropdown" name="Selecttype">
                            <option value="Staff">Staff</option>
                            <option value="Administrator">Administrator</option>
                            <option value="Support">Support</option>
                            <option value="Accounts">Accounts</option>
                            <option value="Doctor">Doctor</option>
                        </select>
                    </div>
                    <div className='Access-admin'>
                        Access
                    </div>
                    <div className='Admin-row'>
                        <div className='We-text4'>
                            <input className='fo' type='checkbox'></input>
                        </div>
                        <div className='We-text5'>
                            Clinic Access (Clinic data will be accessible from doctor account,please check only if you want to give access.)
                        </div>
                    </div>
                    <div className='Admin-row'>
                        <div className='Admin-column'>
                            <div className='Admin-row'>
                                <div className='We-form'>
                                <input className='fo' type='checkbox'></input>
                                </div>
                                <div className='We-text8'>
                                    Patient
                                </div>
                            </div>
                            <div className='Admin-row'>
                                <div className='We-form'>
                                <input className='fo' type='checkbox'></input>
                                </div>
                                <div className='We-text8'>
                                    Accounts
                                </div>
                            </div>
                            <div className='Admin-row'>
                                <div className='We-form'>
                                <input className='fo' type='checkbox'></input>
                                </div>
                                <div className='We-text8'>
                                    Inventory
                                </div>
                            </div>
                        </div>
                        <div className='Admin-column'>
                            <div className='Admin-row'>
                                <div className='We-form1'>
                                <input className='fo' type='checkbox'></input>
                                </div>
                                <div className='We-text9'>
                                    Appointments
                                </div>
                            </div>
                            <div className='Admin-row'>
                                <div className='We-form1'>
                                <input  className='fo' type='checkbox'></input>
                                </div>
                                <div className='We-text9'>
                                    Reports
                                </div>
                            </div>
                            <div className='Admin-row'>
                                <div className='We-form1'>
                                <input className='fo' type='checkbox'></input>
                                </div>
                                <div className='We-text9'>
                                    Labwork
                                </div>
                            </div>
                        </div>
                        <div className='Admin-column'>
                            <div className='Admin-row'>
                                <div className='We-form1'>
                                <input className='fo' type='checkbox'></input>
                                </div>
                                <div className='We-text9'>
                                    Message
                                </div>
                            </div>
                            <div className='Admin-row'>
                                <div className='We-form1'>
                                <input className='fo' type='checkbox'></input>
                                </div>
                                <div className='We-text9'>
                                    Administrator
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  
                </div>
                <div className='Admin-Down'>
                    <div className='Admin-row'>
                        <div className='We-button12'>
                            <button className='We-button15'>Update</button>
                        </div>
                        <div className='We-button13'>
                            <Link to='/Userroleaccess'><button className='We-button14'>Cancel</button></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            </>
        )
    }
}
export default Form;