import CustomPagination from "@/app/components/pagination";
import { Roles } from "@/app/utils/roles.constants";
import { IPaginationMeta } from "@/app/utils/server_fetch/fetch_helper";
import { IMusic } from "@/core/interface/music.interface";
import { cookies } from "next/headers";
import DeleteMusic from "./actions/DeleteMusic";
import EditMusic from "./actions/EditMusic";

export default function MusicList({
  currentMusics,
  paginationmeta,
}: {
  currentMusics: IMusic[];
  paginationmeta: IPaginationMeta;
}) {
  const user = JSON.parse(cookies().get("user")?.value ?? "{}");
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Music List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 border">SN</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Album Name</th>
              <th className="px-4 py-2 border">Genre</th>
              <th className="px-4 py-2 border">Created At</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMusics.map((music, index) => (
              <tr
                key={music.id}
                className="text-gray-700 hover:bg-gray-100 transition"
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{music.title}</td>
                <td className="px-4 py-2 border">{music.album_name}</td>
                <td className="px-4 py-2 border">{music.genre}</td>
                <td className="px-4 py-2 border">
                  {music.created_at?.toString()}
                </td>
                <td className="px-4 py-2 border flex space-x-2">
                  {user.role == Roles.ARTIST && user.id == music.user_id && (
                    <EditMusic music={music} />
                  )}
                  {user.role == Roles.ARTIST && user.id == music.user_id && (
                    <DeleteMusic music={music} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center mt-4">
        {paginationmeta.total_pages > 1 && (
          <CustomPagination paginationmeta={paginationmeta} route="/music" />
        )}
      </div>
    </div>
  );
}
