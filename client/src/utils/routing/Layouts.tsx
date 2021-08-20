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

interface Props {
  children: React.ReactChild;
}

export const HeaderLayout = ({children}: Props): JSX.Element => (
  <HeaderPadding>
    <NavigationBar />
    {children}
  </HeaderPadding>
);

export const FooterLayout = ({children}: Props): JSX.Element => (
  <div>
    {children}
    <FooterMargin>
      <FooterBarComponent />
    </FooterMargin>
  </div>
);

export const HeaderandFooterLayout: FunctionComponent<Props> = ({children}: Props) => (
  <HeaderPadding>
    <NavigationBar />
    {children}
    <FooterMargin>
      <FooterBarComponent />
    </FooterMargin>
  </HeaderPadding>
);
