import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../api/userService";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const handleDelete = (id) => {
    deleteUser(id);
    setUsers(getUsers());
  };

  return { users, setUsers, handleDelete };
};

export default useUsers;
