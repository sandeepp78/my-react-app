import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUserPage() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userToEdit = storedUsers.find((user) => user.id === parseInt(id));
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = storedUsers.map((user) =>
      user.id === parseInt(id) ? { ...user, name, email } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/"); // redirect after update
  };

  return (
    <div className="card">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate} className="form">
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
          Update User
        </button>
      </form>
    </div>
  );
}



