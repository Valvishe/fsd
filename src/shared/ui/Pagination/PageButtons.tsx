import cn from "classnames";

import { Button } from "../Button/Button";

import styles from "./styles.module.css";
import { TDots, TPage } from "./common.types";
import { Dots } from "./Dots";
import { PageButtonsProps } from "./PageButttons.props";

const DOTS: TDots = "dots";
export function PageButtons({ currentPage, totalPages, goToPageHandler }: PageButtonsProps) {
  const numbers = Array.from(Array(totalPages).keys())
    .map((key) => key + 1)
    .filter((num) => {
      if (num === currentPage || num === totalPages || num === 1) {
        return num;
      }
      if (currentPage <= 4 && num <= 5) {
        return num;
      }
      if (num === currentPage - 1 || num === currentPage + 1) {
        return num;
      }
      if (totalPages - currentPage < 4 && totalPages - num < 5) {
        return num;
      }
      return undefined;
    });

  const pages = numbers.reduce((acc: TPage[], curr: number, index: number, array: number[]) => {
    acc.push(curr);

    if (array[index + 1] && array[index + 1] - curr !== 1) {
      acc.push(DOTS);
    }

    return acc;
  }, []);
  const isHiden = (num: TPage) => {
    if (
      (currentPage < 4 && +num < 4) ||
      num === 1 ||
      num === totalPages ||
      (totalPages - currentPage < 2 && totalPages - +num < 3)
    ) {
      return false;
    }

    return true;
  };
  return pages.map((num, index) => {
    if (num === DOTS) {
      return <Dots key={`${index}${DOTS}`} />;
    }
    if (num === currentPage) {
      return (
        <div key={num}>
          {currentPage === 4 && <Dots hidden={true} />}
          <span className={styles.current}>{num}</span>
          {currentPage === totalPages - 3 && <Dots hidden={true} />}
        </div>
      );
    }

    return (
      <Button
        key={num}
        appearance="text"
        className={cn(styles.pageLink, {
          [styles.hidePages]: isHiden(num),
        })}
        onClick={goToPageHandler(num)}
      >
        {num}
      </Button>
    );
  });
}
