import CustomPagination from "@/app/components/pagination";
import { IPaginationMeta } from "@/app/utils/server_fetch/fetch_helper";
import { IUser } from "@/core/interface/login-response.interface";
import Link from "next/link";
import DeleteArtist from "./actions/DeleteArtist";
import EditArtist from "./actions/EditArtist";
import { cookies } from "next/headers";
import { Roles } from "@/app/utils/roles.constants";
import { paginationSn } from "@/core/lib/utils";

export default function ArtistList({
  currentPage,
  currentUsers,
  paginationmeta,
}: {
  currentPage: string;
  currentUsers: IUser[];
  paginationmeta: IPaginationMeta;
}) {
  if (isNaN(parseInt(currentPage))) {
    currentPage = "1";
  }
  const user = JSON.parse(cookies().get("user")?.value ?? "{}");
  return (
    <div className="bg-white rounded-lg shadow-md p-6">

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 border">SN</th>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={user.id}
                className="text-gray-700 hover:bg-gray-100 transition"
              >
                <td className="px-4 py-2 border text-center">
                  {paginationSn(index + 1, parseInt(currentPage))}
                </td>
                <td className="px-4 py-2 border">{user.first_name}</td>
                <td className="px-4 py-2 border">{user.last_name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.role}</td>
                <td className="px-4 py-2 border">{user.phone}</td>
                <td className="px-4 py-2 border flex space-x-2">
                  <Link
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                    href={`/music?artist_id=${user.id}`}
                  >
                    View
                  </Link>
                  {user.role != Roles.ARTIST_MANAGER && (
                    <EditArtist user={user} />
                  )}
                  {user.role != Roles.ARTIST_MANAGER && (
                    <DeleteArtist user={user} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center mt-4">
        {paginationmeta.total_pages > 1 && (
          <CustomPagination paginationmeta={paginationmeta} route="/artists" />
        )}
      </div>
    </div>
  );
}
