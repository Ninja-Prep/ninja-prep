import React, {Fragment} from 'react';

import NavigationLinks from '../containers/NavigationLinks/NavigationLinksContainer';
import NavigationBarDropdownMenu from '../containers/NavigationBarDropdownMenu/NavigationBarDropdownMenuContainer';
import {LoginModalContainer} from 'components/Login';
import ContactEmailModalContainer from 'components/ContactEmail/containers/ContactEmailModalContainer';

function NavigationBarContent() {
  return (
    <Fragment>
      <NavigationLinks />
      <NavigationBarDropdownMenu />
      <LoginModalContainer />
      <ContactEmailModalContainer />
    </Fragment>
  );
}

export default NavigationBarContent;
