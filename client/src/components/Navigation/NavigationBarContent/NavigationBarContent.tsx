import React, {Fragment} from 'react';

import NavigationLinks from '../containers/NavigationLinks/NavigationLinksContainer';
import NavigationBarDropdownMenu from '../containers/NavigationBarDropdownMenu/NavigationBarDropdownMenuContainer';
import {LoginModalContainer} from 'components/Login';

interface Props {
  isLoadingUser: boolean;
}

function NavigationBarContent(props: Props) {
  if (props.isLoadingUser) {
    return <Fragment />;
  }
  return (
    <Fragment>
      <NavigationLinks />
      <NavigationBarDropdownMenu />
      <LoginModalContainer />
    </Fragment>
  );
}

export default NavigationBarContent;
