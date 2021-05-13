import React from 'react';
import { FiStar } from 'react-icons/fi';
import Carousel from '../../../../components/Carousel';
import {
  AuthorComment,
  AuthorName,
  AuthorPhoto,
  AuthorStars,
  ReviewContainer,
  StyledReviews
} from './style';

interface ReviewProps {
  authorPhoto: string;
  authorName: string;
  authorComment: string;
  stars: number;
}

const Review: React.FC<ReviewProps> = ({
  authorPhoto, authorName, authorComment, stars
}) => {
  return (
    <ReviewContainer>
      <AuthorPhoto src={authorPhoto} alt={authorName} />
      <AuthorName>{authorName}</AuthorName>
      <AuthorStars>
        {
          new Array(stars).fill(0).map((_, index) => (
            <FiStar key={index} size={15} color='var(--yellow)' />
          ))
        }
      </AuthorStars>

      <AuthorComment>{authorComment}</AuthorComment>
    </ReviewContainer>
  );
}

const Reviews: React.FC = () => {
  return (
    <StyledReviews>
      <h1 style={{ textAlign: 'center' }} className='shaded-text'>Reviews</h1>
      <ReviewContainer>
        <Carousel>
          {new Array(5).fill(0).map((_, index) => (
            <Review
              key={index}
              authorPhoto='https://cdn.discordapp.com/avatars/827614989892059247/b83ff87658f4898b2e94ef7c517fe0cc.png'
              authorName='alhassan'
              authorComment='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!!!'
              stars={Math.ceil(Math.random() * 4) + 1}
            />
          ))}
        </Carousel>
      </ReviewContainer>
    </StyledReviews>
  );
}

export default Reviews;