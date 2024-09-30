import React, { useState, useEffect } from "react";
import { useUserDB } from "../../utils/db";
import UserList from "./UserList";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const { getAllUsers, updateUser, deleteUser, toggleUserBlock } = useUserDB();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = async (id, userData) => {
    try {
      await updateUser(id, userData);
      fetchUsers();
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleToggleBlock = async (user) => {
    try {
      await toggleUserBlock(user);
      fetchUsers();
    } catch (error) {
      console.error("Error toggling user block status:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserList
            key={user.id}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleBlock={handleToggleBlock}
          />
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
