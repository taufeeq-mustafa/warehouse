import React from "react";

const GenerateBarcode = () => {
  const handleGenerate = (e) => {
    e.preventDefault();
    alert("Barcode generated successfully.");
  };

  return (
    <div>
      <h2>Generate Barcode</h2>
      <form onSubmit={handleGenerate}>
        <label>Product Name</label>
        <input type="text" placeholder="Enter product name" required />

        <label>Print Quantity</label>
        <input type="number" placeholder="Enter quantity" required />

        <button type="submit">Generate Barcode</button>
      </form>
    </div>
  );
};

export default GenerateBarcode;
