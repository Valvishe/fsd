import React from "react";
import cn from "classnames";
import Link from "next/link";

import { Icon } from "../../../assets/Icon";

import styles from "./Breadcrumbs.module.css";
import { BreadcrumbsProps } from "./Breadcrumbs.props";

export const Breadcrumbs = ({ items, className, ...props }: BreadcrumbsProps) => {
  return (
    <div className={cn(styles.breadcrumbs, className)} {...props}>
      {items.map((item) => {
        return item.link ? (
          <div key={item.link} className={styles.item}>
            <Link
              href={item.isCategory ? `/category/${item.link}` : item.link}
              className={styles.link}
            >
              {" "}
              {item.name}
            </Link>
            <Icon.ArrowWithTailIcon className={styles.icon} />
          </div>
        ) : (
          <span key={item.name} className={styles.curent}>
            {item.name}
          </span>
        );
      })}
    </div>
  );
};
