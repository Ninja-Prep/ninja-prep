import React, {Component, Fragment} from 'react';

import {connect, ConnectedProps} from 'react-redux';

import {RootState} from 'reducers/rootReducer';
import {toggleContactEmailModal, toggleLoginModal} from 'reducers/displayModal/actions';
import {withMobileSizing} from 'utils/hocs/withMediaSizing';
import {isPremiumUser} from 'reducers/auth/reducer';
import NavigationBarMobile from 'components/Navigation/mobile/NavigationBar/NavigationBarMobile';

const mapStateToProps = (state: RootState) => {
  return {
    isLoadingUser: state.authReducer.isLoadingUser,
    authUser: state.authReducer.authUser,
    isPremiumUser: isPremiumUser(state),
  };
};
const connector = connect(mapStateToProps, {toggleLoginModal, toggleContactEmailModal});

type Props = {
  isMobile?: boolean;
} & ConnectedProps<typeof connector>;

class NavigationBarMobileContainer extends Component<Props> {
  render(): JSX.Element {
    if (this.props.isLoadingUser) {
      return <Fragment />;
    }
    return <NavigationBarMobile {...this.props} />;
  }
}

export default withMobileSizing(connector(NavigationBarMobileContainer));
