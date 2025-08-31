import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <h1>User Management</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add User</Link>
      </div>
    </nav>
  );
}
