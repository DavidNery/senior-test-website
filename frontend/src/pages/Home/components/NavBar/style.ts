import styled, { css } from "styled-components";

interface NavProps {
  transparent?: boolean;
}

export const StyledNav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 10%;

  @media screen and (min-width: 1024px) {
    padding: 15px 15%;
  }

  transition: box-shadow 0.3s ease-in-out, background-color, 0.3s ease-in-out;

  ${({ transparent }) => !transparent ? css`
    background-color: white;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
  ` : css`
    background-color: transparent;
  `}
`;

export const NavBrand = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;

  img {
    max-width: 30px;
    border-radius: 8px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-end;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const NavLink = styled.li`
  @media screen and (min-width: 1024px) {
    :not(:last-child) {
      margin-right: 30px;
    }
  }

  a {
    color: #3c4858;
    font-size: .95rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color .2s ease-in-out;
  }

  :hover {
    a {
      color: var(--blue);
    }
  }
`;