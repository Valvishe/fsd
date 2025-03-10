/* eslint-disable @next/next/no-img-element */
import cn from "classnames";

import { Icon } from "@/assets/Icon";

import { AvatarProps } from "./Avatar.props";
import styles from "./Avatar.module.css";

export function Avatar({ url, alt = "", size = "s", className }: AvatarProps) {
  return (
    <div
      className={cn(
        styles.avatar,
        {
          [styles.sizeS]: size === "s",
          [styles.sizeM]: size === "m",
          [styles.sizeL]: size === "l",
          [styles.sizeXL]: size === "xl",
        },
        className
      )}
    >
      {url ? <img src={url} alt={alt} /> : <Icon.UserIcon className={styles.icon} />}
    </div>
  );
}
