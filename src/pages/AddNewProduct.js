import React, { useState } from "react";
import Sidebar from '../components/Sidebar';

const AddNewProduct = ({ onAddProduct, onClose }) => {
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");
  const [openingStock, setOpeningStock] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!barcode) newErrors.barcode = "Barcode is required";
    if (!name) newErrors.name = "Product name is required";
    if (!color) newErrors.color = "Product color is required";
    if (!location) newErrors.location = "Location is required";
    if (!openingStock) newErrors.openingStock = "Opening stock is required";
    if (!price) newErrors.price = "Price is required";
    if (!stock) newErrors.stock = "Stock is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newProduct = {
        barcode,
        name,
        color,
        location,
        openingStock: parseInt(openingStock),
        price: parseFloat(price),
        stock: parseInt(stock),
        description,
      };
      onAddProduct(newProduct);
      onClose();
    }
  };

  return (
    <div className="add-new-product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="barcode">Barcode:</label>
          <input
            type="text"
            id="barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
          {errors.barcode && <span className="error">{errors.barcode}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="color">Product Color:</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          {errors.color && <span className="error">{errors.color}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && <span className="error">{errors.location}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="openingStock">Opening Stock:</label>
          <input
            type="number"
            id="openingStock"
            value={openingStock}
            onChange={(e) => setOpeningStock(e.target.value)}
          />
          {errors.openingStock && <span className="error">{errors.openingStock}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <span className="error">{errors.price}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          {errors.stock && <span className="error">{errors.stock}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Add Product</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
      <Sidebar />
    </div>
  );
};

export default AddNewProduct;
