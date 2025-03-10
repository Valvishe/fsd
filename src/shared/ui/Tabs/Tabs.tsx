"use client";

import cn from "classnames";

import TagButton from "./TagButton/TagButton";
import { TabsProps } from "./Tabs.props";
import styles from "./Tabs.module.css";

function Tabs({ activeTab, tabs, children, onChange }: TabsProps) {
  return (
    <>
      <ul className={styles.tabsList}>
        {tabs.map((tab) => (
          <li key={tab.key}>
            <TagButton
              className={cn(styles.tabsItem, { [styles.tabsItemActive]: activeTab === tab.key })}
              onClick={() => onChange(tab.key)}
              text={tab.value}
              cardsAmount={2}
            />
          </li>
        ))}
      </ul>

      {children}
    </>
  );
}

export default Tabs;
