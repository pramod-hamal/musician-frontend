import { ApiConstants } from "@/app/utils/api.constants";
import { Roles } from "@/app/utils/roles.constants";
import { fetchDataWithPagination } from "@/app/utils/server_fetch/fetch_helper";
import { IUser } from "@/core/interface/login-response.interface";
import { cookies } from "next/headers";
import UserList from "./components/UserList";
import UserHeader from "./components/UsersHeader";
import { redirect } from "next/navigation";

const UsersPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const user = JSON.parse(cookies().get("user")?.value ?? "{}");
  if (user.role != Roles.SUPER_ADMIN) {
    redirect("/dashboard");
  }
  let page = 1;
  if (
    !isNaN(parseInt(searchParams.page)) ||
    !searchParams.page ||
    !parseInt(searchParams.page)
  ) {
    page = parseInt(searchParams.page);
  }
  const data = await fetchDataWithPagination<IUser>(
    ApiConstants.users.list(page)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <UserHeader />
      <UserList
        currentPage={page.toString()}
        currentUsers={data.data}
        paginationmeta={data.meta}
      />
      {/* Users Table */}
    </div>
  );
};

export default UsersPage;
