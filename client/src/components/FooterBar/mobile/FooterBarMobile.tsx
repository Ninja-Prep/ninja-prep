import React from 'react';

import {FooterLink, FooterNavbar} from './styled';

/**
 *
 */
function FooterBarMobile(): JSX.Element {
  return (
    <FooterNavbar>
      <span>Copyright &copy; 2020 NinjaPrep</span>
      <span>|</span>
      <FooterLink to="/about">About</FooterLink>
      <span>|</span>
      <FooterLink to="/premium">Premium</FooterLink>
      <span>|</span>
      <FooterLink to="/roadmap">Roadmap</FooterLink>
    </FooterNavbar>
  );
}

export default FooterBarMobile;
