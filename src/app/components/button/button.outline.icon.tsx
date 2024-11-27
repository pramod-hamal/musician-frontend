"use client";
import React from "react";
import { ImageIcon } from ".";
import { ButtonOutlineProps } from "./button.interface";
import { editIcon } from "../icons/icons";
import { CircularLodaer } from "../loader/loader";

export function ButtonOutlineWithIcon({
  onClick,
  title,
  noIcon,
  image,
  alt,
  disabled,
  loading
}: Readonly<ButtonOutlineProps>) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` flex items-center justify-center bg-white border-solid capitalize  
      rounded-[4px] w-full px-[16px] py-[8px]  gap-2 text-btn font-btn ${disabled ? ' border-primary cursor-not-allowed text-gray-20 flex items-center gap-[8px] justify-center'   : 'border-primary text-primary border' }`}
      type={"button"}
    >
      {!noIcon && (
        <ImageIcon
          height={20}
          width={20}
          image={
            image
            ??
            ""
          }
          alt={alt ?? "send"}
        />
      )}
      {loading && <CircularLodaer />}
      {title}
    </button>
  );
}

export function ButtonWithIcon({
  onClick,
  title,
  blackColor,
  icon
}: Readonly<ButtonOutlineProps>) {
  return <button
    onClick={onClick}
    className={`${blackColor ? "border-black text-black" : "border-primary text-primary"
      } border bg-white border-solid capitalize  
      rounded-[4px] w-full px-[16px] py-[8px] flex gap-2 text-btn font-btn `}
    type={"button"}
  >
    {icon ?? editIcon}
    {title}
  </button>
}
