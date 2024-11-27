"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { ReactNode } from "react";
import ToastProvider from "./ToastProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ToastProvider>
        {children}
        <ProgressBar
          height="2px"
          color="red"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </ToastProvider>
    </>
  );
};

export default Providers;
