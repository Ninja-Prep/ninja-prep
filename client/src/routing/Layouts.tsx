/*
Layouts for pageouts to include additional content
- Above
- Below
- In between
other components
*/

import React, {FunctionComponent} from 'react';

import {FooterBarContainer} from 'components/Navigation';
import NavigationBar from 'components/Navigation/containers/NavigationBar/NavigationBarContainer';

import {HeaderPadding} from './styledLayouts';
import {RouteProps} from 'react-router';

interface Props extends RouteProps {
  children: React.ReactChild | React.ReactChild[];
  hasFooter?: boolean;
}

export const HeaderLayout = React.memo(
  ({children}: Props): JSX.Element => (
    <HeaderPadding>
      <NavigationBar />
      {children}
    </HeaderPadding>
  ),
);

export const FooterLayout = React.memo(
  ({children}: Props): JSX.Element => (
    <div>
      {children}
      <FooterBarContainer />
    </div>
  ),
);

export const HeaderandFooterLayout: FunctionComponent<Props> = React.memo(({children, hasFooter}: Props) => (
  <HeaderPadding>
    <NavigationBar />
    {children}
    <div style={hasFooter ? {} : {display: 'none'}}>
      <FooterBarContainer />
    </div>
  </HeaderPadding>
));
