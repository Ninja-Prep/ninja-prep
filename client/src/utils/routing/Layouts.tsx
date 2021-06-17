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

import styles from './Layouts.module.scss';

interface Props {
  children: React.ReactChild;
}

export const HeaderLayout = ({children}: Props): JSX.Element => (
  <div className={styles.headerPadding}>
    <NavigationBar />
    {children}
  </div>
);

export const FooterLayout = ({children}: Props): JSX.Element => (
  <div>
    {children}
    <FooterBarComponent />
  </div>
);

export const HeaderandFooterLayout: FunctionComponent<Props> = ({
  children,
}: Props) => (
  <div className={styles.headerPadding}>
    <NavigationBar />
    {children}
    <FooterBarComponent />
  </div>
);
