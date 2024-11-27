"use client";
import React from "react";
import { ImageIcon } from ".";

export function ButtonNoBorder({
  onClick,
  title,
  image,
  alt,
  compact
}: Readonly<{
  onClick?: () => void;
  title?: string;
  image?: string;
  alt?: string;
  compact?: boolean
}>) {
  const titleContainerClasses = compact ? 'flex items-center ': 'flex items-center gap-2'
  return (
    <button
      onClick={onClick}
      className={`btn border-0 flex  bg-transparent border-solid rounded-[4px]  px-0 py-[8px]  font-btn text-primary hover:bg-transparent`}
      type={"button"}
      style={{ textTransform: 'none' }}

    >
      <div className={titleContainerClasses}>
      {image && (
        <ImageIcon height={20} width={20} image={image} alt={alt ?? ""} />
      )}
      {title}
      </div>
    </button>
  );
}
