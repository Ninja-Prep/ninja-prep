import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {isPremiumUser} from 'redux/auth/reducer';
import {toggleLoginModal} from 'redux/loginModal/actions';
import ProfileDropdown from 'components/NavigationBarDropdownMenu/ProfileDropdown';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
    isPremiumUser: isPremiumUser(state),
    showLoginModal: state.loginModal.showLoginModal,
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal});

type Props = ConnectedProps<typeof connector>;

class NavigationBarDropdownMenu extends Component<Props> {
  render(): JSX.Element {
    return (
      <ProfileDropdown
        authUser={this.props.authUser}
        isPremium={this.props.isPremiumUser}
        toggleLoginModal={() => {
          this.props.toggleLoginModal();
        }}
      />
    );
  }
}

export default connector(NavigationBarDropdownMenu);
