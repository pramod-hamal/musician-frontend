"use client";
import { IUser } from "@/core/interface/login-response.interface";
import { useState } from "react";
import EditUserForm from "../updateUser/UpdateUserForm";

export default function EditUser({ user }: { user: IUser }) {
    user.password = "";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
    console.log("user i ", user);
  return (
    <>
      <button
        onClick={() => {
          openModal();
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Edit
      </button>

      {isModalOpen && (
        <EditUserForm closeModal={closeModal} initialValues={user} />
      )}
    </>
  );
}
