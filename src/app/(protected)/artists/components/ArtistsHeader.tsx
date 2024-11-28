import { Roles } from "@/app/utils/roles.constants";
import { cookies } from "next/headers";
import Link from "next/link";
import ExportArtist from "./actions/ExportArtist";
import ImportArtist from "./actions/ImportArtist";
import AddArtist from "./AddArtist/AddArtist";

export default function ArtistHeader() {
  const user = JSON.parse(cookies().get("user")?.value ?? "{}");
  return (
    <header className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-8">
      <h1 className="text-3xl font-bold text-gray-800">
        <Link href="/artists">Artists</Link>
      </h1>

      <div>
      {user.role == Roles.ARTIST_MANAGER && <ImportArtist />}
      {user.role == Roles.ARTIST_MANAGER && <ExportArtist />}
      {user.role == Roles.ARTIST && <AddArtist />}
      </div>
    </header>
  );
}
