import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import { IconType } from "../../../assets/Icon";

type BaseButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref"
>;

type ButtonWithAdditionalProps = BaseButtonProps & {
  size?: "s" | "l";
  icon?: IconType;
  iconPosition?: "left" | "right";
};

type ButtonIconOutlined = ButtonWithAdditionalProps & {
  children?: never;
  appearance: "iconOutlined";
};

type ButtonWithChildren = ButtonWithAdditionalProps & {
  children: ReactNode;
  appearance?: "primary" | "outlined" | "text" | "link";
};
export type ButtonProps = ButtonIconOutlined | ButtonWithChildren;
