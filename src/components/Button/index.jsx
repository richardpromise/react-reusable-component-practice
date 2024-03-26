import React from "react";

export default function Button({
  children,
  isBtnDisabled,
  onClick,
  touches,

  size = "fullwidth",
  variant = "contained",
}) {
  const getBackgroundColor = () => {
    if (variant === "contained") {
      return isBtnDisabled
        ? "bg-purple-300 cursor-not-allowed text-white"
        : "bg-purple-500 hover:bg-purple-800 text-white";
    } else if (variant === "outlined") {
      return "border-2 border-purple-500 text-purple-500";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={isBtnDisabled}
      className={` ${getBackgroundColor()}
${
  size === "fullwidth"
    ? "w-full"
    : size === "medium"
    ? "w-1/2"
    : size === "small"
    ? "px-6"
    : ""
}

      
        font-bold py-2 rounded-lg text-lg ${touches} `}
    >
      {children}
    </button>
  );
}
