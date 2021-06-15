/*
Check cookie from server if user is logged in

Pick between two components to render
- AuthComponent: If user is logged in
- Component: If user is not authenticated or not logged in
*/

import React from 'react';

import Axios from 'axios';
import {RouteComponentProps, RouteProps} from 'react-router';

import RouteWrapper from './RouteWrapper';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
  authComponent: React.ComponentType<RouteComponentProps>;
  layout: React.ComponentType<{children: React.ReactChild}>;
}

type State = {
  isAuthenticated: boolean;
  isLoading: boolean;
};

/**
 *
 */
class ProtectedRoute extends React.Component<Props, State> {
  state: State = {
    isAuthenticated: false,
    isLoading: true, // Wait to fetch authentication status before picking component to render
  };

  /**
   *
   */
  async getAuthStatus() {
    const authStatus = await Axios.get('/api/auth/authenticationStatus');
    console.log(this.getAuthStatus);
    this.setState({isAuthenticated: authStatus.data, isLoading: false});
  }

  /**
   *
   */
  componentDidMount() {
    this.getAuthStatus();
  }

  /**
   *
   */
  render() {
    const Component = this.props.component;
    const AuthComponent = this.props.authComponent;
    const Layout = this.props.layout;
    if (this.state.isAuthenticated && AuthComponent) {
      return <RouteWrapper component={AuthComponent} layout={Layout} />;
    } else if (this.state.isLoading) {
      return null;
    }
    return <RouteWrapper component={Component} layout={Layout} />;
  }
}

export default ProtectedRoute;
