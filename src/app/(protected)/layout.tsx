import { Suspense } from "react";
import LogoutBtn from "./dashboard/components/LogoutBtn";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <div className="min-h-screen bg-gray-100 p-8">
        <header className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            <Link href="/dashboard">Dashboard</Link>
          </h1>
          <LogoutBtn />
        </header>
        {children}
      </div>
    </Suspense>
  );
}
