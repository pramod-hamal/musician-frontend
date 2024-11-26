"use client";
export default function LogoutBtn() {
  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting to login)
    console.log("User logged out!");
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
