import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  overflow: hidden;
`;

export const CarouselItems = styled.div`
  position: relative;
  left: 0;
  transition: left 1s cubic-bezier(.46, .01, .1, 1.1);

  display: flex;
  flex-direction: row;
`;

export const CarouselItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselPrevious = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;

export const CarouselNext = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;