import React, { useState, useEffect } from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API (replace with your actual API call)
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API delay

        // Mock sales data (replace with real API response)
        const mockData = [
          { id: 1, name: 'Laptop', quantitySold: 15, unitPrice: 1200, category: 'Electronics' },
          { id: 2, name: 'Mouse', quantitySold: 50, unitPrice: 20, category: 'Electronics' },
          { id: 3, name: 'Keyboard', quantitySold: 30, unitPrice: 50, category: 'Electronics' },
          { id: 4, name: 'T-shirt', quantitySold: 40, unitPrice: 25, category: 'Clothing' },
          { id: 5, name: 'Jeans', quantitySold: 25, unitPrice: 40, category: 'Clothing' },
        ];

        setSalesData(mockData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading sales data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="sales-report">
      <h1>Sales Report</h1>
      <Sidebar />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity Sold</th>
            <th>Unit Price</th>
            <th>Category</th>
            <th>Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantitySold}</td>
              <td>${item.unitPrice}</td>
              <td>{item.category}</td>
              <td>${item.quantitySold * item.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;

