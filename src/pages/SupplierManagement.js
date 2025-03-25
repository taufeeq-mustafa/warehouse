import React, { useState } from "react";
import "../styles.css";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const SupplierManagement = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [suppliers, setSuppliers] = useState([
    { id: "OI-7429", name: "Ali Khan", number: "03012345678", balance: 98000 },
    { id: "OI-1558", name: "Ajmal Yasin", number: "03098765432", balance: 0 },
    { id: "OI-1507", name: "Yasir Hussain", number: "03111222333", balance: 78500 },
    { id: "OI-15886", name: "Ahmed Faiz", number: "03219876543", balance: 58540 },
    { id: "OI-5805", name: "Faizan Khan", number: "03056789012", balance: 68000 },
    { id: "OI-97804", name: "Junaid Sheikh", number: "03123456789", balance: 1554000 },
  ]);

  const [newSupplier, setNewSupplier] = useState({
    id: "",
    name: "",
    number: "",
    balance: "",
  });

  const handleSave = () => {
    alert("Suppliers data saved.");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setNewSupplier({ id: "", name: "", number: "", balance: "" });
  };

  const handleInputChange = (e) => {
    setNewSupplier({ ...newSupplier, [e.target.name]: e.target.value });
  };

  const handleAddSupplier = () => {
    if (!newSupplier.id || !newSupplier.name || !newSupplier.number || !newSupplier.balance) {
      alert("All fields are required.");
      return;
    }

    setSuppliers([...suppliers, { ...newSupplier, balance: parseFloat(newSupplier.balance) }]);
    closeForm();
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Supplier Management</h1>
          <div className="actions">
            <button className="action-button" onClick={handleSave}>
              Save
            </button>
            <button className="action-button" onClick={handlePrint}>
              Print
            </button>
          </div>
        </header>

        <section className="info-section">
          <div className="info-card">
            <span className="icon">📈</span>
            <h3>Total Suppliers</h3>
            <p>{suppliers.length}</p>
          </div>
          <div className="info-card">
            <span className="icon">✅</span>
            <h3>Active</h3>
            <p>{suppliers.filter((s) => s.balance > 0).length}</p>
          </div>
          <div className="info-card">
            <span className="icon">⏸️</span>
            <h3>Inactive</h3>
            <p>{suppliers.filter((s) => s.balance === 0).length}</p>
          </div>
        </section>

        <section className="suppliers-section">
          <div className="section-actions">
            <button className="action-button" onClick={openForm}>
              Add Supplier
            </button>
            <button className="action-button">Export List</button>
          </div>

          <div className="suppliers-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Balance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier) => (
                  <tr key={supplier.id}>
                    <td>
                      <a href={`/supplier/${supplier.id}`} className="supplier-id-link">
                        {supplier.id}
                      </a>
                    </td>
                    <td>{supplier.name}</td>
                    <td>{supplier.number}</td>
                    <td style={{ color: supplier.balance > 0 ? "red" : "black" }}>
                      PKR {supplier.balance.toLocaleString()}
                    </td>
                    <td>
                      <button className="table-action-btn" onClick={() => handleNavigation(`/supplier/${supplier.id}`)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <h2>Add Supplier</h2>
              <label>Supplier ID:</label>
              <input type="text" name="id" value={newSupplier.id} onChange={handleInputChange} />
              <label>Name:</label>
              <input type="text" name="name" value={newSupplier.name} onChange={handleInputChange} />
              <label>Contact Number:</label>
              <input type="text" name="number" value={newSupplier.number} onChange={handleInputChange} />
              <label>Balance:</label>
              <input type="number" name="balance" value={newSupplier.balance} onChange={handleInputChange} />
              <div className="modal-actions">
                <button className="modal-button" onClick={handleAddSupplier}>Save</button>
                <button className="modal-button cancel" onClick={closeForm}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SupplierManagement;
