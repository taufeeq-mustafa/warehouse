import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const ProductDetails = () => {
  return (
    <div className="product-details">
      
      <Sidebar />
      <main>
        <form>
          <h2>Product Details</h2>

          <label>Product Name</label>
          <input type="text"/>

          <label>Barcode</label>
          <input type="text"/>

          <label>Quantity</label>
          <input type="number"/>

          <label>Color</label>
          <input type="text"/>

          {/* Add Product Button */}
          <button type="button" className="add-product-btn">Add Product</button>
        </form>
      </main>
    </div>
  );
};

export default ProductDetails;
