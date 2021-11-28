/*
Wrapper component to add
- Links
- Modal
- Logged in dropdown
*/
import React from 'react';

import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {NavigationBarFullWidth, FixedNavigationBar, PositionLogo, NavigationFloatRight} from './styled';

import {LoginModalContainer} from 'components/Login';
import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import NavigationBarContent from '../containers/NavigationBarContent/NavigationBarContentContainer';

function NavigationBar(): JSX.Element {
  return (
    <FixedNavigationBar fixed="top" expand="lg" variant="dark">
      <PositionLogo>
        <Navbar.Brand as={Link} to="/">
          <DarkNinjaPrepLogo height={40} width={100} />
        </Navbar.Brand>
      </PositionLogo>
      <NavigationBarFullWidth>
        <NavigationFloatRight>
          <NavigationBarContent />
        </NavigationFloatRight>
      </NavigationBarFullWidth>
      <LoginModalContainer />
    </FixedNavigationBar>
  );
}

export default React.memo(NavigationBar);
