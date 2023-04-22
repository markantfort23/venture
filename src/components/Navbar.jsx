import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';


const toggleHome = () => {
  scroll.scrollToTop()
}

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>Kitchen Kapital</NavLogo>
      </NavbarContainer>
    </Nav>
    </>
  );

};

export default Navbar;