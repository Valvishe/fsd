import { TGoToPageHandler } from "./common.types";
import { PaginationProps } from "./Pagination.props";

export type PageButtonsProps = Pick<PaginationProps, "currentPage" | "totalPages"> & {
  goToPageHandler: TGoToPageHandler;
};
