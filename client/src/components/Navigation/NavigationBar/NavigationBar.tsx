/*
Wrapper component to add
- Links
- Modal
- Logged in dropdown
*/
import React from 'react';

import * as Styled from './styled';

import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import NavigationBarContent from '../containers/NavigationBarContent/NavigationBarContentContainer';
import {Link} from 'react-router-dom';

function NavigationBar(): JSX.Element {
  return (
    <Styled.FixedNavigationBar position="fixed" color="inherit">
      <Styled.Container>
        <Styled.Logo as={Link} to="/">
          <DarkNinjaPrepLogo height={40} width={100} />
        </Styled.Logo>
        <Styled.Links>
          <NavigationBarContent />
        </Styled.Links>
      </Styled.Container>
    </Styled.FixedNavigationBar>
  );
}

export default React.memo(NavigationBar);
