import styled from "styled-components";
import HeaderRight from '../../../../resources/header_right.svg';
import HeaderLeft from '../../../../resources/header_left.svg';

export const StyledHeader = styled.header`
  position: relative;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: 
    url(${HeaderRight}) 150% 100%/50% no-repeat,
    url(${HeaderLeft}) -25% 20%/30% no-repeat;
  
  h1, h3, p {
    font-family: 'Nunito', sans-serif;
    margin: 0;
  }

  h1 {
    color: var(--blue);
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--gray);
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
    color: var(--gray);
  }

  @media screen and (min-width: 1024px) {
    padding: 0 15%;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 10%;
  }
`;