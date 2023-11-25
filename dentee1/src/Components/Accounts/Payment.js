import "./Payment.css";
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
import React, { useState, useEffect } from "react";
import axios from "axios";

function calculateTotal(data) {
  return data.reduce((total, payment) => total + payment.treatmentPayment, 0);
}

function Payment() {
  const [payments, setPayments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [statusOptions, setStatusOptions] = useState(["Active", "Inactive"]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isPopupVisible, setPopupVisisble]= useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/payments?search=${searchKeyword}`
      );
      setPayments(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchKeyword, currentPage]);

  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  useEffect(() => {
    // Fetch payments from the backend
    axios
      .get("http://localhost:5000/api/payments")
      .then((response) => setPayments(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= payments.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (paymentId) => {
    // Find the payment with the given paymentId
    const paymentToEdit = payments.find((payment) => payment._id === paymentId);
    // Set the selected payment for editing
    setSelectedPayment(paymentToEdit);
    setPopupVisisble(true);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "status") {
      // Update the selectedPayment state when form fields change
      setSelectedPayment({
        ...selectedPayment,
        [e.target.name]: e.target.value === "Select" ? null : value,
      });
    } else {
      setSelectedPayment({
        ...selectedPayment,
        [name]: value,
      });
    }
  };

  const handleSaveEdit = () => {
    // Add logic to save the edited payment to the backend
    axios
      .put(
        `http://localhost:5000/api/payments/${selectedPayment._id}`,
        selectedPayment
      )

      .then((response) => {
        console.log("Successfully saved edited payment:", response.data);
        // Clear the selectedPayment state after saving
        setSelectedPayment(null);
        // Update the payments state with the edited payment
        const updatedPayments = payments.map((payment) =>
          payment._id === selectedPayment._id ? response.data : payment
        );
        setPayments(updatedPayments);
      })
      .catch((error) => {
        console.error("Error updating payment:", error);
        // Handle the error appropriately
      });
  };

  const handleCancelEdit = () => {
    // Clear the selectedPayment state when canceling the edit
    setSelectedPayment(null);
    setPopupVisisble(false);
  };

  const handleDelete = (paymentId) => {
    // Add logic for deleting the payment with the given paymentId
    axios
      .delete(`http://localhost:5000/api/payments/${paymentId}`)
      .then((response) => {
        console.log(`Successfully deleted payment with id ${paymentId}`);
        // Handle any additional logic after deletion
        setPayments(payments.filter((payment) => payment._id !== paymentId));
      })
      .catch((error) => {
        console.error("Error deleting payment:", error);
        // Handle the error appropriately
      });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <div className="pay-Body">
          <div className="pay-head">
            <div className="pay-icon">
              <Link to="/HomePage">
                <AiOutlineArrowLeft />
              </Link>
            </div>
            <div className="pay-acc-1">Accounts / Payments</div>
          </div>
          <div className="pay-selc">
            <div>
              <input type="date" className="pay-date-from"></input>
            </div>
            <div className="pay-d-2">to</div>
            <div>
              <input type="date" className="pay-date-to"></input>
            </div>
            <button className="pay-view-re"> View Receipt</button>
            <button className="pay-excel">Export To Excel</button>
            <Link to="/Addpayment">
              <button className="pay-newpay">Add New Payment</button>
            </Link>
          </div>

          <div className="search-containerpayment">
            <input
              className="search-barpayment"
              type="text"
              placeholder="Search"
              value={searchKeyword}
              onChange={handleSearchInputChange}
            />
            <button className="search-btnpayment">
              <BiSearch />
            </button>
          </div>

          <div>
            <table className="pay-table-nikhil">
              <thead className="payment-thread">
                <tr className="payment-tr">
                  <th className="pay-table-head">Receipt Date</th>
                  <th className="pay-table-head">Receipt Number</th>
                  <th className="pay-table-head">Patient Name</th>
                  <th className="pay-table-head">Treatment Payment</th>
                  <th className="pay-table-head">Status Description</th>
                  <th className="pay-table-head">Action</th>
                </tr>
              </thead>
              {currentItems.map((payment) => (
                <tr key={payment._id} className="pay-some-1">
                  <td>{payment.receiptDate}</td>
                  <td>{payment.receiptNumber}</td>
                  <td>{payment.patientName}</td>
                  <td>{payment.treatmentPayment}</td>
                  <td>{payment.statusDescription}</td>
                  <td>
                    <Popup
                      trigger={
                        <div className="action-buttons">
                          <button className={`Admin-button6 ${isPopupOpen ? 'active ' : ''}`}>
                            <IoSettings className="React-icons123" />
                          </button>
                        </div>
                      }
                      position="bottom left"
                      onOpen={() => setPopupOpen(true)}
        onClose={() => setPopupOpen(false)}
                    >
                      {selectedPayment ? (
                        <div className="popup-container">
                          <label className="popup-label">Receipt Date</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="receiptDate"
                            value={selectedPayment.receiptDate}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Receipt Number</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="receiptNumber"
                            value={selectedPayment.receiptNumber}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Patient Name</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="patientName"
                            value={selectedPayment.patientName}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">
                            Treatment Payment
                          </label>
                          <input
                            className="popup-input"
                            type="text"
                            name="treatmentPayment"
                            value={selectedPayment.treatmentPayment}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">
                            Status Description
                          </label>
                          <select
                            className="popup-input"
                            type="text"
                            name="statusDescription"
                            value={
                              selectedPayment.statusDescription || "Select"
                            }
                            onChange={handleEditFormChange}
                          >
                            <option value="Select" disabled>
                              Select
                            </option>
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
                          <button onClick={() => handleEdit(payment._id)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(payment._id)}>
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
          <div className="pay-total">
            Grand Total:
            <input type="text" disabled value={calculateTotal(currentItems)} />
          </div>

          <div className="pat-foot">
            <button
              className="but-page-1"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className="pat-bottle">{currentPage}</p>
            <button
              className="but-page-1"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
