import { RateButtonStateEnum } from "@/shared/types";

export type RateButtonProps = {
  className?: string;
  appearance: "outline" | "filled";
  reverseIcons?: boolean;
  onLike: () => void;
  onDislike: () => void;
  state?: RateButtonStateEnum;
  likes: number;
  dislikes: number;
};
