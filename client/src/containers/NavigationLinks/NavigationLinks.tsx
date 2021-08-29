import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {isPremiumUser} from 'redux/auth/reducer';
import NavLinks from 'components/NavigationBarLinks/NavLinks';
import Responsiveness from 'utils/hocs/Responsiveness';
import NavLinksMobile from 'components/NavigationBarLinks/NavLinksMobile';

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class NavigationLinksContainer extends Component<Props> {
  render(): JSX.Element {
    const desktopComponent = <NavLinks isPremiumUser={this.props.isPremiumUser} />;
    const mobileComponent = <NavLinksMobile isPremiumUser={this.props.isPremiumUser} />;

    return <Responsiveness desktop={desktopComponent} mobile={mobileComponent} />;
  }
}

export default connector(NavigationLinksContainer);
