import React, { useState, useEffect } from 'react';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { FiSettings } from "react-icons/fi";
import axios from 'axios';
import Popup from 'reactjs-popup';
import './Bill.css';

const itemsPerPage = 2;

const Billss = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bill, setBill] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [billDate, setBillDate] = useState([]);
  const [billNumber, setBillNumber] = useState([]);
  const [billAmount, setBillAmount] = useState([]);
  const [treatmentTotalPayment, setTreatmentTotalPayment] = useState([]);
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = bill.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(bill.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5002/bill/${_id}`);
      setBill((prevBill) => prevBill.filter((item) => item._id !== _id));
      alert('Bill deleted successfully!');
    } catch (error) {
      console.error('Error deleting bill:', error);
      alert('Error deleting bill. Please try again.');
    }
  };

  const closePopup = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      const updatedBill = {
        billDate,
        billNumber,
        billAmount,
        treatmentTotalPayment,
        notes,
        status,
      };

      await axios.put(`http://localhost:5002/bill/${bill[editIndex]._id}`, updatedBill, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const updatedBills = [...bill];
      updatedBills[editIndex] = {
        ...updatedBills[editIndex],
        ...updatedBill,
      };
      setBill(updatedBills);

      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating bill:', error);
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:5002/bill')
      .then((response) => {
        setBill(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch bill data:', error);
      });
  }, []);

  return (
    <div>
      <div className="bill-popup">
        <div className="bill2-total">
          <div className="billborderin2-total">
            <button className="bill2-printbutton">Print</button>
            <button className="bill2-genbillbutton">Generate Bill (0)</button>
          </div>
          <div>
            <table className="bill2-table">
              <thead className="bill2-thead">
                <tr className="bill2-headrow">
                  <th className="bill2-tableselectall">Bill Date</th>
                  <th className="bill2-tableselectall">Bill Number</th>
                  <th className="bill2-tableselectall">Bill Amount</th>
                  <th className="bill2-tableselectall">Treatment Total Payment</th>
                  <th className="bill2-tableselectall">Notes</th>
                  <th className="bill2-tableselectall">Status</th>
                  <th className="bill2-tableselectall">Action</th>
                </tr>
              </thead>
              <tbody className="bill2-tablebody">
                {currentData.map((data, index) => (
                  <tr className="bill2-headrow" key={data._id}>
                    <td className="bill2-td">{data.billDate}</td>
                    <td className="bill2-td">{data.billNumber}</td>
                    <td className="bill2-td">{data.billAmount}</td>
                    <td className="bill2-td">{data.treatmentTotalPayment}</td>
                    <td className="bill2-td">{data.notes}</td>
                    <td className="bill2-td">{data.status}</td>
                    <Popup trigger={<td className="invest3"><FiSettings className='set-icon1' /></td>} position='bottom center'>
                      <div className='payment-box'>
                        <div className="payment-edit" onClick={() => {
                          setEditIndex(index);
                          setBillDate(data.billDate || '');
                          setBillNumber(data.billNumber || '');
                          setBillAmount(data.billAmount || '');
                          setTreatmentTotalPayment(data.treatmentTotalPayment || '');
                          setNotes(data.notes || '');
                          setStatus(data.status || '');
                          setIsModalOpen(true);
                        }}>
                          Edit
                        </div>
                        <div className="payment-edit" onClick={() => handleDelete(data._id)}>
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
                    <h1>{editIndex !== null ? 'Edit Bill' : 'Add payment'}</h1>
                  </div>
                  <hr></hr>&nbsp;
                  <div>
                    <input
                      type="date"
                      value={billDate}
                      onChange={(e) => setBillDate(e.target.value)}
                    />
                    <input
                      type="text"
                      value={billNumber}
                      onChange={(e) => setBillNumber(e.target.value)}
                    />
                    <input
                      type="text"
                      value={billAmount}
                      onChange={(e) => setBillAmount(e.target.value)}
                    />
                    <input
                      type="text"
                      value={treatmentTotalPayment}
                      onChange={(e) => setTreatmentTotalPayment(e.target.value)}
                    />
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <input
                      type="text"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
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

export default Billss;