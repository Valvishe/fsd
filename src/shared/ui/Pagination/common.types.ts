import { MouseEvent } from "react";

export type TDots = "dots";
export type TPage = number | TDots;
export type TGoToPageHandler = (page: number) => (e: MouseEvent<HTMLButtonElement>) => void;
