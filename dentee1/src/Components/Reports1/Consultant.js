import React from 'react'
import './Consult.css'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft,AiOutlineStepBackward,AiOutlineCaretLeft,AiOutlineCaretRight,AiOutlineStepForward} from "react-icons/ai";
import { SiMicrosoftexcel } from 'react-icons/si';
import { GrRefresh } from 'react-icons/gr';
import {Link} from "react-router-dom"
const Consultant = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div>
        <div className='consultant-head'>
        <Link to="/Areport"> <div className='consultant-icon'><AiOutlineArrowLeft/></div></Link>
           <div className='consultant-acc-1'>Report / Consultant Billing Report</div>
        </div>
        <div className='consultant-total'>
           <select className='consultant-select'>
               <option className='op-select'>Today</option>
               <option className='op-select'>Last 7 days</option>
               <option className='op-select'>This Week</option>
               <option className='op-select'>This Month</option>
               <option className='op-select'>This year</option>
               <option className='op-select'>Last Week </option>
               <option className='op-select'>Last Month </option>
               <option className='op-select'>Between</option>
           </select>
           <select className='consultant-select2'>
               <option className='op-select'>view Report</option>
               <option className='op-select'>Graph</option>
               <option className='op-select'>Model</option>
           </select>
           <button className='consultant-button'><SiMicrosoftexcel className='consultant-icon2'/></button>
        </div>
        <input className='consultant-search' placeholder='search'></input>
        <table className='consultant-table'>
        <div className='consultant-body'>
          <thead className='headerclue'>
          <tr className='consultant-1'> 
              <th className='consultant-table-head'>Doctor Name</th>
              <th className='consultant-table-head' >Patient Name</th>
              <th className='consultant-table-head' >Receipt Number</th>
              <th className='consultant-table-head'>Date</th>
              <th className='consultant-table-head'>Amount</th>
          </tr>
          </thead>
          <tr className="consultant-1">
              <td className='td1'>Girish</td>
              <td className='td1'> Sundar</td>
              <td className='td1'>0234</td>
              <td className='td1'>11/09/23</td>
              <td className='td1'>1000</td>
          </tr>
          <tr className="consultant-1">
              <td className='td1'>Girish</td>
              <td className='td1'>Sundar</td>
              <td className='td1'>0234</td>
              <td className='td1'>11/09/23</td>
              <td className='td1'>1000</td>
          </tr>
          <tr className="consultant-1">
              <td className='td1'>Girish</td>
              <td className='td1'>Sundar</td>
              <td className='td1'>0234</td>
              <td className='td1'>11/09/23</td>
              <td className='td1'>1000</td>
          </tr>
        </div>     
        </table>
        <div className='consultant-icon'>
            <AiOutlineStepBackward className='icon-2'/>
            <AiOutlineCaretLeft className='icon-2'/> &nbsp;&nbsp;&nbsp;&nbsp;0
            <AiOutlineCaretRight className='icon-2'/>
            <AiOutlineStepForward className='icon-2' />&nbsp;&nbsp;
            <select className='sf'>
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
                <option value="">40</option>
                <option value="">50</option>
              </select>&nbsp;&nbsp;
              items per page
              <div className='consultant-icon3'>
                 No items to Display &nbsp;&nbsp;<GrRefresh/>
              </div>   
        </div>      
    </div>
    </>
  )
}

export default Consultant