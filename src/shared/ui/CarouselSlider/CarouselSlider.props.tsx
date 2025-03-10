import React from "react";

export type CarouselSliderProps = {
  nodes: React.ReactNode[];
  showCards?: 1 | 2 | 3;
  showCardsMobile?: 1 | 2 | 3;
  onShowAll?: () => void;
};
