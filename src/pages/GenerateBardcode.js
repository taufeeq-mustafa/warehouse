import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BarcodeGenerator from "../components/BarcodeGenerator";

const GenerateBarcode = ({ onClose }) => {
  const [productName, setProductName] = useState("");
  const [barcode, setBarcode] = useState("");
  const [printQuantity, setPrintQuantity] = useState(1);
  const [generatedBarcodes, setGeneratedBarcodes] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!productName || !barcode) {
      toast.error("Please provide product name and barcode.");
      return;
    }

    const barcodes = Array(printQuantity)
      .fill()
      .map(() => barcode);
    setGeneratedBarcodes(barcodes);

    // Display success notification
    toast.success("Barcode generated successfully!");

    // Close the form after 2 seconds
    setTimeout(() => {
      if (onClose) {
        onClose(); // Call the onClose prop to close the form
      } else {
        // Fallback: Reset the form state
        setProductName("");
        setBarcode("");
        setPrintQuantity(1);
        setGeneratedBarcodes([]);
      }
    }, 2000);
  };

  return (
    <div className="generate-barcode">
      <Header />
      <Sidebar />
      <main>
        <h2>Generate Barcode</h2>
        <form onSubmit={handleGenerate}>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <label>Barcode</label>
          <input
            type="text"
            placeholder="Enter unique barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            required
          />

          <label>Print Quantity</label>
          <input
            type="number"
            placeholder="Enter quantity"
            value={printQuantity}
            onChange={(e) => setPrintQuantity(e.target.value)}
            min="1"
            required
          />

          <button type="submit">Generate Barcode</button>
        </form>

        {generatedBarcodes.length > 0 && (
          <div className="barcode-print-view">
            <h3>Barcode Print View</h3>
            <div className="barcode-container">
              {generatedBarcodes.map((code, index) => (
                <div key={index} className="barcode-item">
                  <BarcodeGenerator value={code} />
                  <p>{productName}</p>
                </div>
              ))}
            </div>
            <button onClick={() => window.print()}>Print</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default GenerateBarcode;