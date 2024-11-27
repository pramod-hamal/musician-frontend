import { IUser } from "@/core/interface/login-response.interface";

export default function UserList({
  currentUsers,
  currentPage,
  totalPages,
}: {
  currentUsers: IUser[];
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User List</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="text-gray-700 hover:bg-gray-100 transition"
              >
                <td className="px-4 py-2 border text-center">{user.id}</td>
                <td className="px-4 py-2 border">{user.first_name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
