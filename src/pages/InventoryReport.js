import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles.css';

const InventoryReport = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData = [
          { id: 1, name: 'Laptop', quantity: 50, unitPrice: 1200, category: 'Electronics' },
          { id: 2, name: 'Mouse', quantity: 200, unitPrice: 20, category: 'Electronics' },
          { id: 3, name: 'Keyboard', quantity: 150, unitPrice: 50, category: 'Electronics' },
          { id: 4, name: 'T-shirt', quantity: 100, unitPrice: 25, category: 'Clothing' },
          { id: 5, name: 'Jeans', quantity: 75, unitPrice: 40, category: 'Clothing' },
        ];

        setInventoryData(mockData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading inventory data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="inventory-container">
      <Sidebar />
      <main className="inventory-content">
        <h1>Inventory Report</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Category</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.unitPrice}</td>
                <td>{item.category}</td>
                <td>${item.quantity * item.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default InventoryReport;
