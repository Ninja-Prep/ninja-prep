import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {isPremiumUser} from 'reducers/auth/reducer';
import {toggleContactEmailModal, toggleLoginModal} from 'reducers/displayModal/actions';
import ProfileDropdown from '../../NavigationBarDropdownMenu/NavigationBarDropdownMenu';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal, toggleContactEmailModal});

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
        toggleContactEmailModal={() => {
          this.props.toggleContactEmailModal();
        }}
      />
    );
  }
}

export default connector(NavigationBarDropdownMenu);
