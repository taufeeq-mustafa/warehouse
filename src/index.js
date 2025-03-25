// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from React 18
import App from "./App";
import "./styles.css";

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
