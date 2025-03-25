import React, { useState } from 'react';
import '../styles.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import StaffSidebar from '../components/StaffSidebar';

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const productionData = [
    { name: 'Apr', value: 12000 },
    { name: 'May', value: 20000 },
    { name: 'Jun', value: 15000 },
    { name: 'Jul', value: 18000 },
    { name: 'Aug', value: 22000 },
    { name: 'Sep', value: 25000 },
    { name: 'Oct', value: 30000 },
    { name: 'Nov', value: 35000 },
    { name: 'Dec', value: 40000 }
  ];

  const incomeData = [
    { name: 'Jan', value: 10000 },
    { name: 'Feb', value: 15000 },
    { name: 'Mar', value: 20000 },
    { name: 'Apr', value: 25000 },
    { name: 'May', value: 30000 },
    { name: 'Jun', value: 40000 },
    { name: 'Jul', value: 35000 },
    { name: 'Aug', value: 30000 },
    { name: 'Sep', value: 25000 },
    { name: 'Oct', value: 20000 },
    { name: 'Nov', value: 15000 },
    { name: 'Dec', value: 10000 }
  ];

  const pieData = [
    { name: 'Q1', value: 24000 },
    { name: 'Q2', value: 35000 },
    { name: 'Q3', value: 41000 },
    { name: 'Q4', value: 30000 }
  ];

  const ordersData = [
    { name: 'Delivered', value: 70 },
    { name: 'Booked', value: 30 }
  ];

  const handleLogout = () => {
    navigate('/');
    alert('Logged out successfully!');
  };

  return (
    <div className="dashboard-container">
      <StaffSidebar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Staff Dashboard</h1>
        </header>
        
        <section className="info-section">
          <div className="info-card" onClick={() => navigate('/barcode-management')}>
            <span className="icon">🔖</span>
            <h3>Print Barcode</h3>
          </div>
          <div className="info-card" onClick={() => navigate('/product-entry')}>
            <span className="icon">📦</span>
            <h3>Product Entry</h3>
          </div>
          <div className="info-card" onClick={() => navigate('/stock-alerts')}>
            <span className="icon">⚠️</span>
            <h3>Stock Alerts</h3>
          </div>
          <div className="info-card" onClick={() => navigate('/order-processing')}>
            <span className="icon">📋</span>
            <h3>Order Processing</h3>
          </div>
          <div className="info-card" onClick={() => navigate('/staff-manage-products')}>
            <span className="icon">📦</span>
            <h3>Manage Products</h3>
            <p>156 Items</p>
          </div>
        </section>

        <section className="charts-section two-columns">
          <div className="chart">
            <h3>Production per Month</h3>
            <BarChart width={500} height={300} data={productionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8E44AD" />
            </BarChart>
          </div>
          <div className="chart">
            <h3>Income per Month</h3>
            <BarChart width={500} height={300} data={incomeData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#F39C12" />
            </BarChart>
          </div>
        </section>
        <section className="charts-section two-columns">
          <div className="chart">
            <h3>Income per Quarter</h3>
            <PieChart width={500} height={300}>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? '#2980B9' : '#1ABC9C'}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="chart">
            <h3>Orders Breakdown</h3>
            <PieChart width={500} height={300}>
              <Pie data={ordersData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                {ordersData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? '#2ECC71' : '#E74C3C'}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </section>
        {showLogoutConfirm && (
          <div className="logout-confirm">
            <p>Are you sure you want to logout?</p>
            <button className="confirm-button" onClick={handleLogout}>
              Yes
            </button>
            <button
              className="cancel-button"
              onClick={() => setShowLogoutConfirm(false)}
            >
              No
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default StaffDashboard;
