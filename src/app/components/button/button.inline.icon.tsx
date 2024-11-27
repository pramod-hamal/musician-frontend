"use client";
import React from "react";
import { ImageIcon } from ".";
import { ButtonOutlineProps } from "./button.interface";

export function ButtonInlineWithIcon({
    onClick,
    title,
    disabled,
    noIcon,
    alt,
}: Readonly<ButtonOutlineProps>) {
    return (
        <button
            onClick={onClick}
            className={`capitalize h-[38px] text-btn font-btn rounded-[4px] w-full px-[16px] py-[10px] ${disabled
                ? "bg-primary opacity-80 text-white cursor-not-allowed flex items-center gap-[8px] justify-center "
                : `bg-primary text-white cursor-pointer flex items-center gap-[8px] justify-center`
                } 
      `} type={"button"}
        >
            {!noIcon && (
                <ImageIcon
                    height={20}
                    width={20}
                    image="/icons/white.send.svg"
                    alt={alt ?? "send"}
                />
            )}
            {title}
        </button>
    );
}
