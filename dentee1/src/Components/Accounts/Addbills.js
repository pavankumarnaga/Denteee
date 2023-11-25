import './Addbills.css';
import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { GiNotebook } from 'react-icons/gi';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Popup from 'reactjs-popup';
import Axios from 'axios';

const Newbill = () => {
  const [popup, setPop] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [date, setDate] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [billData, setBillData] = useState({
    date: '',
      selectedValue: '',
    treatmentType: '',
  cost: '',
  discount: '',
  
  });

  const handleClickopen = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setBillData({ ...billData, [field]: value });
  };

  const handleSave = async () => {
    try {
      // Send a POST request to your backend API to add a new bill
      const response = await Axios.post('http://localhost:5000/bill', billData);

      // Handle the response as needed (e.g., show a success message)
      console.log(response.data);
    } catch (error) {
      // Handle the error (e.g., show an error message)
      console.error(error);
    }
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

 
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <div className="new-bill-body">
      
<div className='main-headnew3'>
        <div className='mainhead-iconnew3'><Link to='/HomePage'><AiOutlineArrowLeft/></Link></div>
        <div className='main-headingnew3'>Accounts / Add New Bill</div>
       </div>
             

    <div className="new-bill-content">
        <input
          className="new-bill-date"
          type="date"
          value={billData.date}
          field='date'
          // onChange={handleDateChange}
           onChange={(e) => handleInputChange(e, 'date')}
        />
        <div className='search-containernew3'>
    <input className='search-barnew3' type='text' placeholder='Search'/>
    <button className='search-btnnew3'><BiSearch/></button>
    </div>
        <select
          className="newbill-select"
          value={selectedValue}
          onChange={handleSelectChange}
          field='selectedValue'
          // onChange={(e) => handleInputChange(e, 'selectedValue')}
        >
          <option value="Matrical 1">Matrical 1</option>
          <option value="Matrical 2">Matrical 2</option>
          <option value="Matrical 3">Matrical 3</option>
        </select>
    </div>

            <table className="add-bill-table">
              <thead className="threadaddbills123">
                <tr className="add-bill-header">
                  <th className="thadd1234">Treatment Type</th>
                  <th>Tooth</th>
                  <th>Cost</th>
                  <th>Discount</th>
                  <th>Total cost</th>
                  <th>Note</th>
                </tr>
              </thead>

              <tr className="addbill-table-data_13">
                <td>
                  <select
                    className="text"
                    onChange={(e) => handleInputChange(e, 'treatmentType')}
                  >
                    <option>Teeth Whitening</option>
                    <option>Consulation</option>
                    <option>Root Canal Treatment</option>
                    <option>Fluroide Treatment</option>
                    <option>Dental Implant</option>
                    <option>Crown</option>
                    <option>Fillings</option>
                    <option>Dentures</option>
                    <option>Vanner</option>
                    <option>Gum Surgery</option>
                    <option>Lingual Braces</option>
                    <option>Routline Extraction</option>
                    <option>Surgical Extraction</option>
                    <option>Advance Surgical Procedure</option>
                    <option>Pit & Fissures Sealan</option>
                    <option>Post & Core</option>
                    <option>Re-route Canal Treatment </option>
                    <option>Braces</option>
                    {/* Add more options */}
                  </select>
                </td>
                <td>
                 

      <Popup trigger={
                                 <button onClick={handleClickopen} className='popup-btnaddbills1234'>
                                <span className='spanaddbill1234'>Add Tooth</span>
                                  </button>
                                  }
                                  position="bottom left center">
                                  <div nClick={closePopup}  className='popup'>
                                 <div className='addtooth-popup-header'>
                            {/* <button  className='close-btn3'>X</button> */}
                                 <h5 className='add-t-popup-head'>Show Primary Teeth Structure</h5>
                            
                                 <Popup trigger={
                                <input type='radio'  className='check-btn2'/>}
                                     position="bottom center center">
                                  <div className='add-tooth-popup2'>
                                  <div className='addtooth-popup-header'>
                                  <h5 className='add-t-popup-head'>Show Primary Teeth Structure</h5>
                                  <input type='radio'  className='check-btn2'/>

                                  <h5 className='add-t-popup-head'>Select All Tooth</h5>          
                                  <input type='radio' className='check-btn2'/>

                                  <button className='close-btn'>X</button>
                                  </div>
                                  <div className='Tooths'>
                                   <div className='left-tooth'>
                                    <div className='no-btn'>
                                      <p className='left-text'>Upper Right(1)</p>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>

                                    <div className='no-btn2'>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>
                                    <p>Lower right(4)</p>
                                   </div>
                                   <div className='right-tooth'>
                                   <div className='no-btn3'>
                                      <p className='right-text'>Upper Left(2)</p>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>

                                    <div className='no-btn4'>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>
                                    <p className='lower-left'>Lower left(3)</p>
                                   </div>
                                
                                </div>
                                <div className='Tooths2'>
                                   <div className='left-tooth'>
                                    <div className='no-btn'>
                              
                                    <button >1E</button>
                                    <button >1D</button>
                                    <button >1C</button>
                                    <button >1B</button>
                                    <button >1A</button>
                                   </div>

                                    <div className='no-btn2'>
                                    <button >4E</button>
                                    <button >1D</button>
                                    <button >1C</button>
                                    <button >1B</button>
                                    <button >1A</button>
                                  </div>
                                    <p>Lower right(4)</p>
                                   </div>
                                   <div className='right-tooth'>
                                   <div className='no-btn3'>
                                  
                                    <button >2A</button>
                                    <button >2B</button>
                                    <button >2C</button>
                                    <button >2D</button>
                                    <button >2E</button>
                                   </div>

                                    <div className='no-btn4'>
                                    <button >3A</button>
                                    <button >3B</button>
                                    <button >3C</button>
                                    <button >3D</button>
                                    <button >3E</button>
                                   </div>
                                    <p className='lower-left'>Lower left(3)</p>
                                   </div>
                                </div>
                                <button className='tooth-add-btn2'>Add</button>
                                  </div>
                             </Popup>

                                 <h5 className='add-t-popup-head'>Select All Tooth</h5>
                                 
                                 {/* //third popup */}
                                 <Popup trigger={<input type='radio' className='check-btn2'/>}
                                    position="bottom center center">
                                      <div className='container_sunil'>
                                      <div className='addtooth-popup-header'>
                                      <h5 className='add-t-popup-head'>Show Primary Teeth Structure</h5>
                                  <input type='radio'  className='check-btn2'/>
                                   <h5 className='add-t-popup-head'>Select All Tooth</h5>
                                  <input type='radio' className='check-btn2'/>
                                  <button className='close-btn2'>X</button>
                                      </div>
                                       <div className='Tooths_sunil'>
                                   <div className='left-tooth_sunil'>
                                    <div className='no-btn_sunil'>
                                      <p className='left-text_sunil'>Upper Right(1)</p>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>

                                    <div className='no-btn2_sunil'>
                                    <button >48</button>
                                    <button >47</button>
                                    <button >46</button>
                                    <button >45</button>
                                    <button >44</button>
                                    <button >43</button>
                                    <button >42</button>
                                    <button >41</button></div>
                                    <p>Lower right(4)</p>
                                   </div>
                                   <div className='right-tooth_sunil'>
                                   <div className='no-btn3_sunil'>
                                      <p className='right-text_sunil'>Upper Left(2)</p>
                                    <button >21</button>
                                    <button >22</button>
                                    <button >23</button>
                                    <button >24</button>
                                    <button >25</button>
                                    <button >26</button>
                                    <button >27</button>
                                    <button >28</button>
                                    </div>

                                  <div className='no-btn4_sunil'>
                                    <button >31</button>
                                    <button >32</button>
                                    <button >33</button>
                                    <button >34</button>
                                    <button >35</button>
                                    <button >36</button>
                                    <button >12</button>
                                    <button >11</button></div>
                                    <p className='lower-left'>Lower left(3)</p>
                                  </div>
                                 
                                </div>
                                <div className='last-text_sunil'>
                                  <input type='checkbox'/>
                                  <p>Multiply the cost with the Number of tooth Or not ?</p>
                                </div>
                                <button className='Add-alltooth-btn'>Add</button>
                                </div>
                                     
                                  </Popup>
                                
                                 </div>
                                <div className='Tooths'>
                                   <div className='left-tooth'>
                                    <div className='no-btn'>
                                      <p className='left-text'>Upper Right(1)</p>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>

                                    <div className='no-btn2'>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>
                                    <p>Lower right(4)</p>
                                   </div>
                                   <div className='right-tooth'>
                                   <div className='no-btn3'>
                                      <p className='right-text'>Upper Left(2)</p>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>

                                    <div className='no-btn4'>
                                    <button >18</button>
                                    <button >17</button>
                                    <button >16</button>
                                    <button >15</button>
                                    <button >14</button>
                                    <button >13</button>
                                    <button >12</button>
                                    <button >11</button></div>
                                    <p className='lower-left'>Lower left(3)</p>
                                   </div>
                                </div>
                               <button className='tooth-add-btn'>Add</button>
                                  </div>
                             </Popup>  


                </td>
                <td>
                  <input
                    className="text"
                    type="number"
                    value={billData.cost}
                    onChange={(e) => handleInputChange(e, 'cost')}
                  />
                  {/* <p className="zero">₹</p> */}
                </td>
                <Popup trigger={<button className="popup-btn">Discount</button>} position="bottom left">
                  <div className="discount-popup">
                    <input
                      type="radio"
                      className="radio-btn"
                      onChange={(e) => handleInputChange(e, 'discountType')}
                      value="percentage"
                    />
                    <p className="discount-pop">Discount in Percentage(%)</p>
                    <input
                      type="radio"
                      className="radio-btn"
                      onChange={(e) => handleInputChange(e, 'discountType')}
                      value="normal"
                    />
                    <p className="discount-pop">Normal Discount</p>
                  </div>
                </Popup>
                <td>
                  <input
                    className="text"
                    type="text"
                    value={billData.discount}
                    onChange={(e) => handleInputChange(e, 'discount')}
                  />
                  {/* <p className="zero">₹</p> */}
                </td>
                <td>
                  <Popup trigger={<button className="popup-btn"><GiNotebook className="noteicon" /></button>} position="bottom right">
                    <input
                      type="text"
                      placeholder="Note"
                      className="note-popup"
                      value={billData.note}
                      onChange={(e) => handleInputChange(e, 'note')}
                    />
                  </Popup>
                </td>
              </tr>
            </table>
          </div>
          <Popup trigger={<div className="popup-btn-link"><p className="treatment-type-link">Treatment Type not in the list ? Add More Treatment Type</p></div>} position="center">
            <div className="link-popup">
              <div className="pop-up-header">
                <h3 className="_h3">
                  <BsFillPencilFill className="pencil-icon" />Add New Treatment
                </h3>
              </div>
              <div className="pop-up-inputs_13">
                <input className="text_13" type="text" placeholder="Treatment" />
                <input className="text_13" type="text" placeholder="Treatment Cost" />
              </div>
              {/* <button className="Add-btn_13">Ok</button> */}

              <button className="ok-btn_13">Add</button>
            </div>
          </Popup>
          <p className="new-total">Total Cost</p>
          <button className="new-bill-btm-btn" onClick={handleSave}>
            Save
          </button>
          <button className="new-bill-btm-btn">Cancel</button>
        </div>
    </>
  );
};

export default Newbill;