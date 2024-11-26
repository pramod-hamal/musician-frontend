import { Suspense } from "react";
import { ApiConstants } from "../utils/api.constants";
import LogoutBtn from "./components/LogoutBtn";
import { fetchData } from "../utils/server_fetch/fetch_helper";

export interface IUserCountData {
  artists: number;
  users: number;
}
export default async function Dashboard() {
  const data: IUserCountData = await fetchData<IUserCountData>(
    ApiConstants.users.count,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMjYyMDQzMCwiZXhwIjoxNzMyNzA2ODMwfQ.BAdoWwbt9pWc7ieW_fKeNGd4FdGhz7u1VV9AcSumhTI"
  );

  console.log("data is ", data);
  return (
    <Suspense>
      <div className="min-h-screen bg-gray-100 p-8">
        {/* Header Section */}
        <header className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <LogoutBtn />
        </header>

        {/* Cards Section */}
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
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                View Users
              </button>
            </div>
          </div>

          {/* Artists Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Artists
            </h2>
            <p className="text-gray-600 text-lg">
              Manage and monitor all artists in the system.
            </p>
            <div className="flex justify-between items-center mt-6">
              <span className="text-3xl font-bold text-green-600">
                {data.artists}
              </span>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                View Artists
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
