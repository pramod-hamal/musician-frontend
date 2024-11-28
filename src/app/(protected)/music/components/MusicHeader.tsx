import AddMusic from "./AddMusic/AddMusic";

export default function MusicHeader() {
  return (
    <header className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Musics</h1>
      <AddMusic />
    </header>
  );
}
