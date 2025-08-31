import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, initialData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setEmail(initialData.email || "");
      setPhone(initialData.phone || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="text"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Add User
      </button>
    </form>
  );
}

export default UserForm;


