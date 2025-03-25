import React from "react";
import "../styles.css";
import Sidebar from '../components/Sidebar';

const stockData = [
  { name: "Laptop", barcode: "123456789", quantity: 50 },
  { name: "Smartphone", barcode: "987654321", quantity: 30 },
  { name: "Headphones", barcode: "112233445", quantity: 8 }, // Low stock
  { name: "Smartwatch", barcode: "556677889", quantity: 5 }, // Low stock
  { name: "Tablet", barcode: "998877665", quantity: 40 },
  { name: "Camera", barcode: "334455667", quantity: 25 }
];

const StockAlert = () => {
  return (
    <div className="stock-alert-container">
      <h2>Stock Alert</h2>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Barcode</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((product, index) => (
            <tr
              key={index}
              className={product.quantity < 10 ? "low-stock" : ""}
            >
              <td>{product.name}</td>
              <td>{product.barcode}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Sidebar />
    </div>
    
  );
};

export default StockAlert;
