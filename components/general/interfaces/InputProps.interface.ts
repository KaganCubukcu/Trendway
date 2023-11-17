import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
  id: string;
  placeholder: string;
  type: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
