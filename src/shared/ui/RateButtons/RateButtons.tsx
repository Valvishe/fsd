import cn from "classnames";

import { Icon } from "@/assets/Icon";
import { RateButtonStateEnum } from "@/shared/types";

import { RateButtonProps } from "./RateButtons.props";
import styles from "./RateButtons.module.css";

export const RateButtons = ({
  className,
  appearance,
  reverseIcons = false,
  likes,
  dislikes,
  onLike,
  onDislike,
  state,
}: RateButtonProps) => {
  const handleLikeClick = () => {
    onLike();
  };

  const handleDislikeClick = () => {
    onDislike();
  };

  return (
    <div className={cn(styles.container, { [styles.reverseIcons]: reverseIcons }, className)}>
      <button
        className={cn(styles.button, styles[appearance], styles.like)}
        onClick={handleLikeClick}
      >
        <div className={styles.rate}>
          <Icon.LikeIcon
            className={cn(styles.icon, {
              [styles.checked]: state === RateButtonStateEnum.LIKED,
            })}
          />
          <div className={styles.count}>{likes}</div>
        </div>
      </button>
      <button
        className={cn(styles.button, styles[appearance], styles.dislike)}
        onClick={handleDislikeClick}
      >
        <div className={styles.rate}>
          <Icon.LikeIcon
            className={cn(styles.icon, {
              [styles.checked]: state === RateButtonStateEnum.DISLIKED,
            })}
          />
          <div className={styles.count}>{dislikes}</div>
        </div>
      </button>
    </div>
  );
};
