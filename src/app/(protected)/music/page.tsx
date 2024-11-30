import { ApiConstants } from "@/app/utils/api.constants";
import { fetchDataWithPagination } from "@/app/utils/server_fetch/fetch_helper";
import { IUser } from "@/core/interface/login-response.interface";
import MusicHeader from "./components/MusicHeader";
import MusicList from "./components/MusicList";

const MusicPage = async ({
  searchParams,
}: {
  searchParams: { page: string; artist_id: string };
}) => {
  let page = 1;
  if (
    !isNaN(parseInt(searchParams.page)) ||
    !searchParams.page ||
    !parseInt(searchParams.page)
  ) {
    page = parseInt(searchParams.page);
  }
  const data = await fetchDataWithPagination<IUser>(
    ApiConstants.musics.list(page, 10, searchParams.artist_id)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <MusicHeader />
      <MusicList
        currentPage={page.toString()}
        currentMusics={data.data}
        paginationmeta={data.meta}
      />
      {/* Users Table */}
    </div>
  );
};

export default MusicPage;
