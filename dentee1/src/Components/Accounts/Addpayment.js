import './Addpayment.css';
import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiFillCreditCard } from 'react-icons/ai';
import { BiSolidFlagAlt } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function AddPayment() {
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [receivedAmount, setReceivedAmount] = useState('');
 

  const handleSave = async () => {
    try {
   
      const response = await axios.post('http://localhost:3006/api/payments', {
        date: selectedDate,
        receivedAmount: receivedAmount,
        paymentMode: selectedPaymentMode,
      });

      console.log(response.data);
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      console.error(error);
      // Handle the error (e.g., show an error message)
    }
  };

  const handleClick = () => {
    // Toggle logic for additional content
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleAmountChange = (event) => {
    setReceivedAmount(event.target.value);
  };

  return (
    <>  
    <Navbar/>
    <Sidebar/>
    <div className='cont-1234pav'>
      <div className="aPay-Body">
        <div className='aPay-head'>
          <button className='aPay-icon'><Link to='/Homepage'><AiOutlineArrowLeft /></Link></button>
          <div className='add-pay'>Accounts / Add-Payments</div>
        </div>
        <div className='apay-selc'>
          <div className='apay-d-s'>
          <div className='add-p-date'>
        <input
          type='date'
          className='add-p-date-1'
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
            <button className='a-search-1'><CiSearch className='a-search-1234' />
              
            </button>
            <input className='apay-search' placeholder='search'></input>

            <div className='apay-1'></div>
          </div>
          <div className='a-line'></div>
          <div className='t-p-a'>Total Payable Amount</div>
          <div className='a-paynow'>
            <div className='a-paynow-1'> PayNow :</div>
            <div className='a-paynow-2'>
        <input
          className='a-paynow-2-1'
          placeholder='Received Amount'
          value={receivedAmount}
          onChange={handleAmountChange}
        />
      </div>
            <div className='a-paynow-3'><AiFillCreditCard className='rec-icon' /></div>
          </div>
          <div className='apay-mode'>
            <div className='apay-mode-1'>Payment Mode:</div>
            <div className='apay-mode-3'>
              <select
                className='apay-mode-2'
                value={selectedPaymentMode}
                onChange={(e) => setSelectedPaymentMode(e.target.value)}
              >
                <div className='nikh-1'>
              {selectedPaymentMode && (
                <Popup
                  position="bottom left"
                  open={true}
                >
                 
                </Popup>
              )}
            </div>
                <option value="">Select Payment Mode</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
                <option value="Online Banking">Online Banking</option>
              </select>
            </div>
          </div>
          <div className='apay-f-1'>
            <div className='apay-f-2'><input type='checkbox'></input></div>
            <div className='apay-f-3'>Send Payment Details SMS</div>
          </div>
          <div className='apay-f1'>
          <div>
            <Popup trigger=
            { <div>
               <button  className= 'a-show' onClick={handleClick}>Show</button>
             </div>}
                position="bottom left">
                   <table className='pay-table-nikhil-a1'>
                   <thead>
                     <tr>
              <th className='pay-table-head-a2'>Select</th>
              <th className='pay-table-head-a2' >Bill</th>
              <th className='pay-table-head-a2' >Net Cost</th>
              <th className='pay-table-head-a2'>Balance</th>
              <th className='pay-table-head-a2'>From Advance</th>
              <th className='pay-table-head-a2'>Paid Now</th>
              <th className='pay-table-head-a2'>Due After</th>
          </tr>
          </thead>
          <tr className="some-1-a3">
              <td>07-09</td>
              <td>001</td>
              <td>john</td>
              <td>200</td>
              <td>Active</td>
              <td>none</td>
              <td>none</td>
                   </tr>    
                   </table>
            </Popup>
            </div>
            <div className='apay-f3'>Billed Invoices With Pending Payments</div>
          </div>
          <div className='apay-ff1'>
            <div className='apay-ff2'><button className='apay-save' onClick={handleSave}>Save</button></div>
            <div className='apay-ff3'><button className='apay-cancel'>Cancel</button></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AddPayment;