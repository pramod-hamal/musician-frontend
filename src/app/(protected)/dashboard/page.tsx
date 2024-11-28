import "server-only";
import { ApiConstants } from "@/app/utils/api.constants";
import { fetchData } from "@/app/utils/server_fetch/fetch_helper";
import ViewerBtn from "./components/ViewerBtn";
import ArtistBtn from "./components/ArtistBtn";

export interface IUserCountData {
  artists: number;
  users: number;
}
export default async function Dashboard() {
  const data: IUserCountData = await fetchData<IUserCountData>(
    ApiConstants.users.count
  );
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Users Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
          <p className="text-gray-600 text-lg">
            Manage all users in the system.
          </p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-3xl font-bold text-blue-600">
              {data.users}
            </span>
            <ViewerBtn />
          </div>
        </div>

        {/* Artists Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Artists</h2>
          <p className="text-gray-600 text-lg">
            Manage and monitor all artists in the system.
          </p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-3xl font-bold text-green-600">
              {data.artists}
            </span>
            <ArtistBtn />
          </div>
        </div>
      </div>
    </>
  );
}
