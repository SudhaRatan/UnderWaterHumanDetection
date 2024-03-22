import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/App";
import "./style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Navbar from "./components/Navbar";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/model" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
