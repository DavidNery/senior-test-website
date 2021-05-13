import styled from "styled-components";

export const StyledReviews = styled.section`
  @media screen and (min-width: 1024px) {
    padding: 5% 15%;
  }

  @media screen and (max-width: 1024px) {
    padding: 5% 10%;
  }
`;

export const ReviewContainer = styled.div`
  padding: 1rem 0;
  color: var(--gray);
  text-align: center;
`;

export const AuthorPhoto = styled.img`
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

export const AuthorName = styled.h5`
  margin: 5px 0;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  color: #3c4858;
`;

export const AuthorStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  svg:not(:last-child) {
    margin-right: 5px;
  }
`;

export const AuthorComment = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1rem;
  font-style: italic;
  margin: 1rem 0 0 0;

  ::before, ::after {
    font-size: 1.5rem;
    font-style: normal;
  }

  ::before {
    content: '“';
  }

  ::after {
    content: '”';
  }
`;