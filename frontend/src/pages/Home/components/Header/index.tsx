import React from 'react';
import Bunisess from '../../../../resources/bunisess.svg';
import { StyledHeader } from './style';

const Header: React.FC = () => {
  const goToServices = () => {
    window.scrollTo({
      top: document.getElementsByTagName('section')[0].offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <StyledHeader>
      <div className="row" style={{ alignItems: 'center' }}>
        <div className="col-6">
          <img src={Bunisess} alt="bunisess.svg" style={{ maxWidth: '90%' }}/>
        </div>
        <div className="col-1"></div>
        <div className="col-5" style={{ textOverflow: 'ellipsis' }}>
          <h3>We're</h3>
          <h1>Seniors Team</h1>
          <p style={{ marginBottom: '15px' }}>
            We do a lot of things and help you turn your thoughts into reality!
          </p>

          <button className="btn bg-blue" onClick={goToServices}>Are you curious?</button>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;