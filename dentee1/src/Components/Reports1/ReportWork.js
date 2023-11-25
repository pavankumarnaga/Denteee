import React from 'react'
import "./Report.css";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
{/* <Report></Report>.css'; */}
// import { AiOutlineArrowLeft } from "react-icons/ai";


const Reportwork = () => {
    return (
        <>  
        <Navbar/>
        <Sidebar/>
      <div>
          <div className='new-r-body'>
              <div className='new-r-head'>
                 <Link to='/'><div className='new-r-icon'><AiOutlineArrowLeft/></div></Link>
                 <div className='new-r-acc-1'>Accounts /  Add New Bill</div>
              </div>

            </div>
        </div>
        </>

    )
            }
export default Reportwork;