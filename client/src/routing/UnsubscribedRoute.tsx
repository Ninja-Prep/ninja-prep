/*


Pick between two components to render
- fallbackRedirectTo: Destination to redirect if user is not subscribed
- unsubscribedComponent: Component that only unsubscribed users have access to
*/

import React from 'react';

import {RouteComponentProps, RouteProps} from 'react-router';
import {RootState} from 'reducers/rootReducer';
import {connect, ConnectedProps} from 'react-redux';
import {withMobileSizing} from 'utils/hocs/withMediaSizing';

import RouteWrapper from './RouteWrapper';
import {isPremiumUser} from 'reducers/auth/reducer';
import {Redirect} from 'react-router-dom';
import {getAndSetUser} from 'reducers/auth/actions';

const mapStateToProps = (state: RootState) => {
  return {
    isUnsubscribedUser: !isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps, {getAndSetUser});

type Props = {
  fallbackRedirectTo: string;
  unsubscribedComponent: React.ComponentType<RouteComponentProps>;
  unsubscribedMobileComponent: React.ComponentType<RouteComponentProps>;
  isMobile?: boolean;
} & ConnectedProps<typeof connector> &
  RouteProps;

class UnsubscribedRoute extends React.Component<Props> {
  render(): JSX.Element | null {
    const UnsubscribedComponent = this.props.isMobile ? this.props.unsubscribedMobileComponent : this.props.unsubscribedComponent;

    if (this.props.isUnsubscribedUser && UnsubscribedComponent) {
      return <RouteWrapper component={UnsubscribedComponent} />;
    }
    return <Redirect to={this.props.fallbackRedirectTo} />;
  }
}

export default withMobileSizing(connector(UnsubscribedRoute));
