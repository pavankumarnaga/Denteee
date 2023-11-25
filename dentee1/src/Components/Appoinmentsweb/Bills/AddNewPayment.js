import './AddNewPayment.css';
import { AiOutlineArrowLeft, AiFillCreditCard } from "react-icons/ai";
import { BiSolidFlagAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import Popup from 'reactjs-popup';
import React, { useState } from 'react';
import Appointment_header from '../Appointment-header';
import { Link } from 'react-router-dom';


function Add_New_Payment() {
   
  const [buttonText, setButtonText] = useState('Show');
  const handleClick = () => {
   if (buttonText === 'Show') {
     setButtonText('Hide');
   } else {
     setButtonText('Show');
   }
 };
  const [selectedPaymentMode, setSelectedPaymentMode] = useState(''); // State for selected payment mode
  return (
    <>
    <Appointment_header/>
    <div>
      <div className="addaPay-Body">
        <div className='addapay-selc'>
          <div className='addt-p-a'>Add Payment</div>
          <input type='date' className='add-date4'/>
          <div className='adda-paynow'>
            <div className='adda-paynow-1'> PayNow :</div>
            <div className='adda-paynow-2'><input className='a-paynow-2-1' placeholder='Received Amount'></input></div>
            <div className='adda-paynow-3'><AiFillCreditCard className='rec-icon' /></div>
          </div>
          <div className='addapay-mode'>
            <div className='addapay-mode-1'>Payment Mode:</div>
            <div className='addapay-mode-3'>
              <select
                className='addapay-mode-2'
                value={selectedPaymentMode}
                onChange={(e) => setSelectedPaymentMode(e.target.value)}
              >
                <div className='addnikh-1'>
              {selectedPaymentMode && (
                <Popup
                  position="bottom left"
                  open={true}
                >
                  
                  <div className='add1-pay-ni'>
                     <div className='add1-pay-ni-1'>
                     <div className='add1-che'> <div className='ax-1'><BiSolidFlagAlt className='ax1-2'/></div> 
                     <input  className= 'add1-che-1' placeholder='Cheque Number'></input></div>
                     <div className='add-pay-d'><input type='date' className='add1-pay-d-1'></input></div>
                     <div className='add1-pay-ni-2'>
                     <div className='add1-bankn'><div className='ab-1'><BiSolidFlagAlt className='ab1-2'/></div> 
                     <input  className= 'add1-bankn-1' placeholder='Bank Name'></input></div>
                     </div>
                     </div>
                  </div>
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
          <div className='addapay-f-1'>
            <div className='addapay-f-2'><input type='checkbox'></input></div>
            <div className='addapay-f-3'>Send Payment Details SMS</div>
          </div>
          <div className='addapay-f1'>
          <div>
            <Popup trigger=
            { <div>
               <button  className= 'a-show' onClick={handleClick}>{buttonText}</button>
             </div>}
                position="bottom left">
                  <table className='invest-table'>
                    <thead className='invest-thead-1'>
                        <tr className='invest-headrow'>
                        <th className='invest'>Select</th>
                        <th  className='invest'>Bill</th>
                        <th  className='invest'>Net Cost</th>
                        <th  className='invest'>Balance</th>
                        <th  className='invest'>From Advance</th>
                        <th  className='invest'>Paid Now</th>
                        <th className='invest'>Due After</th>

                        </tr>
                        
                    </thead>
                    <tbody className='invest-tablebody'>
                            <td>1`234</td>
                            <td>1234</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                    </tbody>
                  </table>
          </Popup>
            </div>
            <div className='apay-f3'>Billed Invoices With Pending Payments</div>
          </div>
          <div className='addapay-ff1'>
            <div className='apay-ff2'><button className='addapay-save'>Save</button></div>
            <div className='addapay-ff3'><Link to='/Appointment_header'><button className='addapay-cancel'>Cancel</button></Link></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Add_New_Payment;