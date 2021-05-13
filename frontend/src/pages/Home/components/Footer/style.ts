import styled from "styled-components";
import FooterBG from '../../../../resources/footer_bg.svg';

export const StyledFooter = styled.footer`
  display: grid;
  // SM BT CR;
  
  justify-content: space-between;
  align-items: center;

  color: white;
  font-size: .9rem;

  background: url(${FooterBG}) top/cover no-repeat;

  @media screen and (min-width: 1024px) {
    grid-template-areas: 'SM BT CR';
    padding: 4rem 15% 2rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-areas: 'SM BT' 'CR CR';
    padding: 4rem 10% 2rem;

    > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const SocialMedias = styled.div`
  grid-area: SM;
  display: flex;
  
  > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export const BackToTop = styled.span`
  grid-area: BT;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Copyright = styled.p`
  text-align: center;
  grid-area: CR;
  margin: 0;
`;