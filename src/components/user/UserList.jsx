import React from "react";

const UserList = ({ user, onEdit, onDelete, onToggleBlock }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {user.username}
          </h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
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
      <p className="text-sm text-gray-500 mb-4">
        Last Login: {new Date(user.lastLogin).toLocaleString()}
      </p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onEdit(user.id, user)}
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
          onClick={() => onToggleBlock(user )}
          className={`${
            user.isBlocked
              ? "bg-green-500 hover:bg-green-700"
              : "bg-yellow-500 hover:bg-yellow-700"
          } text-white font-bold py-1 px-4 rounded`}
        >
          {user.isBlocked ? "Unblock" : "Block"}
        </button>
      </div>
    </div>
  );
};

export default UserList;
