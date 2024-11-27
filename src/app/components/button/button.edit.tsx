"use client"
import React from "react"
import { ImageIcon } from "."

export function ButtonEditNoBorder({
    onClick,
    title,
    image,
    alt
}: Readonly<{
    onClick?: () => void;
    title?: string;
    image?: any;
    alt?: string;
}>) {
    return (
        <button
            onClick={onClick}
            className={`btn border-0 bg-transparent border-solid capitalize  rounded-[4px]  px-0 py-[8px] flex gap-2 text-btn font-btn text-primary hover:bg-transparent`}
            type={"button"}
        >
            <div className="flex items-center gap-2">
                <ImageIcon alt={alt ?? ""} image={image} height={20} width={20} />
                <span>{title}</span>
            </div>
        </button>
    )
}