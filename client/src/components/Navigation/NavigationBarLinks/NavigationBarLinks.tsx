/*
Navigation Links shared between all device types
Help maintain consistency when a link is added, removed, updated
*/
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {GetFullAccessButton} from 'uiLibrary/CoreUI';

import {CHALLENGES_NAVIGATION} from 'utils/stringIds.json';

import * as Styled from './styled';

interface Props {
  isPremiumUser: boolean;
}

const NavigationBarLinks = (props: Props): JSX.Element => {
  return (
    <Fragment>
      {!props.isPremiumUser && <GetFullAccessButton sizing="medium" />}
      <Styled.NavLink as={Link} to="/challenges">
        {CHALLENGES_NAVIGATION}
      </Styled.NavLink>
    </Fragment>
  );
};

export default NavigationBarLinks;
