import React from 'react';
import {RouteProps} from 'react-router-dom';

import {HeaderandFooterLayout} from './Layouts';

type Props = {
  routeComponent: JSX.Element;
  hasFooter?: boolean;
} & RouteProps;

class HeaderNavbarRoute extends React.Component<Props> {
  render(): JSX.Element {
    const Component = this.props.routeComponent;

    return <HeaderandFooterLayout hasFooter={this.props.hasFooter}>{Component}</HeaderandFooterLayout>;
  }
}

export default HeaderNavbarRoute;
