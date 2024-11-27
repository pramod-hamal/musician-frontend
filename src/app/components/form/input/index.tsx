import Image from "next/image";
import ErrorText from "../../text/error-text";
import { FormInputProps } from "../interface/form.interface";
import ToolTipComponent from "../../tooltip";

export default function FormInput(inputProps: Readonly<FormInputProps>): any {
  const {
    name,
    type,
    onChange,
    placeHolder,
    value,
    id,
    required,
    errors,
    key,
    disabled,
    label,
    className = "input input-bordered  px-[10px] leading-[22px] py-[8px] rounded-[4px] w-full text-[14px] focus:outline-none font-p-sm placeholder:text-[#A2A9B0] placeholder:font-normal",
    onKeyDown,
    tooltip,
    tooltipContent,
    onBlur, ...rest
  } = inputProps;
  return (
    <div>
      <div className="form-control w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700" key={name}>
            <span
              className={`text-[14px] font-link text-[#343A3F] leading-[16.8px]`}
            >
              {label}
            </span>
            {required && (
              <span className="text-btn text-danger leading-[21px] font-semibold">
                *
              </span>
            )}
          </label>
        )}
        <input
          {...rest}
          autoComplete="off"
          aria-autocomplete="none"
          name={name}
          type={type}
          id={id}
          className={className}
          onChange={onChange}
          value={value ?? ""}
          key={key}
          onKeyDown={onKeyDown}
          placeholder={placeHolder}
          disabled={disabled}
          onBlur={onBlur}
        />
        {errors && (
          <ErrorText error={errors} />
        )}
      </div>
      {tooltip && tooltipContent && <div className="absolute right-0 top-0">
        <ToolTipComponent content={tooltipContent}>
          <Image src="/icons/info.svg" width={15} height={15} alt="" />
        </ToolTipComponent>
      </div>}
    </div>
  );
}

export function TextArea(inputProps: Readonly<FormInputProps>): any {
  const {
    name,
    onChange,
    placeHolder,
    value,
    required,
    errors,
    key,
    disabled,
    label,
    onKeyDown,
  } = inputProps;
  return (
    <div className="form-control w-full">
      {label && (
        <label className="flex gap-[2px] mb-[8px]" key={name}>
          <span className="text-[14px] font-semibold leading-[16.8px]">
            {label}
          </span>
          {required && (
            <span className="text-btn text-danger leading-[21px] font-semibold">
              *
            </span>
          )}
        </label>
      )}
      <textarea
        name={name}
        onChange={onChange}
        value={value ?? ""}
        key={key}
        onKeyDown={onKeyDown}
        placeholder={placeHolder}
        disabled={disabled}
        style={{ outline: 'none' }}
        className="textarea textarea-bordered text-sm textarea-lg w-full"
      />
      {errors && (
        <ErrorText error={errors} />
      )}
    </div>
  );
}
