"use client";
import { ApiConstants } from "@/app/utils/api.constants";
import { showToast } from "@/app/utils/toast";
import { IUser } from "@/core/interface/login-response.interface";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
// import { useRouter } from "next-nprogress-bar";
import { useState } from "react";

export default function DeleteArtist({ user }: { user: IUser }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async (id: number | undefined) => {
    setLoading(true);
    const token = getCookie("token");
    try {
      const response = await fetch(ApiConstants.users.delete(id ?? ""), {
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
      showToast({ title: "User deleted successfully", type: "success" });
      router.push("/users");
    } catch (err) {
      showToast({ title: "Error occurred", type: "error" });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={() => handleDelete(user.id)}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
