import React from "react";
import { ButtonProps } from "./button.interface";
import { ImageIcon } from ".";
import { CircularLodaer } from "../loader/loader";

export default function Button({
  title,
  onClick,
  loading,
  color = undefined,
  type,
  disabled,
  image,
  icon,
  alt,
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <button
      className={`capitalize  text-xs md:text-btn font-btn rounded-[4px] w-full px-[16px] py-[10px] ${disabled
        ? "bg-gray-40 cursor-not-allowe text-gray-20 flex items-center gap-[8px] justify-center "
        : `${color ?? "bg-primary text-white  "} cursor-pointer flex items-center gap-[8px] justify-center`
        } 
      `}
      {...rest}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {loading && <CircularLodaer />}
      {icon}
      {image && <ImageIcon image={image || ""} alt={alt ?? ""} width={20} height={20} />}
      {title}
    </button>
  );
}
