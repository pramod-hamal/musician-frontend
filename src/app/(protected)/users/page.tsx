import { ApiConstants } from "@/app/utils/api.constants";
import { fetchDataWithPagination } from "@/app/utils/server_fetch/fetch_helper";
import { IUser } from "@/core/interface/login-response.interface";
import UserList from "./components/UserList";
import UserHeader from "./components/UsersHeader";

const UsersPage = async () => {
  const data = await fetchDataWithPagination<IUser>(ApiConstants.users.list);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <UserHeader />
      <UserList currentUsers={data.data} currentPage={data.meta.page} totalPages={data.meta.total_pages} />
      {/* Users Table */}
    </div>
  );
};

export default UsersPage;
