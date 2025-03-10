import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import { IconType } from "../../../assets/Icon";

type AnchorProps = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "ref"
>;

export type CustomLinkProps = AnchorProps & {
  children: ReactNode;
  appearance: "primary" | "outlined" | "text" | "textUnderlined" | "iconOutlined";
  size?: "s" | "l";
  icon?: IconType;
  iconPosition?: "left" | "right";
  href: string;
};
