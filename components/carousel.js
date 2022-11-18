import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./carousel-btn";
import useEmblaCarousel from "embla-carousel-react";


const EmblaCarousel = ({ images }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <>
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
        {images && images.map((image =>  (
          <div className="embla__slide" key={image.id}>
              <div className="embla__slide__inner">
                <img 
                  className="embla__slide__img"
                  src={image.media_url} 
                  alt={image.caption} />
              </div>
          </div>
          )))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
    </>
  );
};

export default EmblaCarousel;
