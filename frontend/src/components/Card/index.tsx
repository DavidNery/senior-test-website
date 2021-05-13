import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 18px 14px;

  color: var(--gray);
`;

export const CardTitle = styled.h4`
  position: relative;

  text-align: center;
  color: var(--blue);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10px 0 20px 0;

  :first-child {
    margin-top: 0;
  }
`;

export const CardSubtitle = styled.h5`
  position: relative;

  text-align: center;
  color: var(--gray);
  font-size: 1rem;
  margin: 0 0 20px 0;
`;