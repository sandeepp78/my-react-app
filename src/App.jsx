import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import Header from "./components/Header";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddUserPage />} />
          <Route path="/edit/:id" element={<EditUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

