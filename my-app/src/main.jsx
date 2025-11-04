import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Projects from "./Projects.jsx";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  </BrowserRouter>
);