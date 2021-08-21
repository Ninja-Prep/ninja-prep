/*
Check cookie from server if user is logged in

Pick between two components to render
- AuthComponent: If user is logged in
- Component: If user is not authenticated or not logged in
*/

import React from 'react';

import {RouteComponentProps, RouteProps} from 'react-router';
import {RootState} from 'redux/rootReducer';
import {connect, ConnectedProps} from 'react-redux';

import RouteWrapper from './RouteWrapper';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
  };
};

const connector = connect(mapStateToProps);

type Props = {
  component: React.ComponentType<RouteComponentProps>;
  authComponent: React.ComponentType<RouteComponentProps>;
  layout: React.ComponentType<{children: React.ReactChild}>;
} & ConnectedProps<typeof connector> &
  RouteProps;

class ProtectedRoute extends React.Component<Props> {
  render(): JSX.Element | null {
    const Component = this.props.component;
    const AuthComponent = this.props.authComponent;
    const Layout = this.props.layout;

    if (this.props.authUser && AuthComponent) {
      return <RouteWrapper component={AuthComponent} layout={Layout} />;
    }
    return <RouteWrapper component={Component} layout={Layout} />;
  }
}

export default connector(ProtectedRoute);
