import cn from "classnames";

// import { Icon } from "@/assets/Icon";

import { Button } from "../Button/Button";

import styles from "./styles.module.css";
import { ArrowProps } from "./Arrow.props";

export function Arrow({
  direction,
  page,
  goToPageHandler,
  disabled,
  className,
  ...props
}: ArrowProps) {
  const disabledOrPage = disabled ? "Disabled" : "Page";
  const classNames = cn(className, styles[`${direction}${disabledOrPage}`]);
  return (
    <Button
      {...props}
      appearance="iconOutlined"
      className={classNames}
      icon="ArrowIcon"
      disabled={disabled}
      onClick={disabled ? undefined : goToPageHandler(page)}
    />
  );
}
