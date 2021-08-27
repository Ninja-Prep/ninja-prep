/*
Check cookie from server if user is logged in

Pick between two components to render
- AuthComponent: If user is logged in
- Component: If user is not authenticated or not logged in
*/

import React, {Fragment} from 'react';

import {RouteComponentProps, RouteProps} from 'react-router';
import {RootState} from 'redux/rootReducer';
import {connect, ConnectedProps} from 'react-redux';

import RouteWrapper from './RouteWrapper';
import {Redirect} from 'react-router-dom';
import AsyncSpinner from 'utils/AsyncSpinner';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
    isLoadingUser: state.authReducer.isLoadingUser,
  };
};

const connector = connect(mapStateToProps);

type Props = {
  component?: React.ComponentType<RouteComponentProps>;
  authComponent: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  layout: React.ComponentType<{children: React.ReactChild | React.ReactChild[]}>;
  fallbackRedirectTo?: string;
} & ConnectedProps<typeof connector> &
  RouteProps;

type State = {
  mounted: boolean;
};

class ProtectedRoute extends React.Component<Props, State> {
  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({mounted: true});
  }

  render(): JSX.Element {
    const Component = this.props.component;
    const AuthComponent = this.props.authComponent;
    const Layout = this.props.layout;

    let RouterWrapper = <Fragment />;
    if (this.props.authUser && AuthComponent) {
      RouterWrapper = <RouteWrapper component={AuthComponent} />;
    } else if (this.props.isLoadingUser) {
      RouterWrapper = <AsyncSpinner />;
    } else if (Component) {
      RouterWrapper = <RouteWrapper component={Component} />;
    } else if (this.state.mounted && !this.props.authUser) {
      return <Redirect to={this.props.fallbackRedirectTo || '/'} />;
    }

    return <Layout>{RouterWrapper}</Layout>;
  }
}

export default connector(ProtectedRoute);
