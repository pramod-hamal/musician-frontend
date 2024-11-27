"use client";
import React from "react";
import { ImageIcon } from ".";
import { ButtonOutlineProps } from "./button.interface";
import { CircularLodaer } from "../loader/loader";

export function ButtonDottedWithIcon({
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
            className={`flex items-center justify-center bg-white capitalize  
      rounded-[4px] w-full px-[16px] py-[14px] gap-2 text-btn font-btn ${disabled ? 'border-primary cursor-not-allowed text-gray-20 flex items-center gap-[8px] justify-center' : 'border-primary text-primary border'}`}
            type={"button"}
            style={{
                borderStyle: "dashed",
                borderWidth: "2px",
                borderColor: "#A2A9B0"
            }}
        >
            {!noIcon && (
                <ImageIcon
                    height={20}
                    width={20}
                    image={image ?? ""}
                    alt={alt ?? "send"}
                />
            )}
            {loading && <CircularLodaer />}
            {title}
        </button>
    );
}