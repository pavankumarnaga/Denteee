import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Bankdetails.css";
import axios from "axios";

function Bankdetails() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bankDepositData, setBankDepositData] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/bankdeposit?search=${searchQuery}`
      );
      setBankDepositData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchQuery, currentPage]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    // Fetch petty cash data from the backend
    axios
      .get("http://localhost:5000/api/bankdeposit")
      .then((response) => setBankDepositData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bankDepositData.slice(indexOfFirstItem, indexOfLastItem);

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= bankDepositData.length;

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(bankDepositData.length / itemsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
// Convert searchQuery to lowercase
const lowercaseSearchQuery = searchQuery.toLowerCase();

    // Fetch data based on searchQuery if it exists, otherwise fetch all data
    const apiUrl = searchQuery
      ? `http://localhost:5000/api/bankDeposit?search=${lowercaseSearchQuery}`
      : "http://localhost:5000/api/bankDeposit";

      axios
      .get(apiUrl)
      .then((response) => {
        // Convert data to lowercase for case-insensitive comparison
        const lowercaseData = response.data.map((entry) => ({
          ...entry,
          date: entry.date.toLowerCase(),
          bankName: entry.bankName.toLowerCase(),
          branch: entry.branch.toLowerCase(),
          accountName: entry.accountName.toLowerCase(),
          transactionId: entry.transactionId.toLowerCase(),
          amount: entry.amount.toLowerCase(),
        }));
  
        // Filter data based on the lowercase search query
        const filteredData = lowercaseData.filter((entry) =>
          Object.values(entry).some((value) => value.includes(lowercaseSearchQuery))
        );
  
        // Set the filtered data to the state
        setBankDepositData(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="wrapperwa">
        <div id="content-wrapper" className="main-content">
          <div id="content">
            <div className="main-headwra">
              <div className="mainhead-iconwra">
                <Link to="/Homepage">
                  <AiOutlineArrowLeft />
                </Link>
              </div>
              <div className="main-headingwra">Accounts/ Bank Deposit</div>
            </div>
            <br></br>
            <div className="dashboardrowdate">
              <input type="date" className="inputField" />
              <div className="tototo">to</div>
              <input type="date" className="inputField" />
            </div>
            <div className="Bank">
              <div className="search-containerbank">
                <input
                  className="search-barbank"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <button className="search-btnbank" >
                  <BiSearch />
                </button>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/addbankdeposit">
                <button className="actionButtonvaa1">Add Bank Deposit</button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="actionButtonva">Delete Bank Deposit</button>
            </div>

            <table className="table11">
              <thead className="tableHeader">
                <tr className="trtablebank">
                  <th className="tableColumn">Select</th>
                  <th className="tableColumn">Date</th>
                  <th className="tableColumn">Bank Name</th>
                  <th className="tableColumn">Branch</th>
                  <th className="tableColumn">Account Name</th>
                  <th className="tableColumn">Transaction Id</th>
                  <th className="tableColumn">Amount</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((entry) => (
                  <tr key={entry.id}>
                    <td className="tableColumn">{entry.id}</td>
                    <td className="tableColumn">{entry.date}</td>
                    <td className="tableColumn">{entry.bankName}</td>
                    <td className="tableColumn">{entry.branch}</td>
                    <td className="tableColumn">{entry.accountName}</td>
                    <td className="tableColumn">{entry.transactionId}</td>
                    <td className="tableColumn">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      </div>
    </>
  );
}

export default Bankdetails;
