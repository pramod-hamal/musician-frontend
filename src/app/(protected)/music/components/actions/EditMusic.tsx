"use client";
import { IMusic } from "@/core/interface/music.interface";
import { useState } from "react";
import EditUserForm from "../updateMusic/UpdateMusicForm";

export default function EditMusic({ music }: { music: IMusic }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
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
        <EditUserForm closeModal={closeModal} initialValues={music as any} />
      )}
    </>
  );
}
