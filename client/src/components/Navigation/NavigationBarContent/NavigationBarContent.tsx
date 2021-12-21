import React, {Fragment} from 'react';

import NavigationLinks from '../containers/NavigationLinks/NavigationLinksContainer';
import NavigationBarDropdownMenu from '../containers/NavigationBarDropdownMenu/NavigationBarDropdownMenuContainer';
import {LoginModalContainer} from 'components/Login';

function NavigationBarContent() {
  return (
    <Fragment>
      <NavigationLinks />
      <NavigationBarDropdownMenu />
      <LoginModalContainer />
    </Fragment>
  );
}

export default NavigationBarContent;
