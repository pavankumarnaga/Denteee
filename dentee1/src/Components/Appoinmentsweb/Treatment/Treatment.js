import React, { useEffect, useState } from 'react'
import './Treatment.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiFillCaretDown,AiFillPlusSquare } from "react-icons/ai";
import { BsFillPlusCircleFill, BsFillXCircleFill,BsFillPencilFill } from "react-icons/bs";
import { BiSearch } from 'react-icons/bi';
import { GiNotebook } from 'react-icons/gi';
import Popup from 'reactjs-popup';
// import { useState } from 'react';

const Treatment = () => {
 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNestedPopupOpen, setIsNestedPopupOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState('');

  const changeBackgroundColor = () => {
    // You can change the background color to any valid CSS color
    const newColor = buttonColor === '' ? 'lightgreen' : '';
    setButtonColor(newColor);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  }

  const openNestedPopup = () => {
    setIsNestedPopupOpen(true);
    closePopup(); // Close the previous popup
  }
  const closeNestedPopup = () => {
    setIsNestedPopupOpen(false);
  }


  return (
    <div className='Addtreatment-total-body'> 
        <div className="Add-treatment-head13">
          <div className="Add-treatment-icon13">
            <AiOutlineArrowLeft />
          </div>
          <div className="Add-treatment-heading-13">Add Treatment Plan</div>
        </div>
        <div className='addtreatment-head-contents'>
          <input type='date' className='addtteatment-dateinput'/>
          <form className='addtreatment-headform'>&nbsp;
          <div className='addtreatment-icon-dd'>
            <BiSearch/>
            <select className='addtreatment-form-dd'>
                <option></option>
                <option>All</option>
                <option>Mobile No</option>
                <option>Case No</option>
                <option>Name</option>
            </select>
           <input type='search' className='form-searchtext'/>
            </div>
          </form>
          <select className='Add-treatment_head-dd'>
            <option>Matrical</option>
            <option>Matrical</option>
            <option>Matrical</option>
          </select>
        </div>
        <table className='Add-treatment-table'>
            <thead className='Add-treatment-table-head'>
                <tr className='Add-treatment-table-head-row'>
                    <td>Treatment Type</td>
                    <td>Tooth</td>
                    <td>Cost</td>
                    <td>Discount</td>
                    <td>Total Cost</td>
                    <td>Note</td>
                </tr>
                <tr className='addtreatment-table-data'>
                    <td className='Addtreatment-table-tada-td'>
                       <select className='addtreatment-table-data-dd'>
                            <option>Teeth Whitening</option>
                            <option>Consulation</option>
                            <option>Root Canal Treatment</option>
                            <option>Flouride Treatment</option>
                            <option>Dental Implant</option>
                            <option>Crown </option>
                            <option>Fillings</option>
                            <option>Dentures</option>
                            <option>Vanner</option>
                            <option>Gum Surgery</option>
                            <option>Lingunal Braces</option>
                            <option>Routline Extraction</option>
                            <option>Surgical Extraction </option>
                            <option>Advance Surgical Procedue</option>
                            <option>Pit & Fistures Sealan</option>
                            <option>Post & Core</option>
                            <option>Re-route Canal Treatment </option>
                            <option>Braces </option>
                        </select>
                        {/* ---------------Addtooth-popup---------------- */}
                        <Popup
                        trigger={<p className='Addtreatment-AddTooth' >Add Tooth</p>}

                        position='right center center'  modal nested>
                       {
                        close =>(
                        <div className='Addtooth-popup'>
                         <div className='addtooth-popup-header'>
                          <h5>Show Primary Teeth Structure</h5>
                          {/* ------------------------2nd-toothpopopleftside-radiobtn---------------------- */}
                          <Popup trigger={ <input type='radio'/>}
                              position='bottom center'
                             >       
                       <div className='addtooth-selectprimary-teeth-popup'>  
                       <div className='addtooth-secondpopu-header'>
                       <button onClick={()=>close()}>X</button>
                       <h5>Show Primary Teeth Structure</h5>
                       <input type='radio'/>
                       <h5>Select All Tooth</h5>
                          <input type='radio'/>  
                       </div>
                       <div className='popup-tooths'>
                           &nbsp;&nbsp; <div>Upper Right(1)&nbsp;&nbsp;
                                <div className='upperright-teeths1'>
                        
                                  <button >18</button>&nbsp;
                                  <button>17</button>&nbsp;
                                  <button>16</button>&nbsp;
                                  <button>15</button>&nbsp;
                                  <button>14</button>&nbsp;
                                  <button>13</button>&nbsp;
                                  <button>12</button>&nbsp;
                                  <button>11</button>&nbsp;
                                </div>&nbsp;
                                <div className='upperright-teeths1'>
                                  <button>48</button>&nbsp;
                                  <button>47</button>&nbsp;
                                  <button>46</button>&nbsp;
                                  <button>45</button>&nbsp;
                                  <button>44</button>&nbsp;
                                  <button>43</button>&nbsp;
                                  <button>42</button>&nbsp;
                                  <button>41</button>&nbsp;
                                </div>
                                <p className='lowertext'>Lower Right (4)</p>
                                <vr></vr>
                            </div>
                            <div>Upper Left(1)
                            <div className='upperright-teeths1'>
                                  <button>21</button>&nbsp;
                                  <button>22</button>&nbsp;
                                  <button>23</button>&nbsp;
                                  <button>24</button>&nbsp;
                                  <button>25</button>&nbsp;
                                  <button>26</button>&nbsp;
                                  <button>27</button>&nbsp;
                                  <button>28</button>&nbsp;
                                </div>&nbsp;
                                <div className='upperright-teeths1'>
                                  <button>31</button>&nbsp;
                                  <button>32</button>&nbsp;
                                  <button>33</button>&nbsp;
                                  <button>34</button>&nbsp;
                                  <button>35</button>&nbsp;
                                  <button>36</button>&nbsp;
                                  <button>37</button>&nbsp;
                                  <button>38</button>&nbsp;
                                </div>
                                <p>Lower Left (3)</p>
                            </div>
                         </div>
                         <div className='popup-tooths'>
                           &nbsp;&nbsp; <div>Upper Right(1)&nbsp;&nbsp;
                                <div className='upperright-teeths1'>
                                  <button>1E</button>&nbsp;
                                  <button>1D</button>&nbsp;
                                  <button>1C</button>&nbsp;
                                  <button>1B</button>&nbsp;
                                  <button>1A</button>&nbsp;
                                </div>&nbsp;
                                <div className='upperright-teeths1'>
                                  <button>4E</button>&nbsp;
                                  <button>4D</button>&nbsp;
                                  <button>4C</button>&nbsp;
                                  <button>4B</button>&nbsp;
                                  <button>4A</button>&nbsp;
                                </div>
                                <p className='lowertext'>Lower Right (4)</p>
                                <vr></vr>
                            </div>
                            <div>Upper Left(1)
                            <div className='upperright-teeths1'>
                                  <button>2A</button>&nbsp;
                                  <button>2B</button>&nbsp;
                                  <button>2C</button>&nbsp;
                                  <button>2D</button>&nbsp;
                                  <button>2E</button>&nbsp;
                                </div>&nbsp;
                                <div className='upperright-teeths1'>
                                  <button>3A</button>&nbsp;
                                  <button>3B</button>&nbsp;
                                  <button>3C</button>&nbsp;
                                  <button>3D</button>&nbsp;
                                  <button>3E</button>&nbsp;
                                </div>
                                <p>Lower Left (3)</p>
                            </div>
                         </div>
                         <button className='teeth-add-btn2'>Add</button>
                       </div>
                          </Popup>
                          <h5>Select All Tooth</h5>
                   {/* -----------------addtooth-third-popup------------------ */}
                        <Popup trigger={ <input type='radio'/>}
                          position='bottom right center' modal nested>
                            {
                              close=>(
                          <div className='addtooth-all-teeth-popup'>  
                       <div className='addtooth-secondpopu-header'>
                        <button onClick={() =>close()}>X</button>
                       <h5>Show Primary Teeth Structure</h5>
                       <input type='radio'/>
                       <h5>Select All Tooth</h5>
                          <input type='radio'/>  
                       </div>
                       <div className='popup-tooths'>
                           &nbsp;&nbsp; <div>Upper Right(1)&nbsp;&nbsp;
                                <div className='upperright-teeths2'>
                                  <button>18</button>&nbsp;
                                  <button>17</button>&nbsp;
                                  <button>16</button>&nbsp;
                                  <button>15</button>&nbsp;
                                  <button>14</button>&nbsp;
                                  <button>13</button>&nbsp;
                                  <button>12</button>&nbsp;
                                  <button>11</button>&nbsp;
                                </div>&nbsp;
                                <div className='upperright-teeths2'>
                                  <button>48</button>&nbsp;
                                  <button>47</button>&nbsp;
                                  <button>46</button>&nbsp;
                                  <button>45</button>&nbsp;
                                  <button>44</button>&nbsp;
                                  <button>43</button>&nbsp;
                                  <button>42</button>&nbsp;
                                  <button>41</button>&nbsp;
                                </div>
                                <p className='lowertext'>Lower Right (4)</p>
                                <vr></vr>
                            </div>
                            <div>Upper Left(1)
                            <div className='upperright-teeths2'>
                                  <button>21</button>&nbsp;
                                  <button>22</button>&nbsp;
                                  <button>23</button>&nbsp;
                                  <button>24</button>&nbsp;
                                  <button>25</button>&nbsp;
                                  <button>26</button>&nbsp;
                                  <button>27</button>&nbsp;
                                  <button>28</button>&nbsp;
                                </div>&nbsp;
                                <div className='upperright-teeths2'>
                                  <button>31</button>&nbsp;
                                  <button>32</button>&nbsp;
                                  <button>33</button>&nbsp;
                                  <button>34</button>&nbsp;
                                  <button>35</button>&nbsp;
                                  <button>36</button>&nbsp;
                                  <button>37</button>&nbsp;
                                  <button>38</button>&nbsp;
                                </div>
                                <p>Lower Left (3)</p>
                            </div>
                         </div>
                         <div className='popup-tooths'>
                         
                         </div>
                         <div className='multiply-cost-statement'>
                          <input type='checkbox' className='alltooth-popup-chckbox'/>
                          <p>Multiply the cost with Number of Tooth or Not?</p>
                         </div>
                         <button className='teeth-add-btn2'>Add</button>
                       </div>
                              )
                          }
                          </Popup>
                          <button  onClick={()=>close()}>X</button> 
                         </div>
                         <div className='popup-tooths'>
                           &nbsp;&nbsp; <div>Upper Right(1)
                                <div className='upperright-teeths1'>
                                  <button style={{ backgroundColor: buttonColor }}
                                onClick={changeBackgroundColor}>18</button>&nbsp;
                                  <button >17</button>&nbsp;
                                  <button>16</button>&nbsp;
                                  <button>15</button>&nbsp;
                                  <button>14</button>&nbsp;
                                  <button>13</button>&nbsp;
                                  <button>12</button>&nbsp;
                                  <button>11</button>&nbsp;
                                </div>&nbsp;
                                <div className='upperright-teeths1'>
                                  <button>48</button>&nbsp;
                                  <button>47</button>&nbsp;
                                  <button>46</button>&nbsp;
                                  <button>45</button>&nbsp;
                                  <button>44</button>&nbsp;
                                  <button>43</button>&nbsp;
                                  <button>42</button>&nbsp;
                                  <button>41</button>&nbsp;
                                </div>
                                <p className='lowertext'>Lower Right (4)</p>
                                <vr></vr>
                            </div>
                            <div>Upper Left(1)
                            <div className='upperright-teeths1'>
                                  <button>21</button>&nbsp;
                                  <button>22</button>&nbsp;
                                  <button>23</button>&nbsp;
                                  <button>24</button>&nbsp;
                                  <button>25</button>&nbsp;
                                  <button>26</button>&nbsp;
                                  <button>27</button>&nbsp;
                                  <button>28</button>&nbsp;
                                </div>&nbsp;
                                <div className='upperright-teeths1'>
                                  <button>31</button>&nbsp;
                                  <button>32</button>&nbsp;
                                  <button>33</button>&nbsp;
                                  <button>34</button>&nbsp;
                                  <button>35</button>&nbsp;
                                  <button>36</button>&nbsp;
                                  <button>37</button>&nbsp;
                                  <button>38</button>&nbsp;
                                </div>
                                <p>Lower Left (3)</p>
                            </div>
                         </div>
                         <button className='teeth-add-btn'>Add</button>
                        </div>
                           ) }
                        </Popup> 
                         {/* ---------------Addtooth-popup---------------- */}
                         <div className='addtretament-table-data-form'>
                         {/* <span>0</span> */}
                         <input type='text' className='Add-treatment-table-td-input'/>
                         <span>₹</span>
                         </div>
                         <div className='addtretament-table-data-form'>
                         {/* <span>0</span> */}
                         {/* -----------discount-popup--------------- */}
                       <Popup trigger={<input type='text' className='Add-treatment-table-td-input'/>}
                       position='bottom left'>
                         <div className='discount-pop12'>
                         <div className='discoun-popup-content'>
                         <input type='radio'/>
                         <p>Discount in percent(%)</p>
                         </div>
                         <div className='discoun-popup-content'>
                         <input type='radio'/>
                         <p>Normal Discount</p>
                         </div>
                         </div>
                         </Popup>
                           {/* -----------discount-popup-end--------------- */}
                         <span>₹</span>
                         </div>
                         <div className='addtretament-table-data-form'>
                         {/* <span>0</span> */}
                         <input type='text' className='Add-treatment-table-td-input'/>
                         <span>₹</span>
                         </div>
                   {/* ----------------note-popup-start--------- */}
                   <Popup trigger={<GiNotebook className='notebook-icon'/>}
                   position='bottom ' 
                   modal nested>
                    {(
                        close =>
                       <form className='note-popup'>
                        <input type='text' placeholder='Note' className='note-input-popup'/>
                        <button onClick={() =>close()} className='note-popup-btn'>X</button>
                        </form>    
                   ) }
                     
                        </Popup>
                         {/* ----------------note-popup-end--------- */}
                    </td>
                    
                </tr>
            </thead>
        </table>
        {/* <p className='addtreatment-total-cost'>Total Cost</p> */}
        <div className='addtteatment-btm-btn1'>
        <Popup trigger={<p className='Treatment-type-list'>Treatment Type Not in List ? Add More Treatment Type</p>}
          modal nested>
          {
               close =>(
                <div className='Treatment-not-inlist-popup'>
      
                  <div>
                    <div className='add-new-Treatment-popup-header13'>
                    <BsFillPencilFill className='pen-icon13'/><h4 className='add-Treatment-header13'>Add New Medicine</h4>
                    <button className='not-in-list-cncl-btn13'  onClick={()=>close()}>X</button>
                    </div>
                    <div className='add-Treatment-inputs-body13'>
                    <div className='inputs-div13'>
                       <div className='add-icon13'><AiFillPlusSquare /></div>
                      <input  type='text' className='add-Treatment-popup-inputs13' placeholder='Treatment'></input>
                    </div>
                    <div className='inputs-div13'>
                       <div className='add-icon13'><AiFillPlusSquare /></div>
                      <input  type='text' className='add-Treatment-popup-inputs13' placeholder='Treatment Cost'></input>
                    </div>
                  
                    <button className='Treatment-add-btn13'>Add</button>
                    </div>
                    <button onClick={()=>close()} className='add-Treatment-ok-btn13'>Ok</button>
                  </div>
                </div>
                
              )
          }
          
        </Popup>
            <button className='addtteatment-btm-btns2323'>Cancel</button>&nbsp;
            <button className='addtteatment-btm-btns23'>Save</button>
        </div>
    
       
    </div>
  )
}

export default Treatment