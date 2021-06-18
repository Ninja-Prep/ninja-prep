import React from 'react';

import {Container} from 'react-bootstrap';

import {FooterLink, FooterNavbar} from './styled';

/**
 *
 */
function FooterBarMobile(): JSX.Element {
  return (
    <FooterNavbar>
      <Container>
        <span>Copyright &copy; 2020 NinjaPrep</span>
        <span>|</span>
        <FooterLink to="/about">About</FooterLink>
        <span>|</span>
        <FooterLink to="/premium">Premium</FooterLink>
        <span>|</span>
        <FooterLink to="/roadmap">Roadmap</FooterLink>
      </Container>
    </FooterNavbar>
  );
}

export default FooterBarMobile;
