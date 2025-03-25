import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';
import Sidebar from '../components/Sidebar';

const FinanceHub = () => {
  const navigate = useNavigate();
  const [cashIn, setCashIn] = useState(99999);
  const [cashOut, setCashOut] = useState(23999);
  const [customers, setCustomers] = useState([
    { id: "C-989", name: "Usman", invoice: "T-56", balance: 20000 },
    { id: "C-990", name: "Faraz", invoice: "T-57", balance: 60000 },
    { id: "C-991", name: "Ali", invoice: "T-58", balance: 35000 },
  ]);

  const handleCashIn = () => {
    const amount = parseInt(prompt("Enter cash-in amount:"), 10);
    if (!isNaN(amount)) {
      setCashIn(cashIn + amount);
    }
  };

  const handleCashOut = () => {
    const amount = parseInt(prompt("Enter cash-out amount:"), 10);
    if (!isNaN(amount)) {
      setCashOut(cashOut + amount);
    }
  };

  const handleAddPayment = () => {
    const id = prompt("Enter Customer ID:");
    const amount = parseInt(prompt("Enter Payment Amount:"), 10);

    if (id && !isNaN(amount)) {
      setCustomers((prevCustomers) =>
        prevCustomers.map((customer) =>
          customer.id === id
            ? { ...customer, balance: customer.balance - amount }
            : customer
        )
      );
      alert("Payment added successfully!");
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
      alert("Logged out successfully!");
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Finance Hub</h1>
        </header>
        
        <section className="info-section">
          <div className="info-card">
            <span className="icon">💵</span>
            <h3>Cash In</h3>
            <p>PKR {cashIn.toLocaleString()}</p>
          </div>
          <div className="info-card">
            <span className="icon">💸</span>
            <h3>Cash Out</h3>
            <p>PKR {cashOut.toLocaleString()}</p>
          </div>
          <div className="info-card">
            <span className="icon">💰</span>
            <h3>Net Balance</h3>
            <p>PKR {(cashIn - cashOut).toLocaleString()}</p>
          </div>
        </section>

        <section className="finance-actions">
          <button className="action-button cash-in" onClick={handleCashIn}>
            + Cash In
          </button>
          <button className="action-button cash-out" onClick={handleCashOut}>
            - Cash Out
          </button>
          <button className="action-button add-payment" onClick={handleAddPayment}>
            Add Payment
          </button>
          <button className="action-button print" onClick={handlePrint}>
            Print
          </button>
        </section>

        <section className="finance-table">
          <h2>Customer Balances</h2>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Invoice</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.invoice}</td>
                  <td>PKR {customer.balance.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default FinanceHub;
