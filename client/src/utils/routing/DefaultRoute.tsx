import React from 'react';

import {RouteComponentProps, RouteProps} from 'react-router';

import RouteWrapper from './RouteWrapper';

type Props = {
  component: React.ComponentType<RouteComponentProps>;
  layout: React.ComponentType<{children: React.ReactChild | React.ReactChild[]}>;
} & RouteProps;

class DefaultRoute extends React.Component<Props> {
  render(): JSX.Element {
    const Component = this.props.component;
    const Layout = this.props.layout;

    return (
      <Layout>
        <RouteWrapper component={Component} />
      </Layout>
    );
  }
}

export default DefaultRoute;
