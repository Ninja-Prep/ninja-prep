/*
Layouts for pageouts to include additional content
- Above
- Below
- In between
other components
*/

import React, {FunctionComponent} from 'react';

import {FooterBarContainer} from 'components/Navigation';
import NavigationBar from 'components/Navigation/NavigationBar/NavigationBar';

import {HeaderPadding} from './styledLayouts';
import {RouteProps} from 'react-router';
import * as Styled from './styledLayouts';
import {useMediaQuery} from 'react-responsive';
import NavigationBarDropdownMenu from 'components/Navigation/containers/NavigationBarDropdownMenu/NavigationBarDropdownMenuContainer';

interface Props extends RouteProps {
  children: React.ReactChild | React.ReactChild[];
  hasFooter?: boolean;
}

export const HeaderLayout = React.memo(({children}: Props): JSX.Element => {
  const isMobile = useMediaQuery({maxWidth: 1280});

  return (
    <HeaderPadding>
      {isMobile ? <NavigationBarDropdownMenu /> : <NavigationBar />}
      {children}
    </HeaderPadding>
  );
});

export const FooterLayout = React.memo(
  ({children}: Props): JSX.Element => (
    <Styled.Container>
      {children}
      <FooterBarContainer />
    </Styled.Container>
  ),
);

export const HeaderandFooterLayout: FunctionComponent<Props> = React.memo(({children, hasFooter}: Props) => {
  const isMobile = useMediaQuery({maxWidth: 1280});

  return (
    <HeaderPadding>
      {isMobile ? <NavigationBarDropdownMenu /> : <NavigationBar />}
      <Styled.Container>
        {children}
        <div style={hasFooter ? {} : {display: 'none'}}>
          <FooterBarContainer />
        </div>
      </Styled.Container>
    </HeaderPadding>
  );
});
