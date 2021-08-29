import React, {Component} from 'react';

import NavigationBarDesktop from 'components/NavigationBar/NavigationBarDesktop';
import NavigationBarMobile from 'components/NavigationBar/NavigationBarMobile';
import Responsiveness from 'utils/hocs/Responsiveness';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {toggleLoginModal} from 'redux/loginModal/actions';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
    isLoadingUser: state.authReducer.isLoadingUser,
    showLoginModal: state.loginModal.showLoginModal,
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal});

type Props = ConnectedProps<typeof connector>;

class NavigationBar extends Component<Props> {
  render(): JSX.Element {
    const desktopComponent = <NavigationBarDesktop />;
    const mobileComponent = <NavigationBarMobile {...this.props} />;

    return <Responsiveness desktop={desktopComponent} mobile={mobileComponent} />;
  }
}

export default connector(NavigationBar);
