"use client";

import cn from "classnames";
import { Dialog } from "@headlessui/react";

import { Icon } from "@/assets/Icon";

import styles from "./Popup.module.css";
import { PopupProps } from "./Popup.props";

export const Popup = ({
  isOpen,
  onClose,
  title,
  description,
  className,
  children,
}: PopupProps): JSX.Element => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className={styles.background}>
        <Dialog.Panel className={cn(styles.popup, className)}>
          {title && <Dialog.Title className={styles.title}>{title}</Dialog.Title>}
          {description && (
            <Dialog.Description className={styles.description}>{description}</Dialog.Description>
          )}
          {children}
          <button className={styles.closeButton} onClick={onClose}>
            <Icon.CloseIcon className={styles.icon} />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
