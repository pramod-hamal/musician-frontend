"use client";
import { ApiConstants } from "@/app/utils/api.constants";
import { showToast } from "@/app/utils/toast";
import { getCookie } from "cookies-next";
import { useState } from "react";

export default function ExportArtist() {
  const [loading, setLoading] = useState(false);
  const handleExport = async () => {
    setLoading(true);
    const token = getCookie("token");
    try {
      const response = await fetch(ApiConstants.artists.export, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      window.open(url, "_blank");

      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 10000);

      showToast({ title: "Exported successfully", type: "success" });
    } catch (err: any) {
      showToast({ title: err.message ?? "Error occured", type: "error" });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={() => handleExport()}
      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-red-700"
    >
      {loading ? "Exporting..." : "Export"}
    </button>
  );
}
