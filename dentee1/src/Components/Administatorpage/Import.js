import React from 'react'
import { Link } from 'react-router-dom';
import './Import.css'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Import = () => {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='maincont-5001'>
    {/* <div className='maincont-500'> */}
<div className='sidebyside-500'>
<div className='sidebyside1-500 links11-500'>
  <a className='links-500 links111-500' href='Import'>Import</a></div>
<div className='sidebyside1-500 links222-500'>
  <a className='links-500 links12-500 ' href='Export'>Export</a></div>
</div>
     <div className='onebyone-500'>
      <h2 className='h2style-500'><b>Import your Patient data from your previous software or excel </b></h2>
      <div>
        <h3 className='h2style-500' >
          1. Upload your file here
        </h3>
        
        <p className='para-500'>Download format file. <a className='links1-500' href='xyz'>Download</a>
        <br/>OR<br/>
        Provide data in (.xlsx)</p><br/>
        <div className='para-500 selectfile-500'>
          <div className='abc-500'>
        <label htmlFor="fileInput">SELECT FILES...</label>
<input
  type="file"
  id="fileInput"
  name="fileInput"
  accept=".jpg, .jpeg, .png, .pdf" // Specify the file types you want to accept
  style={{ display: 'none' }} // Hide the input element
/>
</div>
        </div>
      </div>
      <div>
      <h3 className='h2style-500' >
          2. Any your Suggestions  ?
        </h3>
      </div>
      <div>
        <textarea className='para-500 mno-500' placeholder='Description'></textarea>
      </div>
      <div className='lastdiv-500'>
      <Link to='/Administator'><button className='backbtn-500'>Back</button></Link>&nbsp;&nbsp;
        <button className='sendreq-500'>Send Request to Import</button>
      </div>
      </div> 
      {/* </div> */}
      </div>
      </>
  )
}

export default Import