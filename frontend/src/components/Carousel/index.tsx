import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { CarouselContainer, CarouselItem, CarouselItems, CarouselNext, CarouselPrevious } from './style';

const Carousel: React.FC = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    const carouselSlider = setInterval(() => {
      setCurrent(old => old === childrenArray.length - 1 ? 0 : old + 1);
    }, 5000);

    return () => clearInterval(carouselSlider);
  }, [childrenArray.length]);

  const goTo = useCallback((slide: number) => {
    setCurrent(old => {
      if (slide === -1)
        return Math.max(0, old - 1);
      else
        return Math.min(old === childrenArray.length - 1 ? 0 : old + 1);
    });
  }, [childrenArray.length]);

  return (
    <CarouselContainer>
      <CarouselPrevious onClick={() => goTo(-1)}>
        <FiChevronLeft size={25} color='var(--dark)' />
      </CarouselPrevious>
      <CarouselNext onClick={() => goTo(1)}>
        <FiChevronRight size={25} color='var(--dark)' />
      </CarouselNext>
      <CarouselItems style={{ left: `${current * -100}%` }}>
        {childrenArray.map((child, index) => {
          return (
            <CarouselItem key={index}>
              {child}
            </CarouselItem>
          )
        })}
      </CarouselItems>
    </CarouselContainer>
  );
}

export default Carousel;