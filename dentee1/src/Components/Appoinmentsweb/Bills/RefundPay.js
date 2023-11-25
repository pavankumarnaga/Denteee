import React from 'react';
import './RefundPay.css';
import { TfiPencilAlt } from 'react-icons/tfi';
import { useState } from 'react';
import Popup from 'reactjs-popup';


const Refundpay1 = () => {
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
    <div>
      {isFormOpen&&(
        <div className='Refundpay1-total'>
          <div className='refpay1-totalin'>
            <div className='refpay1-in'>
              <div className='refpay1-heading'>
                Refund Payment
              </div>
              <input type='date' className='refpay1-date'></input>
              <div>
              <table className='refpay1-table'> 
                <thead className='refpay1-thead'>
                  <tr className='refpay1-headrow'>
                    <th className='vu'>Select</th>
                    <th className='vu'>Bill Number</th>
                    <th className='vu'>Bill Amount</th>
                    <th className='vu'>Paid Amount</th>
                    <th className='vu'>Refund Amount</th>
                    <th className='vu'>Available Refund</th>
                  </tr>
                </thead>
                <tbody className='refpay1-tablebody'>
                <tr className='refpay1-tablerow'>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>No record found</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className='refpay1-refamount'>
                Refund Amount :
              <input className='refpay1-inputrefamount'></input>
            </div>
            <div className='refpay1-modeofpay'>
              <div className='refpay1-textofpaymode'>Mode of Payment :</div>
              <select className='refpay1-inputmodeofpay'>
                <option>Cash</option>
                <option>Cheque</option>
                <option>Card</option>
                <option>RTGS</option>
                <option>Neft</option>
                <option>Coupons</option>
              </select>
              <Popup trigger= {<button className='refpaynotesbutton1'><TfiPencilAlt className='refpay1-notesicon'/></button>} position="bottom right">
                <div className='refpay1-popup'>
                  <div className='total-note1'>
                    <input type="text"placeholder="Note" className='total-notein1'></input>
                  </div>
                </div>
              </Popup>
            </div>
            <div className='refpay1-savecancel'>
              <button className='refpay1-save'>Save</button>
              <button className='refpay1-cancel' onClick={closeForm}>Cancel</button>
            </div>
            </div>
          </div>
        </div>
      )
}



    </div>
  )
}

export default Refundpay1