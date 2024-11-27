"use client";

import { useRouter } from "next-nprogress-bar";

export default function ArtistBtn() {
  const route = useRouter();
  const handleNavigation = async () => {
    route.push("/artists");
  };

  return (
    <button
      onClick={handleNavigation}
      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
    >
      View Artists
    </button>
  );
}
