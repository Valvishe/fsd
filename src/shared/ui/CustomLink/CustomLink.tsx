import cn from "classnames";
import Link from "next/link";

import { Icon } from "../../../assets/Icon";

import styles from "./CustomLink.module.css";
import { CustomLinkProps } from "./CustomLink.props";

export const CustomLink = ({
  appearance,
  children,
  className,
  size = "l",
  icon,
  iconPosition = "left",
  href,
  ...props
}: CustomLinkProps): JSX.Element => {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <Link
      href={href}
      className={cn(
        styles.button,
        styles[appearance],
        styles[size],
        { [styles.withIcon]: icon },
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
    </Link>
  );
};
