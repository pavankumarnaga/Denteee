import React from 'react'
import {FiLink} from 'react-icons/fi';
import './Manageform.css';  
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


const Form = () => {
  return (
    <>  
    {/* <Navbar/>
    <Sidebar/> */}
    <div className='Formdf'>
    <div  className='formds'>
      <div className='Clinic-ydf'>
      <div className='Clinic-Clinicdf'>
        <div className='Clinic-Rowdf'>
            <div className='Clinic-Patientdf'>
              <div className='Clinic-Rowdf'>
                <div className='Clinic-qdf'>
                  <FiLink/>
                </div>
                <div className='Clinic-wdf'>
                  <input className='Clinic-inputsdf' type="text" placeholder=' KarthikCI-2906'/>
               
                </div>
              </div>
            </div>
            <div className='Clinic-Updatedf'>
                <button className='Clinic-Button2df'>Update Clinic Patient Potral</button>
            </div>
        </div>
        <div className='Clinic-Textdf'>
            Clinic's Patient potral URL:
        </div>
        <div className='Clinic-Text1df'>
            htpps://www.dentee.com/patientpotral/PavanCI-2960
        </div>

        
      </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Form