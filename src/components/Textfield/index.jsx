import React, { useState } from "react";

export default function Textfield({
  labal,
  type,
  className,
  value,
  onChange,
  msg,
  placeholder,
}) {
  const [openP, setOpenP] = useState(false);

  return (
    <div className=" w-full flex flex-col gap-1">
      <label className="text-gray-500">{labal}</label>
      <div
        className={`border border-slate-400 shadow-md shadow-purple-500 rounded-xl items-center gap-2 w-full outline-none hover:shadow-black h-[50px] px-2 flex ${className}`}
      >
        <input
          type={openP ? "text" : type}
          value={value}
          onChange={onChange}
          className={`border-none outline-none bg-transparent h-full w-full `}
          placeholder={placeholder}
        />

        {type === "password" && (
          <div onClick={() => setOpenP(!openP)} className="">
            {openP ? <h2>close</h2> : <h2 className="cursor-pointer">open</h2>}
          </div>
        )}
      </div>
      <small className="text-red-600">{msg}</small>
    </div>
  );
}
