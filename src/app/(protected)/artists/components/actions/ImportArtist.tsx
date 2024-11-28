"use client";
import { ApiConstants } from "@/app/utils/api.constants";
import { showToast } from "@/app/utils/toast";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ImportArtist() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (!selectedFile) return;

    setFile(selectedFile);
    await handleFileUpload(selectedFile);
  };

  const handleFileUpload = async (file: File) => {
    setLoading(true);
    const token = getCookie("token");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(ApiConstants.artists.import, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
 
      const jsonData = await response.json();

      if (jsonData.statusCode >= 400) {
        throw jsonData;
      }

      showToast({ title: "File imported successfully", type: "success" });
      router.push("/music");
    } catch (err: any) {
      showToast({ title: err.message ?? "Error occurred", type: "error" });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inline-flex items-center p-6" >
      <input
        type="file"
        id="fileInput"
        accept=".csv"
        onChange={handleFileChange}
        className="hidden"
        disabled={loading}
      />

      <label
        htmlFor="fileInput"
        className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded-md hover:bg-red-700"
      >
        {loading ? "Uploading..." : "Import Artist"}
      </label>

      {loading && <p className="mt-2">Uploading...</p>}
    </div>
  );
}
