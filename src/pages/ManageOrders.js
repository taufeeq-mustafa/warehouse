import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';
import Sidebar from '../components/Sidebar';

const ManageOrders = () => {
  const navigate = useNavigate();
  const orders = [
    {
      date: "2024-12-15",
      id: "OI-1009",
      customerName: "Ahmed Khan",
      customerNumber: "03012345678",
      product: "Sofa Set",
      status: "Delivered",
      remarks: "Satisfied",
    },
    {
      date: "2024-11-30",
      id: "OI-1008",
      customerName: "Sana Yasin",
      customerNumber: "03098765432",
      product: "Dining Table",
      status: "In Process",
      remarks: "Pending",
    },
    {
      date: "2024-11-19",
      id: "OI-1007",
      customerName: "Yasir Hussain",
      customerNumber: "03111222333",
      product: "Bed Set",
      status: "Delivered",
      remarks: "Satisfied",
    },
    {
      date: "2024-11-16",
      id: "OI-1006",
      customerName: "Zohaib Faiz",
      customerNumber: "03219876543",
      product: "Office Chair",
      status: "Processing",
      remarks: "Awaiting Confirmation",
    },
    {
      date: "2024-11-12",
      id: "OI-1005",
      customerName: "Sharjeel Khan",
      customerNumber: "03056789012",
      product: "Wardrobe",
      status: "Cancelled",
      remarks: "Order Cancelled by Customer",
    },
    {
      date: "2024-11-10",
      id: "OI-1004",
      customerName: "Hafsa Khan",
      customerNumber: "03123456789",
      product: "TV Console",
      status: "Delivered",
      remarks: "Satisfied",
    },
  ];

  const handleSave = () => {
    alert("Orders data saved.");
  };

  const handlePrint = () => {
    window.print();
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

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Manage Orders</h1>
        </header>

        <section className="info-section">
          <div className="info-card">
            <span className="icon">📦</span>
            <h3>Total Orders</h3>
            <p>{orders.length}</p>
          </div>
          <div className="info-card">
            <span className="icon">⏳</span>
            <h3>Pending</h3>
            <p>{orders.filter(order => order.status === "In Process" || order.status === "Processing").length}</p>
          </div>
          <div className="info-card">
            <span className="icon">✅</span>
            <h3>Delivered</h3>
            <p>{orders.filter(order => order.status === "Delivered").length}</p>
          </div>
        </section>

        <section className="orders-section">
          <div className="orders-actions">
            <button className="action-button" onClick={handleSave}>
              Save
            </button>
            <button className="action-button" onClick={handlePrint}>
              Print
            </button>
          </div>

          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Customer Number</th>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.date}</td>
                    <td>{order.id}</td>
                    <td>{order.customerName}</td>
                    <td>{order.customerNumber}</td>
                    <td>{order.product}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td
                      className={
                        order.remarks.includes("Pending") ? "text-pending" : ""
                      }
                    >
                      {order.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManageOrders;
