import React, { CSSProperties, useState } from 'react'
import ErrorText from '../../text/error-text';
import { passwordMasked, passwordNotMasked } from '../../icons/icons';

interface IPasswordInput {
    name: string;
    label: string;
    value: string;
    placeHolder: string;
    errors: any;
    onChange: any;
    style?: CSSProperties
}

export default function PasswordInput({ name, onChange, placeHolder, label, value, errors, style }: Readonly<IPasswordInput>) {
    const [maskedPassword, setMaskedPassword] = useState<boolean>(true);
    return (
        <div className='relative'>
            <div>
                <div className="form-control w-full">
                    {label && (
                        <label className="flex gap-[2px] mb-[8px]" key={name}>
                            <span
                                className={`text-[14px] font-link text-[#343A3F] leading-[16.8px]`}
                            >
                                {label}
                            </span>
                            <span className="text-btn text-danger leading-[21px] font-semibold">
                                *
                            </span>
                        </label>
                    )}
                    <input
                        style={style}
                        name={name}
                        type={!maskedPassword ? "text" : "password"}
                        autoComplete="new-password"
                        aria-autocomplete="none"
                        onChange={onChange}
                        value={value ?? ""}
                        id={name}
                        placeholder={placeHolder}
                        className={`input text-gray-900 input-bordered px-[10px] leading-[22px] py-[8px] border border-gray-60 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-[4px] w-full text-[14px] font-p-sm placeholder:text-[#A2A9B0] placeholder:font-normal`}
                    />
                    {errors && (
                        <ErrorText error={errors} />
                    )}
                </div>
            </div>
            <button className='cursor-pointer absolute right-4 top-11' type="button" onClick={() => setMaskedPassword(!maskedPassword)}>
                {!maskedPassword ? passwordNotMasked : passwordMasked}
            </button>
        </div>
    )
}
