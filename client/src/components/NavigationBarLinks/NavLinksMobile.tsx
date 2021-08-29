/*
Navigation Links shared between all device types
Help maintain consistency when a link is added, removed, updated
*/
import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';
import {GET_PREMIUM_NAVIGATION, CHALLENGES_NAVIGATION, MEET_THE_TEAM_NAVIGATION} from 'utils/stringIds.json';

import {NavLinkMobile} from './styled';

interface Props {
  isPremiumUser: boolean;
}

const NavLinksMobile = (props: Props): JSX.Element => {
  return (
    <Fragment>
      {!props.isPremiumUser && (
        <NavLinkMobile as={Link} to="/premium">
          {GET_PREMIUM_NAVIGATION}
        </NavLinkMobile>
      )}
      <NavLinkMobile as={Link} to="/challenges">
        {CHALLENGES_NAVIGATION}
      </NavLinkMobile>
      <NavLinkMobile as={Link} to="/about">
        {MEET_THE_TEAM_NAVIGATION}
      </NavLinkMobile>
    </Fragment>
  );
};

export default NavLinksMobile;
