"use client";

import { SelectInterface } from "../interface/form.interface";

export default function SelectField(props: Readonly<SelectInterface>) {
  return (
    <div className="flex flex-col w-full text-sm">
      {props.label && (
        <label className="block text-sm font-medium text-gray-700">
          <span className="text-[14px] font-semibold leading-[16.8px]">
            {props.label}
          </span>
          {props.required && (
            <span className="text-btn text-danger leading-[21px] font-semibold">
              {" "}
              *
            </span>
          )}
        </label>
      )}
      <select
        value={props.value?.toString()}
        onChange={(val) => {
          props.onChange(val.target.value);
        }}
        className="select text-green-900 select-bordered w-full px-[10px] py-[8px] font-[700] text-[14px] rounded-[4px] focus:outline-none"
        disabled={props.disabled}
      >
        {props.options && props.options.length > 0 ? (
          props?.options?.map((p: any) => {
            return (
              <option
                key={p.label}
                value={p?.value?.toString()}
              >
                {p?.label}
              </option>
            );
          })
        ) : (
          <option disabled>
            {props.noOptionsMessage ?? "No options available"}
          </option>
        )}
      </select>
    </div>
  );
}
