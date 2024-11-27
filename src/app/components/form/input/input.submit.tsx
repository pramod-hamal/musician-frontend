import Image from "next/image";
import React from "react";

export default function InputSubmit() {
  return (
    <div className="flex flex-row items-center gap-[2px] border-gray-30 border rounded-[4px] h-[44px] px-4 bg-white">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 text-[14px] leading-[22px] font-p-sm outline-none border-none h-full bg-transparent"
      />
      <Image
        src="/event/control-room/q&a/submit.svg"
        alt="submit logo"
        width={24}
        height={24}
        className="w-[24px] h-[24px]"
      />
    </div>
  );
}
