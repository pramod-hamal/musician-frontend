"use client";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next-nprogress-bar";
import React from "react";

export default function LogoutBtn() {
  const route = useRouter();
  const handleLogout = async () => {
    deleteCookie("token");
    deleteCookie("user");
    route.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
    >
      Logout
    </button>
  );
}
