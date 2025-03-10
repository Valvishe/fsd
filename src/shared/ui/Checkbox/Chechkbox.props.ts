import React, { DetailedHTMLProps } from "react";

export interface CheckboxProps
  extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  id: string;
}
