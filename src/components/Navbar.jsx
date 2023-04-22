import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../assets/logo.png';


const toggleHome = () => {
  scroll.scrollToTop()
}

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}><img src={Logo} alt=""/></NavLogo>
      </NavbarContainer>
    </Nav>
    </>
  );

};

export default Navbar;