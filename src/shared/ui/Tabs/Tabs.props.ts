import { ReactNode } from "react";

export interface TabsProps {
  tabs: { key: string; value: string }[];
  activeTab: string;
  children: ReactNode;
  onChange: (value: string) => void;
}
