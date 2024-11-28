import { InputHTMLAttributes } from "react";

export interface ErrorMessageProps {
  message: string;
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onChange?: any;
  placeHolder?: string;
  value?: any;
  id?: string;
  errors?: any;
  disabled?: boolean;
  key?: string;
  className?: string;
  type?: FormInputTypes;
  label?: string;
  required?: boolean;
  onKeyDown?: any;
  onBlur?: any;
  tooltip?: boolean;
  tooltipContent?: string;
  loading?: boolean;
  rows?: number // for textarea
}

export interface SearchInput extends FormInputProps {
  isLoading?: boolean;
  onClear: any
}

export interface NumberInputProps {
  placeHolder?: string;
  onChange: any;
  value: number;
  name: string;
  max: number;
  min: number;
  errors?: any;
  label?: string;
  required?: boolean;
  class?: string;
}

export type FormInputTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface SelectInterface {
  placeholder?: string;
  onChange?: any
  key?: any;
  options: Array<{
    label: string;
    value: string | number;
  }>;
  value?: any;
  label?: string;
  errors?: any;
  required?: boolean;
  disabled?: boolean;
  noOptionsMessage?: string
  search?: boolean
  name?: string
}