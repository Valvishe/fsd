"use client";

import cn from "classnames";

import { Icon } from "@/assets/Icon";

import { ToastProps } from "./Toast.props";
import styles from "./Toast.module.css";

export function Toast(props: ToastProps) {
  const { color, text, icon } = props;

  const styleIconColor = color === "green" ? styles.iconColorGreen : styles.iconColorRed;
  const styleTextColor =
    color === "green" ? styles.textContainerColorGreen : styles.textContainerColorRed;
  const IconComponent = Icon[icon];

  return (
    <div className={cn(styles.NotificationIconTop, styles.NotificiationIconTopVertical)}>
      <div
        className={cn(styles.iconContainerHorizont, styles.iconContainerVertical, styleIconColor)}
      >
        <IconComponent className={cn(styles.icon, styles.iconVertical, styleIconColor)} />
      </div>

      <span className={cn(styles.textContainer, styleTextColor, styles.textContainerVertical)}>
        {text}
      </span>
    </div>
  );
}
