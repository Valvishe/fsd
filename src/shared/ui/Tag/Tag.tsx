import { FC } from "react";
import cn from "classnames";

import { Icon } from "../../../assets/Icon";

import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export const Tag: FC<TagProps> = ({ icon, size, color, children, className }) => {
  const IconComponent = Icon[icon];

  const renderChildren = () => {
    if (typeof children === "string") {
      return <span>{children}</span>;
    }
    return children;
  };

  return (
    <div className={cn(styles.tag, styles[color], styles[size], className)}>
      <IconComponent />
      {renderChildren()}
    </div>
  );
};
