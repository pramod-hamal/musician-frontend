export async function fetchData<T>(url: string, token: string): Promise<T> {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      cache: "no-cache",
    },
  });
  return (await response.json())?.data as T;
}
