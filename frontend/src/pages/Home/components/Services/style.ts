import styled from "styled-components";
import Shape1 from '../../../../resources/shape_1.svg';
import Shape2 from '../../../../resources/shape_2.svg';
import ServicesBG from '../../../../resources/services_bg.svg';

export const StyledServices = styled.section`
  position: relative;

  @media screen and (min-width: 1024px) {
    padding: 8% 15% 10%;
  }

  @media screen and (max-width: 1024px) {
    padding: 8% 10% 30%;
  }

  background: url(${ServicesBG}) center/cover no-repeat border-box;

  ::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -15%;

    width: 20%;
    aspect-ratio: 1/1;

    border-radius: 30%;
    background-color: #518DFA;
    transform: rotate(40deg);
  }

  ::after {
    content: '';
    position: absolute;
    top: 55%;
    right: -12%;

    width: 20%;
    aspect-ratio: 1/1;

    border-radius: 50%;
    background-color: #518DFA;
  }
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1024px) {
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const ServiceContainer = styled.div`
  text-align: center;

  color: var(--dark);
  box-shadow: 0 20px 30px rgba(0, 0, 0, .05);
  border-radius: 8px;
  padding: 15px 30px;
  
  background:
    url(${Shape1}) -50% -40%/auto no-repeat border-box,
    url(${Shape2}) -280% 150%/auto no-repeat border-box,
    white;

  transition: box-shadow 0.5s ease-in-out;

  :hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, .15), 0 0 5px rgba(0, 0, 0, .1);
  }
`;

export const IconContainer = styled.div`
  display: inline-block;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--blue);
`;

export const ServiceName = styled.h4`
  margin: 10px 0;

  color: var(--blue);
  font-size: 1.3rem;
  font-weight: 700;
`;

export const ServiceDescription = styled.p`
  margin: 0;
  text-align: justify;
  color: var(--gray);
`;

export const ServiceList = styled.ul`
  margin: 10px 0 0 0;
  padding: 0;
  list-style-type: none;
`;

export const ServiceListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  text-align: justify;
  font-size: .85rem;
  color: var(--gray);
  padding: 15px 5px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  transition: left 0.2s ease-in-out;

  :hover {
    left: 3px;
  }

  :not(:first-child) {
    margin-top: 10px;
  }

  svg {
    margin-right: 5px;
  }
`;