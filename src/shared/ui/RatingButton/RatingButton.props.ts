import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RatingButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearance: "roundedLeft" | "outlinedS" | "outlinedM" | "rounded";
  children: ReactNode;
}
