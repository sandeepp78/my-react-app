import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user, onDelete }) => {
  return (
    <div className="user-item">
      <div>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
      </div>
      <div className="actions">
        <Link to={`/edit/${user.id}`} className="btn edit">
          Edit
        </Link>
        <button onClick={() => onDelete(user.id)} className="btn delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;

