import React from 'react'
import { Link } from 'react-router-dom'
import'./Import.css'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Export = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='main-50023'>
      <div className='sidebyside-500 side1-500'>
<div className='sidebyside1-500 links222-500 '>
  <a className='links-500 ' href='Import'>Import</a></div>
<div className='sidebyside1-500 links11-500'>
  <a className='link-500 links111-500' href='Export'>Export</a></div>
</div>
<div></div>
<div className='onebyone-500'>
     <div><h2 className='h2style-500' style={{display:'inline-block'}}>
        <b>Export all your Dentee Account data to Excel </b></h2>&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <Link to='/Table'><a className='link-45'>View Export Data Request</a></Link></div> 
      <div className='lastdiv-500'>
      
        <button className='exback1-500'>Request data Export</button>
        <Link to='/Import'>
        <button className='exback2-500 '>Back</button>
        </Link>
        
        <br/>
        <p className='para-500'>Note :- After making a request you will receive an email with link for downloading backup file within 2-3 Working days.</p>
      </div>
      </div>
      
    </div>
    </>

  )
}

export default Export