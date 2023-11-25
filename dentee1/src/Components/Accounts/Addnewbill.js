import React from 'react'
import './Addnewbill.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import {BiSearch  } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
import { AiFillFileText } from "react-icons/ai";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Passbook3 = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='maincontnew'>
        <div className='new-y-body'>
            <div className='new-y-head'>
               <div className='new-y-icon'><Link to='/HomePage'><AiOutlineArrowLeft/></Link></div>
               <div className='new-y-acc-1'>Accounts /  Add New Bill</div>
            </div>
            <div className='new-y-content'>
                  <div className='new-y-top-contents'>
                      <input className='new-y-date' type='date'/>
                      <div className='new-y-search'>
                            <button className='new-y-button'>< BiSearch/></button>
                            <input className='new-y-ser' type='text'/>
                            
                        </div>
                            <select className='newy-select'>
                                <option>Yogesh v</option>
                                <option></option>
                                <option></option>
                            </select>
                                      
                        </div>
                             <table className='new-y-table-head'>
                                <thead >
                                    <tr>
                                        
                                        <th className='new-y-th'>Treatment Type</th>
                                        <th className='new-y-th' >Tooth</th>
                                        <th className='new-y-th'>Cost</th>
                                        <th className='new-y-th'>Discount</th>
                                        <th className='new-y-th'>Total cost</th>
                                        <th className='new-y-th'>Note</th>
                                    </tr>
                                </thead>
                            
                            </table>

                                         <table className='new-y2-table-head'>
                                     <tr>
                                        <div className='treatmenttype'>
                                      <td> <input type='Treatment Type'/></td></div>
                                      <div className='Addtooth'>
                                      <td> AddTooth</td>
                                      </div>
                                      <div className='cost1'>
                                      <td><input type='type'/></td></div>
                                      <div className='cost2'>
                                      <td><input type='type'/></td></div>
                                      <div className='cost3'>
                                      <td><input type='type'/></td></div>

                                      <div className='noticon'><  AiFillFileText style={{fontSize:"40px",color:"lightgreen"}}/></div>
                                      <td></td>
                                      <td></td>

                                  </tr> 
                  </table>


                  </div>
                        <div className='line'></div>
                  

                        <div className='Total'>
                                      <td><input type='type'/> total</td></div>
                                      
                  <button className='saveaddbill'>Save</button>
                  <button className='canceladdbill'>cancel</button>

                 
                
            </div>
        </div>
    </>
  )
}

export default Passbook3;