import React, { useCallback } from 'react';
import { FiChevronUp, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { BackToTop, Copyright, SocialMedias, StyledFooter } from './style';

const Footer: React.FC = () => {
  const goToTop = useCallback(() => window.scrollTo({
    top: 0
  }), []);

  return (
    <StyledFooter>
      <SocialMedias>
        <a href="/">
          <FiInstagram size={20} color='white' />
        </a>
        <a href="/">
          <FiFacebook size={20} color='white' />
        </a>
        <a href="/">
          <FiLinkedin size={20} color='white' />
        </a>
      </SocialMedias>

      <BackToTop onClick={goToTop}>
        <FiChevronUp size={20} color='white' strokeWidth={3}/>
        <span style={{ marginLeft: '5px' }}>Back to top</span>
      </BackToTop>
      <Copyright>Dery / Seniors Team &copy; {new Date().getFullYear()}</Copyright>
    </StyledFooter>
  );
}

export default Footer;