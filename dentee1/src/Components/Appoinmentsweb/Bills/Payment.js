import React, { useState, useEffect } from 'react';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import axios from 'axios';
import Popup from 'reactjs-popup';
import './Payment.css';

const itemsPerPage = 3;

const Bills1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [payments, setPayments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [date, setDate] = useState('');
  const [paynow, setPaynow] = useState('');
  const [note, setNote] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = payments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(payments.length / itemsPerPage);

  const [editPayment, setEditPayment] = useState(null);

  const handleEditPayment = (payment) => {
    setEditPayment(payment);
    setEditIndex(payments.indexOf(payment));
    setIsModalOpen(true);
    setDate(payment.date);
    setPaynow(payment.paynow);
    setPaymentMode(payment.paymentMode);
    setNote(payment.note);
  };

  const handleSave = async () => {
    try {
      const updatedPayment = {
        date,
        paynow,
        paymentMode,
        note,
      };

      await axios.put(`http://localhost:5000/api/newpayment/${payments[editIndex]._id}`, updatedPayment);
      const updatedPayments = [...payments];
      updatedPayments[editIndex] = { ...payments[editIndex], ...updatedPayment };
      setPayments(updatedPayments);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating payment:', error);
    }
  };

  const handleDeletePayment = async (payment) => {
    try {
      await axios.delete(`http://localhost:5000/api/newpayment/${payment._id}`);
      setPayments(payments.filter((p) => p._id !== payment._id));
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };

  const openPopup = () => {
    setIsModalOpen(true);
  };

  const closePopup = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/newpayment')
      .then(response => {
        console.log(response.data);
        setPayments(response.data);
      })
      .catch(error => {
        console.error('Error fetching payments:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <div className="bill-popup">
        <div className="payment-total1">
          <div className="paymentin">
            payment view
            <select className="payment-selectoption">
              <option>view data</option>
              <option>payment</option>
              <option>
                <Link to="/Refund_1">Refund</Link>
              </option>
            </select>
            <button className="payment-printbutton">Print</button>
            <Link to="/AddNewPayment_1">
              <button className="payment-addnew">Add New Payment (0)</button>
            </Link>
          </div>
          <div className="gt">
            <table className="invest2-table">
              <thead className="invest2-thead">
                <tr className="invest2-headrow">
                  <th className="invest2">Receipt Date</th>
                  <th className="invest2">Receipt Number</th>
                  <th className="invest2">Treatment Payment</th>
                  <th className="invest2">Mode of Payment</th>
                  <th className="invest2">Notes</th>
                  <th className="invest2">Status Description</th>
                  <th className="invest2">Action</th>
                </tr>
              </thead>
              <tbody className="invest2-tablebody">
                {currentData.map((payment, index) => (
                  <tr key={index}>
                    <td className="invest3">{payment.date}</td>
                    <td className="invest3">{payment.receiptNumber}</td>
                    <td className="invest3">{payment.paynow}</td>
                    <td className="invest3">{payment.paymentMode}</td>
                    <td className="invest3">{payment.note}</td>
                    <td className="invest3">{payment.statusDescription}<div className='payment-active'>Active</div></td>
                    <Popup trigger={<td className="invest3"><FiSettings className='set-icon1' /></td>} position='bottom center'>
                      <div className='payment-box'>
                        <div className="payment-edit" onClick={() => handleEditPayment(payment)}>
                          Edit
                        </div>
                        <div className="payment-edit" onClick={() => handleDeletePayment(payment)}>
                          Delete
                        </div>
                      </div>
                    </Popup>
                  </tr>
                ))}
              </tbody>
            </table>


            {isModalOpen && (
          <div className="pay1-popup">
            <div className="pay1-popup-content">
              <button className="pay1-popup-close11" onClick={closePopup}>
                X
              </button>
              <div className='ref-add'>
                <h1>{editIndex !== null ? 'Edit Payment' : 'Add payment'}</h1>
              </div>
              <hr></hr>&nbsp;
              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="text"
                  value={paynow}
                  onChange={(e) => setPaynow(e.target.value)}
                />
                <select
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value)}
                >
                  <option value="">Select PaymentMode</option>
                  <option value="Card">Card</option>
                  <option value="UPI">UPI</option>
                  <option value="Cash">Cash</option>
                </select>

                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <button className="pay1-popup-save" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        )}



            <div className="pat-footer33pat">
              <button
                className="butpagenation"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <AiOutlineStepBackward />
              </button>
              <p className="pat-bottom-num33pat">{currentPage}</p>
              <button
                className="butpagenation"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <AiOutlineStepForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills1;