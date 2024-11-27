export default function UserHeader() {
  return (
    <header className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Users</h1>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Add User
      </button>
    </header>
  );
}
