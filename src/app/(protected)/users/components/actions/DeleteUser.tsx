"use client";
import { IUser } from "@/core/interface/login-response.interface";

export default function DeleteUser({ user }: { user: IUser }) {
  const handleDelete = (id: number | undefined) => {
    console.log("Edit User with id: ", id);
  };
  return (
    <button
    onClick={() => handleDelete(user.id)}
    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
  >
    Delete
  </button>
  );
}
