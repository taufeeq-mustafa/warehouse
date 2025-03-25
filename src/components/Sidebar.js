import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside 
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <h2>
        <span className="icon">🏢</span>
        <span className="text">WMS Portal</span>
      </h2>
      <ul>
        <li onClick={() => handleNavigation('/dashboard')}>
          <span className="icon">📊</span>
          <span className="text">Dashboard</span>
        </li>
        <li onClick={() => handleNavigation('/finance')}>
          <span className="icon">💰</span>
          <span className="text">Finance Hub</span>
        </li>
        <li onClick={() => handleNavigation('/orders')}>
          <span className="icon">📦</span>
          <span className="text">Manage Orders</span>
        </li>
        <li onClick={() => handleNavigation('/suppliers')}>
          <span className="icon">🤝</span>
          <span className="text">Supplier Management</span>
        </li>
        <li onClick={() => handleNavigation('/products')}>
          <span className="icon">🛍️</span>
          <span className="text">Manage Products</span>
        </li>
      </ul>

      {/* Email link added here */}
      <div className="email-link">
         <a href="mailto:Zaynshah2021@gmail.com?subject=Support%20Request&body=Please%20describe%20your%20issue%20here."
            className="email-button">
          <span className="icon">📧</span>
          <span className="text">Contact Support</span>
        </a>
      </div>


      <button
        className="logout-button"
        onClick={() => navigate('/')}
      >
        <span className="icon">🚪</span>
        <span className="text">Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
