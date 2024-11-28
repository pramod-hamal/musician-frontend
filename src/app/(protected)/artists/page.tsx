import { ApiConstants } from "@/app/utils/api.constants";
import { Roles } from "@/app/utils/roles.constants";
import { fetchDataWithPagination } from "@/app/utils/server_fetch/fetch_helper";
import { IUser } from "@/core/interface/login-response.interface";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ArtistList from "./components/ArtistList";
import ArtistHeader from "./components/ArtistsHeader";

const ArtistPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const user = JSON.parse(cookies().get("user")?.value ?? "{}");

  if (user.role == Roles.ARTIST) {
    redirect("/music");
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
    ApiConstants.artists.list(page)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <ArtistHeader />
      <ArtistList currentUsers={data.data} paginationmeta={data.meta} />
      {/* Users Table */}
    </div>
  );
};

export default ArtistPage;
