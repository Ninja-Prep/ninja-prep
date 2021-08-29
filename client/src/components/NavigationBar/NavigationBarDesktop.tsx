/*
Wrapper component to add
- Links
- Modal
- Logged in dropdown
*/
import React from 'react';

import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {NavigationBarFullWidth, FixedNavigationBar, NavBarBrand, PositionLogo, NavigationFloatRight} from './styled';

import {LightNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import LoginModal from 'containers/LoginModal/LoginModal';
import NavigationBarContent from 'containers/NavigationBarContent/NavigationBarContent';

function NavigationBarDesktop(): JSX.Element {
  return (
    <FixedNavigationBar fixed="top" expand="lg" variant="dark">
      <NavBarBrand>
        <PositionLogo>
          <Navbar.Brand as={Link} to="/">
            <LightNinjaPrepLogo height={40} width={100} />
          </Navbar.Brand>
        </PositionLogo>
      </NavBarBrand>
      <Navbar.Toggle />
      <NavigationBarFullWidth>
        <NavigationFloatRight>
          <NavigationBarContent />
        </NavigationFloatRight>
      </NavigationBarFullWidth>
      <LoginModal />
    </FixedNavigationBar>
  );
}

export default React.memo(NavigationBarDesktop);
