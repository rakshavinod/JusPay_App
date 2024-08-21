import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "tailwindcss/tailwind.css";

console.log("hi");

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

