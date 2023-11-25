import React from 'react'
import './RefundAgainstBill.css'
import { TfiPencilAlt } from 'react-icons/tfi';
import { useState } from 'react';
import Popup from 'reactjs-popup';
const Refundagainist = () => {
  const [isFormOpen, setIsFormOpen] = useState(true); // Default to open
  const [patientType, setPatientType] = useState(''); // State to track the patient type

  const handlePatientTypeChange = (event) => {
    setPatientType(event.target.value);
  };

  // Function to close the form
  const closeForm = () => {
    setIsFormOpen(false);
  };


  return (
    <div className='refundpay-main'>
      {isFormOpen&&(
        <div className='Refundpay-total'>
          <div className='refpay-totalin'>
            <div className='refpay-in'>
              <div className='refpay-heading'>
                Refund Payment
              </div>
              <input type='date' className='refpay-date'></input>
              <div className='refpay-availadvance'>
                <div className='refpay-avail'>Available Advance&nbsp;:</div>
                <div className='refpaybal'>0</div>
              </div>
            <div className='refpay-refamount'>
              <div className='refpay-amount'>
                Refund Amount :
              </div>
              <input className='refpay-inputrefamount'></input>
            </div>
            <div className='refpay-modeofpay'>
              <div className='refpay-textofpaymode'>Mode of Payment :</div>
              <select className='refpay-inputmodeofpay'>
                <option>Cash</option>
                <option>Cheque</option>
                <option>Card</option>
                <option>RTGS</option>
                <option>Neft</option>
                <option>Coupons</option>
              </select>
              <Popup trigger= {<button className='refpaynotesbutton'><TfiPencilAlt className='refpay-notesicon'/></button>} position="bottom right">
                <div className='refpay-popup'>
                  <div className='total-note'>
                    <input type="text"placeholder="Note" className='total-notein'></input>
                  </div>
                </div>
              </Popup>
            </div>
            <div className='refpay-savecancel'>
              <button className='refpay-save'>Save</button>
              <button className='refpay-cancel' onClick={closeForm}>Cancel</button>
            </div>
            </div>
          </div>
        </div>
      )
}

    </div>
  )
}

export default Refundagainist