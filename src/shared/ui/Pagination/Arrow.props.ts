import { ButtonHTMLAttributes } from "react";

import { ArrowDirectionEnum } from "./ArrowDirection.enum";
import { TGoToPageHandler } from "./common.types";

export type ArrowProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children"> & {
  page: number;
  direction: ArrowDirectionEnum;
  goToPageHandler: TGoToPageHandler;
};
