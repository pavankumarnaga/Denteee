import React, { useState } from 'react';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import './Payment.css';
import { Link } from 'react-router-dom';

const dummyData = [
  {
    refundDate: '2023-10-01',
    refundNumber: '12345',
    refundAmount: 100.0,
    treatmentPayment: 50.0,
    modeOfPayment: 'Credit Card',
    notes: 'Refund for canceled appointment',
    statusDescription: 'Completed',
  },
  {
    refundDate: '2023-10-05',
    refundNumber: '54321',
    refundAmount: 75.0,
    treatmentPayment: 25.0,
    modeOfPayment: 'PayPal',
    notes: 'Refund for returned product',
    statusDescription: 'Pending',
  },
  // Add more dummy data items here
];

const itemsPerPage = 1;

const Bills1 = () => {
  const [activeSection, setActiveSection] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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
                  <th className="invest2">Refund Date</th>
                  <th className="invest2">Refund Number</th>
                  <th className="invest2">Refund Amount</th>
                  <th className="invest2">Treatment Payment</th>
                  <th className="invest2">Mode of Payment</th>
                  <th className="invest2">Notes</th>
                  <th className="invest2">Status Description</th>
                  <th className="invest2">Action</th>
                </tr>
              </thead>
              <tbody className="invest2-tablebody">
                {currentData.map((data, index) => (
                  <tr key={index}>
                    <td className="invest2">{data.refundDate}</td>
                    <td className="invest2">{data.refundNumber}</td>
                    <td className="invest2">{data.refundAmount}</td>
                    <td className="invest2">{data.treatmentPayment}</td>
                    <td className="invest2">{data.modeOfPayment}</td>
                    <td className="invest2">{data.notes}</td>
                    <td className="invest2">{data.statusDescription}</td>
                    <td className="invest2">{/* You can add action buttons here */}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
