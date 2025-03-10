import { ReactNode } from "react";

export type PopupProps = {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
};