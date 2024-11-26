'use client';
import React, { useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Sam Wilson", email: "sam.wilson@example.com" },
    { id: 4, name: "Lisa Ray", email: "lisa.ray@example.com" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;

  const totalPages = Math.ceil(users.length / usersPerPage);

  // Pagination logic
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Add User
        </button>
      </header>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User List</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="text-gray-700 hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2 border text-center">{user.id}</td>
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrevPage}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 transition"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 transition"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
