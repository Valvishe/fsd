import cn from "classnames";

import styles from "./styles.module.css";
import { DotsProps } from "./Dots.props";

export function Dots({ hidden = false, className, ...props }: DotsProps) {
  const classNames = cn(className, styles.dots, {
    [styles.hidenDots]: hidden,
  });
  return (
    <div {...props} className={classNames}>
      <span />
      <span />
      <span />
    </div>
  );
}
