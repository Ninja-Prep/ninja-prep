/*
Navigation Links shared between all device types
Help maintain consistency when a link is added, removed, updated
*/
import React, {Fragment} from 'react';

import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './NavigationBar.css';
import {
  GET_PREMIUM_NAVIGATION,
  CHALLENGES_NAVIGATION,
  MEET_THE_TEAM_NAVIGATION,
} from 'utils/stringIds.json';

const NavLinks = (): JSX.Element => {
  return (
    <Fragment>
      <Nav.Link as={Link} to="/premium" className="pl-3">
        {GET_PREMIUM_NAVIGATION}
      </Nav.Link>
      <Nav.Link as={Link} to="/challenges" className="pl-3">
        {CHALLENGES_NAVIGATION}
      </Nav.Link>
      <Nav.Link as={Link} to="/about" className="pl-3">
        {MEET_THE_TEAM_NAVIGATION}
      </Nav.Link>
    </Fragment>
  );
};

export default NavLinks;
