import React, {Fragment} from 'react';

import NavigationLinks from '../containers/NavigationLinks/NavigationLinksContainer';
import NavigationBarDropdownMenu from '../containers/NavigationBarDropdownMenu/NavigationBarDropdownMenuContainer';
import {Nav, Navbar} from 'react-bootstrap';
import FadeIn from 'react-fade-in';

interface Props {
  isLoadingUser: boolean;
}

function NavigationBarContent(props: Props) {
  if (props.isLoadingUser) {
    return <Fragment />;
  }
  return (
    <FadeIn>
      <Navbar.Collapse>
        <Nav>
          <NavigationLinks />
          <NavigationBarDropdownMenu />
        </Nav>
      </Navbar.Collapse>
    </FadeIn>
  );
}

export default NavigationBarContent;
