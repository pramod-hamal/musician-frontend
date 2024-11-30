"use client";
import { useState } from "react";
import AddMusicForm from "./AddMusicForm";

export default function AddMusic() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add Music
      </button>

      {isModalOpen && <AddMusicForm closeModal={closeModal} />}
    </>
  );
}
