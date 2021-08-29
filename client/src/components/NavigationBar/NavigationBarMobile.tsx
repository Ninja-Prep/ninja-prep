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
import {FixedNavigationBar} from './styled';
import LoginModal from 'containers/LoginModal/LoginModal';

interface NavBarProps {
  readonly authUser: User;
  readonly isLoadingUser: boolean;
}

function NavigationBarMobile(props: NavBarProps): JSX.Element {
  return (
    <FixedNavigationBar fixed="top" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <LightNinjaPrepLogo height={40} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavLinks />
          <NavigationBarDropdownMenu />
        </Nav>
        <LoginModal />
      </Navbar.Collapse>
    </FixedNavigationBar>
  );
}

export default NavigationBarMobile;
