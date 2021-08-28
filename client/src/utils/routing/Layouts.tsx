/*
Layouts for pageouts to include additional content
- Above
- Below
- In between
other components
*/

import React, {FunctionComponent} from 'react';

import FooterBarComponent from 'components/FooterBar/FooterBarComponent';
import NavigationBar from 'containers/NavigationBar/NavigationBar';

import {FooterMargin, HeaderPadding} from './styledLayouts';
import {RouteComponentProps, RouteProps} from 'react-router';

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
      <FooterMargin>
        <FooterBarComponent />
      </FooterMargin>
    </div>
  ),
);

export const HeaderandFooterLayout: FunctionComponent<Props> = React.memo(({children, hasFooter}: Props) => (
  <HeaderPadding>
    <NavigationBar />
    {children}
    <FooterMargin style={hasFooter ? {} : {display: 'none'}}>
      <FooterBarComponent />
    </FooterMargin>
  </HeaderPadding>
));
