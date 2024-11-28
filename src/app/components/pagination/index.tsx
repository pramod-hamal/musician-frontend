"use client";

import { IPaginationMeta } from "@/app/utils/server_fetch/fetch_helper";
import { useRouter } from "next-nprogress-bar";

export default function CustomPagination({
  paginationmeta,
  route,
}: {
  paginationmeta: IPaginationMeta;
  route: string;
}) {
  const router = useRouter();
  function onPageChange(page: number | string) {
    router.push(route + `?page=${page}`);
  }

  const totalPages = paginationmeta.total_pages;
  const currentPage = paginationmeta.page;

  // Get the pagination page numbers to display
  const getPageNumbers = () => {
    // If there's only one page, no need to show pagination controls
    if (totalPages <= 1) return [];

    // If total pages is 2-3, show them all
    if (totalPages <= 3)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    // If we are near the start (pages 1, 2, 3)
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    // If we are near the end (last 3 pages)
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    // Otherwise, show two pages before and after the current page
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <div className="flex justify-center items-center space-x-3 py-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange("Prev")}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:bg-gray-300 transition"
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {/* Show page numbers dynamically */}
        {getPageNumbers().map((page, index) => (
          <span
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`cursor-pointer px-3 py-1 text-sm font-medium rounded-lg transition-all ${
              typeof page === "number" && page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            {page}
          </span>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange("Next")}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:bg-gray-300 transition"
      >
        Next
      </button>
    </div>
  );
}
