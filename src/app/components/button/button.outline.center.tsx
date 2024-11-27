"use client";
import React from 'react';
import { ButtonOutlineProps } from './button.interface';
import { ImageIcon } from '.';

export function OutlinedButtonWithIconCenter({
  onClick,
  title,
  noIcon,
  image,
  alt,
  className = '',
}: ButtonOutlineProps & {
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`border-primary text-primary border bg-white border-solid capitalize  
      rounded-[4px] px-[16px] py-[8px] flex items-center justify-center gap-2 text-btn font-btn ${className}`}
      type={"button"}
    >
      {!noIcon && (
        <ImageIcon
          height={20}
          width={20}
          image={image ?? ""}
          alt={alt ?? "icon"}
          className="mr-2"
        />
      )}
      {title}
    </button>
  );
}
