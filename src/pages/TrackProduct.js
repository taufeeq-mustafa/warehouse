import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const TrackProduct = () => {
  const [productName, setProductName] = useState("");
  const [barcode, setBarcode] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleTrack = (e) => {
    e.preventDefault();
    // Simulate a product tracking response
    if (!productName && !barcode) {
      alert("Please enter either a product name or a barcode to track.");
      return;
    }
    alert(`Tracking product: ${productName || barcode}`);
  };

  const handleNavigation = (path) => {
    navigate(path); // Use the navigate function
  };

  return (
    <main className="dashboard-content">
      <h2>Track Product</h2>
      <form className="track-product-form" onSubmit={handleTrack}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="barcode">Barcode</label>
          <input
            type="text"
            id="barcode"
            placeholder="Enter barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
        </div>

        <button type="submit" className="track-button">
          Track Product
        </button>
      </form>
      <Sidebar />
    </main>
  );
};

export default TrackProduct;