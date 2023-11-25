import React from 'react';
import { Link } from 'react-router-dom';
import './Accounts.css';
import { FaMoneyBill, FaFileInvoiceDollar, FaMoneyCheckAlt, FaBook, FaPiggyBank } from 'react-icons/fa';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function HomePage() {
  return (
    <>  
    <Navbar/>
    <Sidebar/>
    
    <div className="card-container">
      <div className="card">
        <Link to="/payments">
          <FaMoneyBill />
          <span>Payment</span>
        </Link>
      </div>
      <div className="card">
        <Link to="/bills">
          <FaFileInvoiceDollar />
          <span>Bills</span>
        </Link>
      </div>
      <div className="card">
        <Link to="/pettycash">
          <FaMoneyCheckAlt />
          <span>Petty cash</span>
        </Link>
      </div>
      <div className="card">
        <Link to="/passbook">
          <FaBook />
          <span>Passbook</span>
        </Link>
      </div>
      <div className="card">
        <Link to="/bankdetails">
          < FaPiggyBank />
          <span>Bank details</span>
        </Link>
      </div>
    </div>
    </>
  );
}





export default HomePage;