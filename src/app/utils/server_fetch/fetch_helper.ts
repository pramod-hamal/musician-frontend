import { cookies } from "next/headers";

export async function fetchData<T>(url: string): Promise<T> {
  const token = cookies().get("token")?.value;
  console.log("token ", token);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      cache: "no-store",
    },
  });

  return (await response.json())?.data as T;
}

export interface IPaginationMeta {
  limit: number;
  total: number;
  page_total: number;
  total_pages: number;
  next: number | null;
  page: number;
  previous: number | null;
}

export interface IPaginationData<T> {
  data: T[];
  meta: IPaginationMeta;
}
export async function fetchDataWithPagination<T>(
  url: string
): Promise<IPaginationData<T>> {
  const token = cookies().get("token")?.value;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      cache: "no-store",
    },
  });
  const data = await response.json();
  return {
    data: data.data as T[],
    meta: data.meta,
  };
}
