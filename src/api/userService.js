import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Get all users
export const getUsers = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch users");
  }
};

// Get single user by id
export const getUser = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch user");
  }
};

// Create new user
export const createUser = async (user) => {
  try {
    const res = await axios.post(API_URL, user);
    return res.data;
  } catch (err) {
    throw new Error("Failed to create user");
  }
};

// Update user
export const updateUser = async (id, user) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, user);
    return res.data;
  } catch (err) {
    throw new Error("Failed to update user");
  }
};

// Delete user
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (err) {
    throw new Error("Failed to delete user");
  }
};
