import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AiOutlineArrowLeft,
  AiOutlineStepBackward,
  AiOutlineStepForward,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Bill.css";

function calculateTotal(data) {
  return data.reduce((total, bill) => total + bill.billAmount, 0);
}
function Bill() {
  const [bills, setBills] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [selectedBill, setSelectedBill] = useState(null);
  const [statusOptions, setStatusOptions] = useState(["Active", "Inactive"]);
  const [searchKeyword, setSearchKeyword] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(
            `http://localhost:5000/api/bills?search=${searchKeyword}&page=${currentPage}`  
        );
        setBills(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchKeyword, currentPage]);
  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };
    

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBills = bills.slice(indexOfFirstItem, indexOfLastItem);
 
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= bills.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleEdit = (billId) => {
    const billToEdit = bills.find((bill) => bill._id === billId);
    setSelectedBill(billToEdit);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "status"){
    setSelectedBill({
      ...selectedBill,
      [name]: value === "Select" ? null:value,
    });
  }else{
setSelectedBill({
  ...selectedBill,
  [name]: value,
})
  }
  };

  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:5000/api/bills/${selectedBill._id}`, selectedBill)
      .then((response) => {
        console.log("Successfully saved edited bill:", response.data);
        setSelectedBill(null);

        const updatedBills = bills.map((bill) =>
          bill._id === selectedBill._id ? response.data : bill
        );
        setBills(updatedBills);
      })
      .catch((error) => {
        console.error("Error updating bill:", error);
      });
  };

  const handleCancelEdit = () => {
    setSelectedBill(null);
  };

  const handleDelete = (billId) => {
    axios
      .delete(`http://localhost:5000/api/bills/${billId}`)
      .then((response) => {
        console.log(`Successfully deleted bill with id ${billId}`);
        setBills(bills.filter((bill) => bill._id !== billId));
      })
      .catch((error) => {
        console.error("Error deleting bill:", error);
      });
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <div className="bill-Body">
          <div className="bill-head">
            <div className="bill-icon">
              <Link to="/HomePage">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className="bill-acc-1">Accounts / Bills</div>
          </div>
          <div className="bill-selc">
            <div>
              <input type="date" className="bill-date-from"></input>
            </div>
            <div className="bill-d-2">to</div>
            <div>
              <input type="date" className="bill-date-to"></input>
              &nbsp;
              <button className="bill-view-re"> View Receipt</button> &nbsp;
              <button className="bill-excel">Export To Excel</button>
              &nbsp;&nbsp;
              <Link to="/addbills">
                <button className="bill-newpay">Add New Payment</button>
              </Link>
            </div>
          </div>
          <div className="search-containerbills">
            <input
              className="search-barbills"
              type="text"
              placeholder="Search"
              value={searchKeyword}
    onChange={handleSearchInputChange}
            />
            <button className="search-btnbills">
              <BiSearch />
            </button>
          </div>
          <div className="bill-table">
            <table className="bill-table-sunil">
              <thead className="threadbills">
                <tr className="trbills">
                  <th className="thbills">Bill Date</th>
                  <th lassName="thbills">Bill Number</th>
                  <th lassName="thbills">Patient Name</th>
                  <th lassName="thbills">Bill Amount</th>
                  <th lassName="thbills">Status</th>
                  <th lassName="thbills">Action</th>
                </tr>
              </thead>
              {currentBills.map((bill) => (
                <tr key={bill._id} className="trbills1">
                  <td>{bill.billDate}</td>
                  <td>{bill.billNumber}</td>
                  <td>{bill.patientName}</td>
                  <td>{bill.billAmount}</td>
                  <td>{bill.status}</td>
                  <td>
                    <Popup
                      trigger={
                        <div className="action-buttons">
                          <button className="Admin-button6">
                            <IoSettings className="React-icons123" />
                          </button>
                        </div>
                      }
                      position="bottom left"
                    >
                      {selectedBill ? (
                        <div className="popup-container">
                          <label className="popup-label">Bill Date</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="billDate"
                            value={selectedBill.billDate}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Bill Number</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="billNumber"
                            value={selectedBill.billNumber}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Patient Name</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="patientName"
                            value={selectedBill.patientName}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Bill Amount</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="billAmount"
                            value={selectedBill.billAmount}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Status</label>
                          <select
                            className="popup-input"
                            name="status"
                            value={selectedBill.status || "Select"}
                            onChange={handleEditFormChange}
                          >
                            <option value="Select" disabled>Select</option>
  {statusOptions.map((status) => (
    <option key={status} value={status}>
      {status}
    </option>
  ))}
</select>
<div className="popup-buttons">
  <button className="save-button" onClick={handleSaveEdit}>
    Save
  </button>
  <button className="cancel-button" onClick={handleCancelEdit}>
    Cancel
  </button>
</div>
                        </div>
                      ) : (
                        <div>
                          <button onClick={() => handleEdit(bill._id)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(bill._id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </Popup>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="bill-total">
            Grand Total : <input type="text" disabled value={calculateTotal(currentBills)} />
          </div>
          <div className="Bill-pat">
            <button
              className="Bill-22"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className="Bill-page">{currentPage}</p>
            <button
              className="Bill-22"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Bill;
