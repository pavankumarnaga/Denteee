import React, { useState } from 'react';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import './Bill.css';

const dummyData = [
  {
    id: 1,
    billDate: '2023-10-01',
    billNumber: '12345',
    billAmount: 100.0,
    treatmentTotalPayment: 50.0,
    notes: 'Some notes for this bill',
    status: 'Pending',
  },
  {
    id: 2,
    billDate: '2023-10-05',
    billNumber: '54321',
    billAmount: 75.0,
    treatmentTotalPayment: 25.0,
    notes: 'Additional notes for another bill',
    status: 'Completed',
  },

  {
    id: 2,
    billDate: '2022-02-02',
    billNumber: '54321',
    billAmount: 900.0,
    treatmentTotalPayment: 25.0,
    notes: 'Additional notes for another bill',
    status: 'Completed',
  },
  // Add more dummy data items here
];

const itemsPerPage = 2;

const Billss = () => {
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
        <div className="bill2-total">
          <div className="billborderin2-total">
            <button className="bill2-printbutton">Print</button>
            <button className="bill2-genbillbutton">Generate Bill (0)</button>
          </div>
          <div>
            <table className="bill2-table">
              <thead className="bill2-thead">
                <tr className="bill2-headrow">
                  <th className="bill2-tableselectall">Select All</th>
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
                {currentData.map((data) => (
                  <tr className="bill2-headrow" key={data.id}>
                    <td className="bill2-td">1234</td>
                    <td className="bill2-td">{data.billDate}</td>
                    <td className="bill2-td">{data.billNumber}</td>
                    <td className="bill2-td">{data.billAmount}</td>
                    <td className="bill2-td">{data.treatmentTotalPayment}</td>
                    <td className="bill2-td">{data.notes}</td>
                    <td className="bill2-td">{data.status}</td>
                    <td className="bill2-td">no</td>
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

export default Billss;
