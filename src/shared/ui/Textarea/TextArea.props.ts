import React, { DetailedHTMLProps } from "react";

export type Style = Omit<
  NonNullable<React.TextareaHTMLAttributes<HTMLTextAreaElement>["style"]>,
  "maxHeight" | "minHeight"
> & {
  height?: number;
};

type BaseProps = DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export interface TextAreaProps extends Omit<BaseProps, "style" | "ref"> {
  label?: string;
  style?: Style;
  errorMessage?: string;
}
