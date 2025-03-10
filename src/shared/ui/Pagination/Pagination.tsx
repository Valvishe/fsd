"use client";

import cn from "classnames";
import { useCallback } from "react";

import { useControlSearchParams } from "../../hooks/controlSearchParams";

import { PaginationProps } from "./Pagination.props";
import { ArrowDirectionEnum } from "./ArrowDirection.enum";
import { Arrow } from "./Arrow";
import { PageButtons } from "./PageButtons";
import styles from "./styles.module.css";

const PAGE_SEARCH_PARAM = "page";
export const Pagination = ({ currentPage, totalPages, className }: PaginationProps) => {
  const [, changeSearchParams] = useControlSearchParams();

  const goToPageHandler = useCallback(
    (page: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      changeSearchParams.add(PAGE_SEARCH_PARAM, page.toString());
    },
    [changeSearchParams]
  );
  const pageButtonsProps = { currentPage, totalPages, goToPageHandler };
  return (
    <div className={cn(className, styles.container)}>
      <Arrow
        direction={ArrowDirectionEnum.prev}
        page={currentPage - 1}
        goToPageHandler={goToPageHandler}
        disabled={currentPage === 1}
      />
      <PageButtons {...pageButtonsProps} />
      <Arrow
        direction={ArrowDirectionEnum.next}
        page={currentPage + 1}
        goToPageHandler={goToPageHandler}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};
