import React, { useState } from "react";
import EditUserForm from "./EditUserForm";

const UserList = ({ user, onEdit, onDelete, onToggleBlock, fetchUsers }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{user.username}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="mb-4">
        <p>
          <strong>Location:</strong> {user.location}
        </p>
        <p>
          <strong>Job Title:</strong> {user.jobTitle}
        </p>
      </div>
      <div className="mb-4">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            user.isBlocked
              ? "bg-red-100 text-red-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {user.isBlocked ? "Blocked" : "Active"}
        </span>
      </div>
      <div className="mb-4">
       Last Login: {new Date(user.lastLogin).toLocaleString()}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => onToggleBlock(user)}
          className={`${
            user.isBlocked
              ? "bg-green-500 hover:bg-green-700"
              : "bg-yellow-500 hover:bg-yellow-700"
          } text-white font-bold py-1 px-4 rounded`}
        >
          {user.isBlocked ? "Unblock" : "Block"}
        </button>
      </div>
      {isEditing && (
        <EditUserForm
          user={user}
          onEdit={onEdit}
          onClose={handleEditClose}
          fetchUsers={fetchUsers}
        />
      )}
    </div>
  );
};

export default UserList;
