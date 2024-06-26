import React from "react";

// Styled
import {
  ButtonIcon,
  ButtonIconImage,
  ButtonStyled,
  ButtonText,
} from "./styled";
import LoaderComponent from "../LoaderComponent";

interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "green"
    | "transparent"
    | "white"
    | "black"
    | "grey-transparent"
    | "grey"
    | "light-grey"
    | "red";
  size?: "sm" | "md";
  onClick?: () => void;
  iconStart?: React.ReactNode | string;
  iconEnd?: React.ReactNode | string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  title?: string;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "green",
  size = "sm",
  onClick,
  iconStart,
  iconEnd,
  isLoading = false,
  disabled = false,
  type = "button",
  className = "",
  title = "",
  icon = false,
}) => {
  return (
    <button
      className={`${className} cursor-pointer relative transition ease-out duration-300 flex items-center justify-center gap-2 ${
        size === "sm" ? "py-3 px-5 text-sm" : "py-4 px-8 text-base"
      } rounded-md w-full ${generateButtonStyle(variant)}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      title={title}
    >
      {iconStart && (
        <span className="w-4 h-4 flex items-center justify-center">
          {typeof iconStart === "string" ? (
            <img src={iconStart} alt="Icon" className="w-full h-full" />
          ) : (
            <i>{iconStart}</i>
          )}
        </span>
      )}
      <span className="font-normal leading-none">{children}</span>
      {iconEnd && (
        <span className="w-4 h-4 flex items-center justify-center">
          {typeof iconEnd === "string" ? (
            <img src={iconEnd} alt="Icon" className="w-full h-full" />
          ) : (
            <i>{iconEnd}</i>
          )}
        </span>
      )}
      {isLoading && (
        <span className={size === "md" ? "w-4" : "w-3"}>
          <LoaderComponent
            size={size === "md" ? 17 : 14}
            color={generateLoaderColor(variant)}
          />
        </span>
      )}
    </button>
  );
};

const generateButtonStyle = (variant: string) => {
  switch (variant) {
    case "green":
      return "bg-green-600 text-blue-mag font-medium hover:bg-green text-white";
    case "dark-blue":
      return "bg-blue text-white font-medium hover:bg-blue-dark text-white";
    case "transparent":
      return "border border-black bg-transparent text-black font-medium hover:bg-black text-white";
    case "black":
      return "border border-black bg-black text-white font-medium hover:bg-gray-900 text-white";
    case "blue-dark":
      return "bg-blue text-white font-medium hover:bg-blue-dark text-white";
    case "grey-transparent":
      return "border border-[#415778] bg-transparent text-[#415778] font-semibold hover:bg-[#415778] hover:text-white";
    case "grey":
      return "bg-[#415778] hover:bg-[#384D6C] text-white font-semibold";
    case "light-grey":
      return "bg-gray-700 text-black font-semibold hover:bg-[#415778] text-white";
    case "red":
      return "bg-red-600 hover:bg-red-500 text-white font-medium hover:bg-red-dark text-white";
    default:
      return "bg-white";
  }
};

const generateLoaderColor = (variant: string) => {
  return "white";
};

export default Button;
