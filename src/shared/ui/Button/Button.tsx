import cn from "classnames";

import { Icon } from "../../../assets/Icon";

import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({
  appearance = "primary",
  children,
  className,
  size = "l",
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps): JSX.Element => {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <button
      className={cn(
        styles.button,
        styles[appearance],
        styles[size],
        { [styles.reverse]: iconPosition === "right" },

        className
      )}
      {...props}
    >
      {IconComponent && (
        <IconComponent
          className={cn(
            size === "s" ? styles.smallIcon : styles.icon,
            size === "s" ? styles.leftSmallIcon : styles.leftIcon,
            { [styles.leftSmallIcon]: iconPosition === "left" && size === "s" },
            { [styles.rightSmallIcon]: iconPosition === "right" && size === "s" },
            { [styles.rightIcon]: iconPosition === "right" }
          )}
        />
      )}
      {appearance !== "iconOutlined" && children}
    </button>
  );
};
