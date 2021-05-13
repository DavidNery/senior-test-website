import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import User from '../../../../interfaces/User';
import SeniorsLogo from '../../../../resources/ST_LOGO.png';
import { NavBrand, NavLink, NavLinks, StyledNav } from './style';

const NavBar: React.FC = () => {
  const user = useSelector<any, User>(store => store?.user);

  const [transparent, setTransparent] = useState(true);
  const navLimit = useMemo(() => window.innerHeight * 0.1, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > navLimit && transparent)
        setTransparent(false);
      else if (window.pageYOffset < navLimit && !transparent)
        setTransparent(true);
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [navLimit, transparent]);

  return (
    <StyledNav transparent={transparent}>
      <NavBrand>
        <Link to='/'><img src={SeniorsLogo} alt="logo.png" /></Link>
      </NavBrand>
      <NavLinks>
        <NavLink><Link to='/'>Home</Link></NavLink>
        <NavLink>
          {user ? (
            <Link to='/me'>Hello, {user.name}</Link>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </NavLink>
      </NavLinks>
    </StyledNav >
  );
}

export default NavBar;