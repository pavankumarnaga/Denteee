import React, { useState, useEffect } from "react";
import "./Pettycash.css";
import { AiFillPrinter, AiOutlineFilePdf } from "react-icons/ai";
import {
  AiOutlineArrowLeft,
  AiOutlineStepBackward,
  AiOutlineStepForward,
} from "react-icons/ai";
import { BsFileEarmarkExcel } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import Popup from "reactjs-popup";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

const Pettycash = () => {
  const [pettyCashData, setPettyCashData] = useState([]);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPettyCash, setSelectedPettyCash] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [openingBalance, setOpeningBalance] = useState(0);
  const [closingBalance, setClosingBalance] = useState(0);


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPettyCashData = pettyCashData.filter((item) => {
    return (
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.voucherType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.receipt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.payment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.numberOfEntries.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.narration.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  useEffect(() => {
    // Fetch petty cash data from the backend
    axios
      .get("http://localhost:5000/api/pettyCash")
      .then((response) => {
        setPettyCashData(response.data);
        console.log(response.data); // Log data to the console

        // Log the type of 'id' in the first object of the array
        console.log(
          "Data Type - pettyCashData ID:",
          typeof response.data[0].id
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    // Calculate opening balance
    const totalOpeningBalance = pettyCashData.reduce(
      (total, item) => total + parseFloat(item.openingBalance) || 0,
      0
    );
    setOpeningBalance(totalOpeningBalance);
  }, [pettyCashData]);

  useEffect(() => {
    // Calculate closing balance
    const totalPayments = pettyCashData.reduce(
      (total, item) => total + parseFloat(item.payment) || 0,
      0
    );
    setClosingBalance(openingBalance + totalPayments);
  }, [openingBalance, pettyCashData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pettyCashData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= pettyCashData.length;

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(pettyCashData.length / itemsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };
  const handleEdit = (id) => {
    console.log("Edit button clicked for item with id:", id);
    console.log("Data Type - handleEdit Parameter ID:", typeof id);

    // Find the item based on the correct property name (e.g., _id)
    const pettyCashToEdit = pettyCashData.find(
      (item) => String(item.id) === String(id)
    );

    console.log("Petty cash to edit:", pettyCashToEdit);

    setSelectedPettyCash(pettyCashToEdit);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setSelectedPettyCash({
      ...selectedPettyCash,
      [name]: value,
    });
  };

  const handleSaveEdit = () => {
    axios
      .put(
        `http://localhost:5000/api/pettyCash/${selectedPettyCash._id}`,
        selectedPettyCash
      )
      .then((response) => {
        console.log("Successfully saved edited petty cash:", response.data);
        setSelectedPettyCash(null);

        const updatedPettyCashData = pettyCashData.map((item) =>
          item._id === selectedPettyCash._id ? response.data : item
        );
        setPettyCashData(updatedPettyCashData);
      })
      .catch((error) => {
        console.error("Error updating petty cash:", error);
      });
  };

  const handleCancelEdit = () => {
    setSelectedPettyCash(null);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/pettyCash/${id}`)
      .then((response) => {
        console.log(`Successfully deleted petty cash with id ${id}`);
        setPettyCashData((prevData) =>
          prevData.filter((item) => item._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting petty cash:", error);
      });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="maincontpetty">
        <div className="petty-head">
          <div className="petty-icon">
            {" "}
            <Link to="/HomePage">
              <AiOutlineArrowLeft />
            </Link>
          </div>
          <div className="petty-acc-1">Accounts / Petty Cash</div>
        </div>

        <div className="petty-selc">
          <div>
            <input type="date" className="petty-date-from"></input>
          </div>
          <div className="petty-d-2">to</div>
          <div>
            <input type="date" className="petty-date-to"></input>
          </div>
          <input
            type="number"
            className="petty-Voacher"
            placeholder="voucher Type"
          ></input>
          <input className="petty-search" placeholder="search" value={searchTerm}
          onChange={handleSearchChange}></input>
          &nbsp;
          <select
            onChange={(e) => (window.location.href = e.target.value)}
            className="view-select"
          >
            <option>view data</option>
            <option value="/addvoucher">Add new voucher</option>
            <option value="/deletevoucher">Delete voucher</option>
          </select>
          <button className="petty-print">
            <AiFillPrinter style={{ color: "blue", fontSize: "25px" }} />
          </button>
          <button className="petty-pdf">
            <AiOutlineFilePdf style={{ color: "red", fontSize: "25px" }} />
          </button>
          <button className="petty-excel">
            <BsFileEarmarkExcel style={{ color: "green", fontSize: "25px" }} />
          </button>
        </div>

        <div className="pe8">
          <div className="pe9">Opening Balance: {openingBalance}</div>
          <div className="pe10">Closing Balance: {closingBalance}</div>
        </div>

        <div>
          <table className="petty-table-tnx">
            <thead className="threadpetty">
              <tr className="trpetty">
                <th className="petty4">Select</th>
                <th className="petty4">Date</th>
                <th className="petty4">Voucher Type</th>
                <th className="petty4">Receipt</th>
                <th className="petty4">Payment</th>
                <th className="petty4">No. of Entries</th>
                <th className="petty4">Narration</th>
                <th className="petty4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPettyCashData.map((item) => (
                <tr key={item.id}>
                  <td className="petty5">{item.id}</td>
                  <td className="petty5">{item.date}</td>
                  <td className="petty5">{item.voucherType}</td>
                  <td className="petty5">{item.receipt}</td>
                  <td className="petty5">{item.payment}</td>
                  <td className="petty5">{item.numberOfEntries}</td>
                  <td className="petty5">{item.narration}</td>
                  <td>
                    <Popup
                      trigger={
                        <div className="action-buttons">
                          <IoSettings className="React-icons123" />
                        </div>
                      }
                      position="bottom left"
                    >
                      {selectedPettyCash && selectedPettyCash.id === item.id ? (
                        <div className="popup-container">
                          <label className="popup-label">Date:</label>
                          <input
                            className="popup-input"
                            type="String"
                            name="date"
                            value={selectedPettyCash.date}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Voucher Type:</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="voucherType"
                            value={selectedPettyCash.voucherType}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Receipt:</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="receipt"
                            value={selectedPettyCash.receipt}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Payment:</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="payment"
                            value={selectedPettyCash.payment}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">No. of Entries:</label>
                          <input
                            className="popup-input"
                            type="number"
                            name="numberOfEntries"
                            value={selectedPettyCash.numberOfEntries}
                            onChange={handleEditFormChange}
                          />
                          <label className="popup-label">Narration:</label>
                          <input
                            className="popup-input"
                            type="text"
                            name="narration"
                            value={selectedPettyCash.narration}
                            onChange={handleEditFormChange}
                          />

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
                          <button onClick={() => handleEdit(item.id)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(item._id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </Popup>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </>
  );
};

export default Pettycash;
