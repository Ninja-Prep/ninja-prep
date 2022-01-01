import React, {Component, Fragment} from 'react';

import {connect, ConnectedProps} from 'react-redux';

import {RootState} from 'reducers/rootReducer';
import {toggleContactEmailModal, toggleLoginModal} from 'reducers/displayModal/actions';
import NavigationBarContent from '../../NavigationBarContent/NavigationBarContent';
import {isPremiumUser} from 'reducers/auth/reducer';

const mapStateToProps = (state: RootState) => {
  return {
    isLoadingUser: state.authReducer.isLoadingUser,
    authUser: state.authReducer.authUser,
    isPremium: isPremiumUser(state),
  };
};
const connector = connect(mapStateToProps, {toggleLoginModal, toggleContactEmailModal});

type Props = {
  isMobile?: boolean;
} & ConnectedProps<typeof connector>;

class NavigationBarContentContainer extends Component<Props> {
  render(): JSX.Element {
    if (this.props.isLoadingUser) {
      return <Fragment />;
    }
    return <NavigationBarContent {...this.props} />;
  }
}

export default connector(NavigationBarContentContainer);
