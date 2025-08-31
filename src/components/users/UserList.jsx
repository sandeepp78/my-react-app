import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onDelete }) => {
  if (users.length === 0) {
    return <p>No users found. Add one!</p>;
  }

  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
