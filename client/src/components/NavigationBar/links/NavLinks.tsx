/*
Navigation Links shared between all device types
Help maintain consistency when a link is added, removed, updated
*/
import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';
import {
  GET_PREMIUM_NAVIGATION,
  CHALLENGES_NAVIGATION,
  MEET_THE_TEAM_NAVIGATION,
} from 'utils/stringIds.json';

import NavLink from './styled';

const NavLinks = (): JSX.Element => {
  return (
    <Fragment>
      <NavLink as={Link} to="/premium">
        {GET_PREMIUM_NAVIGATION}
      </NavLink>
      <NavLink as={Link} to="/challenges">
        {CHALLENGES_NAVIGATION}
      </NavLink>
      <NavLink as={Link} to="/about">
        {MEET_THE_TEAM_NAVIGATION}
      </NavLink>
    </Fragment>
  );
};

export default NavLinks;
