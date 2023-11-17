"use client";

import React from "react";
import { InputProps } from "./interfaces/InputProps.interface";
const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div>
      <input
        className={`w-full h-12 p-3 rounded-md outline-none my-2 text-black ${
          errors[id] ? "border-red-500" : "border-green-400"
        }`}
        id={id}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
      />
    </div>
  );
};

export default Input;
