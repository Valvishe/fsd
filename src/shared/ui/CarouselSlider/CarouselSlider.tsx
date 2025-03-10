import React, { FC, useCallback, useEffect, useId, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import cn from "classnames";
import { EmblaCarouselType } from "embla-carousel";

import { Button, Icon } from "@/shared/ui";
import { useWindowSize } from "@/shared/hooks";
import { CarouselSliderProps } from "@/shared/ui/CarouselSlider/CarouselSlider.props";

import styles from "./CarouselSlider.module.css";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const CarouselSlider: FC<CarouselSliderProps> = (props) => {
  const { showCards, showCardsMobile, onShowAll, nodes } = {
    showCards: 2,
    showCardsMobile: 3,
    ...props,
  };

  const { width } = useWindowSize();
  const isMobile = Boolean(width && width < 769);

  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: showCards });
  const idKey = useId();
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const nodesForRenderSlider = nodes.slice(0, isMobile ? showCardsMobile : undefined);

  return nodesForRenderSlider.length ? (
    <div className={styles.root}>
      <div className={styles.sliderBody}>
        <div className={styles.sliderBlock} ref={emblaRef}>
          <div className={styles.sliderViewPort}>
            {nodesForRenderSlider.map((item, index) => (
              <div
                key={`${idKey}-${index}`}
                className={cn({
                  [styles.sliderCard1]: showCards === 1,
                  [styles.sliderCard2]: showCards === 2,
                  [styles.sliderCard3]: showCards === 3,
                })}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {!nextBtnDisabled && (
          <Button
            size={"s"}
            appearance={"outlined"}
            onClick={onNextButtonClick}
            className={cn(styles.sliderButton, styles.sliderButtonNext)}
          >
            <Icon.ArrowIcon className={styles.arrowIconButtonNext} />
          </Button>
        )}
        {!prevBtnDisabled && (
          <Button
            size={"s"}
            appearance={"outlined"}
            onClick={onPrevButtonClick}
            className={cn(styles.sliderButton, styles.sliderButtonPrev)}
          >
            <Icon.ArrowIcon
              className={cn(styles.arrowIconButtonNext, styles.arrowIconButtonPrev)}
            />
          </Button>
        )}
      </div>
      {onShowAll && (
        <div className={styles.sliderFooter}>
          <Button
            appearance="text"
            icon="ArrowIcon"
            iconPosition="right"
            size={"s"}
            onClick={onShowAll}
          >
            Посмотреть все
          </Button>
        </div>
      )}
    </div>
  ) : null;
};
