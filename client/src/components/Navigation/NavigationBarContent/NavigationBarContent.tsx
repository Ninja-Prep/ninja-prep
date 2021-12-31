import React, {Fragment} from 'react';

import NavigationLinks from '../containers/NavigationLinks/NavigationLinksContainer';
import {LoginModalContainer} from 'components/Login';
import ContactEmailModalContainer from 'components/ContactEmail/containers/ContactEmailModalContainer';
import {User} from 'utils/types/user';
import NavigationBarDropdownMenu from '../NavigationBarDropdownMenu/NavigationBarDropdownMenu';

interface Props {
  readonly authUser: User;
  readonly toggleLoginModal: () => void;
  readonly toggleContactEmailModal: () => void;
  readonly isPremium?: boolean;
}

function NavigationBarContent(props: Props) {
  return (
    <Fragment>
      <NavigationLinks />
      <NavigationBarDropdownMenu {...props} />
      <LoginModalContainer />
      <ContactEmailModalContainer />
    </Fragment>
  );
}

export default NavigationBarContent;
