// import React from 'react'
import { TfiPencilAlt } from 'react-icons/tfi';
import { useState } from 'react';
import'./RefundPage.css'
import { Link } from 'react-router-dom';
import { AiOutlineStepBackward , AiOutlineCaretRight , AiOutlineStepForward} from "react-icons/ai";
import Popup from 'reactjs-popup';
const RefundPage = () => {
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
        <div className='refund-totaleew'>
            <div className='refundin'>
                Payment View
                <select className='refund-selectoption'>
                    <option>Payment</option>
                    <option>Refund</option>
                </select>
                <Link to="/RefundAgainstBill"> <button className='refund-printbutton-1'>Refund Againist Advance Payment</button></Link>
                 
                <div className='refundpay-main'>
      {isFormOpen&&(
        <div className='Refundpay-total'>
          <div className='refpay-totalin'>
            <div className='refpay-in'>
            <Link to="/RefundPay"><div className='refpay-heading'>
                Refund Payment
              </div> </Link>
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


        
                {/* <button className='refund-printbutton-1'>Refund Againist Advance Payment</button> */}
                <button className='refund-addnew'>Refund Againist Bill</button>
            </div>
            <div className='gt'>
              <table className='investr-table'>
                    <thead className='investr-thead'>
                        <tr className='investr-headrow'>
                        <th className='investr'>Refund Date</th>
                        <th  className='investr'>Refund Number</th>
                        <th  className='investr'>Refund Amount</th>
                        <th  className='investr'>Status Description</th>
                        <th  className='investr'>Notes</th>
                        <th  className='investr'>Action</th>

                        </tr>
                        
                    </thead>
                    <tbody className='investr-tablebody'>
                      <td className='iconleft'><AiOutlineStepBackward className='refundiconr-2'/>
                      <AiOutlineStepBackward className='refundiconr-2'/>  0
                      <AiOutlineCaretRight className='refundiconr-2'/>
                      <AiOutlineStepForward className='refundiconr-2' />
                      <select className='sf'>
                        <option value="">10</option>
                        <option value="">20</option>
                        <option value="">30</option>
                        <option value="">40</option>
                        <option value="">50</option>
                      </select>&nbsp;</td>
                            <td className='iconleft2'>items per page</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>No items to Display</td>
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
  )
}

export default RefundPage