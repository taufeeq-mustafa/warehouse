import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import StaffDashboard from "./pages/StaffDashboard";
import FinanceHub from "./pages/FinanceHub";
import ManageOrders from "./pages/ManageOrders";
import SupplierManagement from "./pages/SupplierManagement";
import ManageProducts from "./pages/ManageProducts";
import AddNewProduct from "./pages/AddNewProduct";
import TrackProduct from "./pages/TrackProduct";
import ProductDetails from "./pages/ProductDetails";
import GenerateBarcode from "./pages/GenerateBardcode";
import InventoryReport from './pages/InventoryReport';
import SalesReport from './pages/SalesReport';
import ProductEntry from "./pages/ProductEntry";
import StockAlert from "./pages/StockAlert";
import StaffManageProducts from "./pages/StaffManageProducts";
import StaffSupplierManagement from "./pages/StaffSupplierManagement";
import StaffManageOrders from "./pages/StaffManageOrders";

const App = () => {
  // Shared products state
  const [products, setProducts] = useState([
    { barcode: "BS782719", name: "Wood Chair", price: 13500, stock: 6 },
    { barcode: "FRE7853", name: "Dining Table", price: 45500, stock: 2 },
    { barcode: "GRF587", name: "King Bed", price: 60000, stock: 9 },
    { barcode: "GTF89745", name: "Sofa Set", price: 38000, stock: 7 },
    { barcode: "DFE425", name: "Wall Panel", price: 40000, stock: 0 },
    { barcode: "FTD45786", name: "Ring Table", price: 13500, stock: 5 },
  ]);

  // Handler to add a new product
  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <Router>
      {/* ToastContainer for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard products={products} />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/finance" element={<FinanceHub />} />
        <Route path="/orders" element={<ManageOrders />} />
        <Route path="/suppliers" element={<SupplierManagement />} />
        <Route
          path="/products"
          element={
            <ManageProducts
              products={products}
              onAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/add-product"
          element={<AddNewProduct onAddProduct={handleAddProduct} />}
        />
        <Route path="/track-product" element={<TrackProduct />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/generate-barcode" element={<GenerateBarcode />} />
        <Route path="/inventory-report" element={<InventoryReport />} />
        <Route path="/sales-report" element={<SalesReport />} />
        <Route path="/product-entry" element={<ProductEntry />} />
        <Route path="/stock-alerts" element={<StockAlert />} />
        <Route path="/staff-manage-products" element={<StaffManageProducts />} />
        <Route path="/staff-suppliers-management" element={<StaffSupplierManagement />} />
        <Route path="/staff-manage-orders" element={<StaffManageOrders />} 

        
        
        />

      </Routes>
    </Router>
  );
};

export default App;
