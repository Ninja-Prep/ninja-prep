import React from 'react';

import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {DarkNinjaPrepLogo} from '../../../utils/NinjaPrepLogos';
import {
  FooterContainer,
  FooterLogo,
  CenterWrapper,
  FooterSubheading,
  FooterNavLink,
} from './styled';

/**
 *
 */
function FooterBarDesktop(): JSX.Element {
  return (
    <FooterContainer>
      <FooterLogo>
        <DarkNinjaPrepLogo height={70} width={160} />
      </FooterLogo>
      <Col>
        <CenterWrapper>
          <FooterSubheading>NINJAPREP</FooterSubheading>
          <FooterNavLink as={Link} to="/about">
            About Us
          </FooterNavLink>
          <FooterNavLink as={Link} to="/premium">
            Get Premium
          </FooterNavLink>
        </CenterWrapper>
      </Col>
      <Col>
        <FooterSubheading>RESOURCES</FooterSubheading>
        <FooterNavLink as={Link} to="/about">
          Articles
        </FooterNavLink>
        <FooterNavLink as={Link} to="/challenges">
          Challenges
        </FooterNavLink>
      </Col>
    </FooterContainer>
  );
}

export default FooterBarDesktop;
