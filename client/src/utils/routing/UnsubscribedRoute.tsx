/*


Pick between two components to render
- fallbackRedirectTo: Destination to redirect if user is not subscribed
- unsubscribedComponent: Component that only unsubscribed users have access to
*/

import React from 'react';

import {RouteComponentProps, RouteProps} from 'react-router';
import {RootState} from 'redux/rootReducer';
import {connect, ConnectedProps} from 'react-redux';

import RouteWrapper from './RouteWrapper';
import {isPremiumUser} from 'redux/auth/reducer';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state: RootState) => {
  return {
    isUnsubscribedUser: !isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps);

type Props = {
  fallbackRedirectTo: string;
  unsubscribedComponent: React.ComponentType<RouteComponentProps>;
  layout: React.ComponentType<{children: React.ReactChild}>;
} & ConnectedProps<typeof connector> &
  RouteProps;

class ProtectedRoute extends React.Component<Props> {
  render(): JSX.Element | null {
    const UnsubscribedComponent = this.props.unsubscribedComponent;
    const Layout = this.props.layout;

    if (this.props.isUnsubscribedUser && UnsubscribedComponent) {
      return <RouteWrapper component={UnsubscribedComponent} layout={Layout} />;
    }
    return <Redirect to={this.props.fallbackRedirectTo} />;
  }
}

export default connector(ProtectedRoute);
