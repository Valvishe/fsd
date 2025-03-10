import cn from "classnames";
import { FC } from "react";

import { Icon } from "@/shared/ui";
import { RatingButtonProps } from "@/shared/ui/RatingButton/RatingButton.props";

import styles from "./RatingButton.module.css";

export const RatingButton: FC<RatingButtonProps> = ({ appearance, children, className }) => {
  const iconMap = {
    outlinedS: null,
    outlinedM: Icon.Star,
    rounded: null,
    roundedLeft: Icon.StarOff,
  };

  const IconComponent = iconMap[appearance];

  return (
    <div
      className={cn(
        styles.rating,
        {
          [styles.outlinedS]: appearance === "outlinedS",
          [styles.outlinedM]: appearance === "outlinedM",
          [styles.rounded]: appearance === "rounded",
          [styles.roundedLeft]: appearance === "roundedLeft",
        },
        className
      )}
    >
      {IconComponent && <IconComponent />}
      <div className={styles.ratingLine}>
        <span className={styles.ratingValue}>{children}</span>
        <span className={styles.ratingTotal}>/100</span>
      </div>
      <span className={styles.ratingLabel}>Рейтинг</span>
    </div>
  );
};
