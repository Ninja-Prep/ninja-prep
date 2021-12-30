import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {isPremiumUser} from 'reducers/auth/reducer';
import {withMobileSizing} from 'utils/hocs/withMediaSizing';
import {toggleContactEmailModal, toggleLoginModal} from 'reducers/displayModal/actions';
import ProfileDropdown from '../../NavigationBarDropdownMenu/NavigationBarDropdownMenu';
import NavigationBarMobile from 'components/Navigation/mobile/NavigationBar/NavigationBarMobile';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal, toggleContactEmailModal});

type Props = {
  isMobile?: boolean;
} & ConnectedProps<typeof connector>;

class NavigationBarDropdownMenu extends Component<Props> {
  render(): JSX.Element {
    return this.props.isMobile ? (
      <NavigationBarMobile
        authUser={this.props.authUser}
        isPremium={this.props.isPremiumUser}
        toggleLoginModal={() => {
          this.props.toggleLoginModal();
        }}
        toggleContactEmailModal={() => {
          this.props.toggleContactEmailModal();
        }}
      />
    ) : (
      <ProfileDropdown
        authUser={this.props.authUser}
        isPremium={this.props.isPremiumUser}
        toggleLoginModal={() => {
          this.props.toggleLoginModal();
        }}
        toggleContactEmailModal={() => {
          this.props.toggleContactEmailModal();
        }}
      />
    );
  }
}

export default withMobileSizing(connector(NavigationBarDropdownMenu));
