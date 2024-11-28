"use client";
import { ApiConstants } from "@/app/utils/api.constants";
import { showToast } from "@/app/utils/toast";
import { IMusic } from "@/core/interface/music.interface";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteMusic({ music }: { music: IMusic }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async (id: number | undefined) => {
    setLoading(true);
    const token = getCookie("token");
    try {
      const response = await fetch(ApiConstants.musics.delete(id ?? ""), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = await response.json();
      if (jsonData.statusCode >= 400) {
        throw jsonData;
      }
      showToast({ title: "Music deleted successfully", type: "success" });
      router.push("/music");
    } catch (err: any) {
      showToast({ title: err.message ?? "Error occured", type: "error" });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={() => handleDelete(parseInt(music?.id?.toString() ?? ""))}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
