import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Import the global styles

const ProductEntry = ({ onAddProduct }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    barcode: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.barcode || !product.price || !product.stock) {
      alert("Please fill all fields!");
      return;
    }

    const newProduct = {
      ...product,
      price: parseFloat(product.price),
      stock: parseInt(product.stock),
    };

    onAddProduct(newProduct);
    alert("Product added successfully!");
    navigate("/staff-dashboard");
  };

  return (
    <div className="product-entry-container">
      <form className="product-entry-form" onSubmit={handleSubmit}>
        <h2>Product Entry</h2>
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
        <input type="text" name="barcode" placeholder="Barcode" value={product.barcode} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductEntry;
