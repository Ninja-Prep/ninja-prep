import React from 'react';

import {RouteComponentProps, RouteProps} from 'react-router';

import RouteWrapper from './RouteWrapper';

type Props = {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentClass<any>;
} & RouteProps;

class DefaultRoute extends React.Component<Props> {
  render(): JSX.Element {
    const Component = this.props.component;

    return <RouteWrapper {...this.props} component={Component} />;
  }
}

export default DefaultRoute;
