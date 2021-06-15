/*
Layouts for pageouts to include additional content
- Above
- Below
- In between
other components
*/

import './Layouts.css';

import React, {FunctionComponent} from 'react';

import FooterBarComponent from '../../components/Partials/FooterBar/FooterBarComponent';
import NavigationBarComponent from '../../components/Partials/NavigationBar/NavigationBarComponent';

interface Props {
  children: React.ReactChild;
}

export const HeaderLayout = ({children}: Props) => (
  <div className="Header-Padding">
    <NavigationBarComponent />
    {children}
  </div>
);

export const FooterLayout = ({children}: Props) => (
  <div>
    {children}
    <FooterBarComponent />
  </div>
);

export const HeaderandFooterLayout: FunctionComponent<Props> = ({
  children,
}: Props) => (
  <div className="Header-Padding">
    <NavigationBarComponent />
    {children}
    <FooterBarComponent />
  </div>
);
