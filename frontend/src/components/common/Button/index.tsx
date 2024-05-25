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
}) => {
  return (
    <ButtonStyled
      variant={variant}
      size={size}
      className={`${className} inter-sm font-montserrat`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {iconStart && (
        <>
          {typeof iconStart === "string" ? (
            <ButtonIcon>
              <ButtonIconImage src={iconStart} />
            </ButtonIcon>
          ) : (
            <ButtonIcon>{iconStart}</ButtonIcon>
          )}
        </>
      )}
      <ButtonText className="font-normal font-inter leading-none">
        {children}
      </ButtonText>
      {iconEnd && (
        <>
          {typeof iconEnd === "string" ? (
            <ButtonIcon>
              <ButtonIconImage src={iconEnd} />
            </ButtonIcon>
          ) : (
            <ButtonIcon>{iconEnd}</ButtonIcon>
          )}
        </>
      )}

      {isLoading && (
        <i className={`icon-loading`}>
          <LoaderComponent
            size={size === "md" ? 20 : 14}
            color={
              [
                "black",
                "white-light",
                "transparent-white",
                "red",
                "dark-blue",
                "blue-dark",
                "grey",
              ].includes(variant)
                ? "var(--white)"
                : "var(--black20)"
            }
          />
        </i>
      )}
    </ButtonStyled>
  );
};

export default Button;
