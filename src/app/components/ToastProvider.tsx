"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({
  children,
}: Readonly<ToastProviderProps>) {
  return (
    <>
      {children}
      <ToastContainer autoClose={3000} theme="light" hideProgressBar={true} />
    </>
  );
}
