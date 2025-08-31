import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...storedUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/"); // redirect immediately
  };

  return (
    <div className="card">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn primary">
          Add User
        </button>
      </form>
    </div>
  );
}




