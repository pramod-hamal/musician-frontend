import { ApiConstants } from "@/app/utils/api.constants";
import { fetchDataWithPagination } from "@/app/utils/server_fetch/fetch_helper";
import { IUser } from "@/core/interface/login-response.interface";
import UserList from "./components/UserList";
import UserHeader from "./components/UsersHeader";

const UsersPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  let page = 1;
  if(!isNaN(parseInt(searchParams.page)) || !searchParams.page || !parseInt(searchParams.page)) {
    page = parseInt(searchParams.page);
  }
  const data = await fetchDataWithPagination<IUser>(ApiConstants.users.list(page));

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <UserHeader />
      <UserList currentUsers={data.data} paginationmeta={data.meta} />
      {/* Users Table */}
    </div>
  );
};

export default UsersPage;
