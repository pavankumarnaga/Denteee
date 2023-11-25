import React from 'react'
import './Patributes.css';
import Popup from 'reactjs-popup';
import { AiOutlineCheckCircle} from 'react-icons/ai';


const Rersonal = () => {
  return (
    <div className='Formsq3'>
        
            <div className='personal-main'>
                <div className='personal-column'>
                    <div className='personal-row'>
                        <div className='personal-name1'>
                            <label for="psw">Company Name</label><br></br>
                            <input className='Personal-name2' type="text" placeholder="Company Name" name="" required></input>
                        </div>
                        <div className='personal-date1'>
                            <label for="psw">Date of Anniversary</label><br></br>
                            <input className='personal-date2' type="text" placeholder="Date of Anniversary" name="" required></input>
                        </div>
                        <div className='personal-school1'>
                            <label for="psw">School Name</label><br></br>
                            <input className='personal-school2' type="text" placeholder="School Name" name="" required></input>
                        </div>
                    </div>
                    <div className='personal-row'>
                        <div className='personal-tags1'>
                            <label for="tags">Tags </label><br></br>
                            <input className='personal-tags2' type="text" placeholder="Tags" name="" required></input>
                        </div>
                        <div className='personal-spouse1'>
                            <label for="spouse">Spouse Name</label><br></br>
                            <input className='personal-spouse2' type="text" placeholder="Spouse Name" name="" required></input>
                        </div>
                    </div>
                    <div className='personal-button6'>
                        <Popup trigger=
                            { <button className='personal-button7'  >
                            Save
                        </button>}
                            position='top'>
                                <div>
                                    <div className='color'>
                                        <div className='personal-row'>
                                            <div className='personal-icon10'>
                                                <AiOutlineCheckCircle className='personal-icon0'/>
                                            </div>
                                            <div className='personal-success'>
                                                Saved Successfully
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Popup>
                       
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Rersonal