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

import {RouteProps} from 'react-router';
import * as Styled from './styledLayouts';
import {useMediaQuery} from 'react-responsive';
import NavigationBarMobileContainer from 'components/Navigation/containers/NavigationBarMobileContainer/NavigationBarMobileContainer';

interface Props extends RouteProps {
  children: React.ReactChild | React.ReactChild[];
  hasFooter?: boolean;
}

export const HeaderLayout = React.memo(({children}: Props): JSX.Element => {
  const isMobile = useMediaQuery({maxWidth: 1280});

  return (
    <div>
      {isMobile ? <NavigationBarMobileContainer /> : <NavigationBar />}
      <Styled.Container>{children}</Styled.Container>
    </div>
  );
});

export const FooterLayout = React.memo(
  ({children}: Props): JSX.Element => (
    <div>
      <Styled.Container>{children}</Styled.Container>
      <FooterBarContainer />
    </div>
  ),
);

export const HeaderandFooterLayout: FunctionComponent<Props> = React.memo(({children, hasFooter}: Props) => {
  const isMobile = useMediaQuery({maxWidth: 1280});

  return (
    <div>
      {isMobile ? <NavigationBarMobileContainer /> : <NavigationBar />}
      <Styled.Container>{children}</Styled.Container>
      <div style={hasFooter ? {} : {display: 'none'}}>
        <FooterBarContainer />
      </div>
    </div>
  );
});
