"use client";
import React from "react";
import { ButtonProps } from "../button.interface";
import { CircularLodaer } from "../../loader/loader";
import { copyIcon } from "../../icons/icons";

export function UploadButton({ onClick, loading }: Readonly<ButtonProps>) {
  return (
    <button
      disabled={loading}
      className={`h-[40px] border flex items-center justify-center gap-2 border-primary text-[14px] font-[700] bg-white border-solid capitalize rounded-[4px] w-[150px] text-primary`}
      onClick={onClick}
      type={"button"}
    >
      {loading ? <CircularLodaer /> : copyIcon}
      Choose file
    </button>
  );
}
