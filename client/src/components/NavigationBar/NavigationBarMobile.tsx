/*
Wrapper component to add
- Links
- Modal
- Logged in dropdown
*/
import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {User} from 'utils/types/user';

import {LightNinjaPrepLogo} from '../../utils/NinjaPrepLogos';
import NavigationBarDropdownMenu from 'containers/NavigationBarDropdownMenu/NavigationBarDropdownMenu';
import NavLinks from 'containers/NavigationLinks/NavigationLinks';
import {FixedNavigationBar, NavigationDropdownPadding} from './styled';
import LoginModal from 'containers/LoginModal/LoginModal';

function NavigationBarMobile(): JSX.Element {
  return (
    <FixedNavigationBar fixed="top" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <LightNinjaPrepLogo height={40} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavLinks />
          <NavigationDropdownPadding>
            <NavigationBarDropdownMenu />
          </NavigationDropdownPadding>
        </Nav>
        <LoginModal />
      </Navbar.Collapse>
    </FixedNavigationBar>
  );
}

export default NavigationBarMobile;
