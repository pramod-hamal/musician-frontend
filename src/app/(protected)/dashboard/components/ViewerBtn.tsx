"use client";

import { useRouter } from "next-nprogress-bar";

export default function ViewerBtn() {
  const route = useRouter();
  const handleNavigation = async () => {
    route.push("/users");
  };

  return (
    <button onClick={handleNavigation} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
      View Users
    </button>
  );
}
