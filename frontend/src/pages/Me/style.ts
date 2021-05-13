import styled from "styled-components";
import Wave from '../../resources/wave.svg';
import Wave2 from '../../resources/wave_2.svg';

export const MeContainer = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 10%;

  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  background-color: var(--blue);

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    
    background: url(${Wave2}) bottom 0 left -30%/auto 100px repeat-x;
    opacity: 0.8;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    
    background: url(${Wave}) bottom/auto 100px repeat-x;
  }

  > div:nth-child(2) {
    min-width: 30%;
    z-index: 999;

    @media screen and (min-width: 1024px) {
      max-width: 50%;
    }
  }
`;

export const UpWaves = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  
  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    
    background: url(${Wave2}) bottom 0 left 0/auto 100px repeat-x;
    opacity: 0.8;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    
    background: url(${Wave}) bottom/auto 100px repeat-x;
  }

  transform: rotate(180deg);
`;