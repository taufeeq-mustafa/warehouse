import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AddNewProduct from "./AddNewProduct";
import GenerateBarcode from "./GenerateBardcode";
import { Link, Route, Routes } from 'react-router-dom';
import TrackProduct from "./TrackProduct";
import boxesImage from "../images/boxes.png";
import deliveryBoxImage from "../images/delivery-box.png";
import warningImage from "../images/warning.png";
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { barcode: "BS782719", name: "Wood Chair", price: 13500, stock: 6 },
    { barcode: "FRE7853", name: "Dining Table", price: 45500, stock: 2 },
    { barcode: "GRF587", name: "King Bed", price: 60000, stock: 9 },
    { barcode: "GTF89745", name: "Sofa Set", price: 38000, stock: 7 },
    { barcode: "DFE425", name: "Wall Panel", price: 40000, stock: 0 },
    { barcode: "FTD45786", name: "Ring Table", price: 13500, stock: 5 },
  ]);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showGenerateBarcode, setShowGenerateBarcode] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setShowAddProduct(false);
  };

  const handleSave = () => {
    alert("Product data saved.");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleTrackProduct = () => {
    navigate('/track-product');
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Manage Products</h1>
        </header>

        <section className="info-section">
          <div className="info-card">
            <span className="icon">
              <img
                src={boxesImage}
                alt="Total Products"
                style={{ width: "50px", height: "50px" }}
              />
            </span>
            <h3>Total Products</h3>
            <p>{products.length}</p>
          </div>
          <div className="info-card">
            <span className="icon">
              <img
                src={deliveryBoxImage}
                alt="In Stock"
                style={{ width: "50px", height: "50px" }}
              />
            </span>
            <h3>In Stock</h3>
            <p>{products.filter((p) => p.stock > 0).length}</p>
          </div>
          <div className="info-card">
            <span className="icon">
              <img
                src={warningImage}
                alt="Out of Stock"
                style={{ width: "50px", height: "50px" }}
              />
            </span>
            <h3>Out of Stock</h3>
            <p>{products.filter((p) => p.stock === 0).length}</p>
          </div>
        </section>

        <section className="products-section">
          <div className="section-actions">
            <button className="action-button" onClick={handleSave}>
              Save
            </button>
            <button className="action-button" onClick={handlePrint}>
              Print
            </button>
            <button
              className="action-button"
              onClick={() => setShowGenerateBarcode(true)}
            >
              Print Barcode
            </button>
            <button
              className="action-button"
              onClick={handleTrackProduct}
            >
              Track Product
            </button>
            <button
              className="action-button add-new"
              onClick={() => setShowAddProduct(true)}
            >
              Add New Product
            </button>
          </div>

          <div className="products-table">
            <table>
              <thead>
                <tr>
                  <th>Barcode</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.barcode}>
                    <td>{product.barcode}</td>
                    <td>{product.name}</td>
                    <td>PKR {product.price.toLocaleString()}</td>
                    <td>{product.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {showAddProduct && (
          <div className="modal">
            <div className="modal-content">
              <AddNewProduct
                onAddProduct={handleAddProduct}
                onClose={() => setShowAddProduct(false)}
              />
            </div>
          </div>
        )}
        {showGenerateBarcode && (
          <div className="modal">
            <div className="modal-content">
              <button
                className="close-button"
                onClick={() => setShowGenerateBarcode(false)}
              >
                ×
              </button>
              <GenerateBarcode />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ManageProducts;