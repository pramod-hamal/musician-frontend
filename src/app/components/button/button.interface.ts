import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: any;
  onClick?: any;
  color?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  image?: string;
  alt?: string;
}

export interface ButtonOutlineProps {
  onClick?: () => void;
  title?: string;
  blackColor?: boolean;
  noIcon?: boolean;
  image?: string;
  alt?: string;
  disabled?: boolean;
  className?: string
  icon?: any;
  loading?: boolean
}
