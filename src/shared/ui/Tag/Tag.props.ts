import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { IconType } from "../../../assets/Icon";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: "s" | "m";
  color: "orange" | "red" | "green" | "greenLight";
  icon: IconType;
  children: ReactNode;
}
