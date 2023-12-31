import React from "react";
import { IconType } from "react-icons";
import { ButtonProps } from "@/components/general/interfaces/ButtonProps.interface";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  icon: Icon,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex justify-center items-center gap-2 rounded-lg p-3 hover:bg-early-dawn-600 hover:text-white ${
        small ? "w-[250px]" : "w-full"
      } ${
        outline
          ? "bg-white text-black border border-black"
          : "bg-white text-black"
      } `}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
