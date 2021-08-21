import React, {Component} from 'react';

import NavigationBarDesktop from 'components/NavigationBar/NavigationBarDesktop';
import NavigationBarMobile from 'components/NavigationBar/NavigationBarMobile';
import Responsiveness from 'utils/hocs/Responsiveness';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
    isLoadingUser: state.authReducer.isLoadingUser,
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;
interface State {
  loadFadeIn: boolean;
}

class NavigationBar extends Component<Props, State> {
  state = {
    loadFadeIn: false,
  };

  constructor(props: Props) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Props) {
    if (nextProps.isLoadingUser !== this.props.isLoadingUser) {
      this.setState({loadFadeIn: true});
    }
    return !!nextProps.authUser !== !!this.props.authUser || nextProps.isLoadingUser !== this.props.isLoadingUser;
  }
  render(): JSX.Element {
    const desktopComponent = <NavigationBarDesktop {...this.props} loadFadeIn={this.state.loadFadeIn} />;
    const mobileComponent = <NavigationBarMobile {...this.props} />;

    return <Responsiveness desktop={desktopComponent} mobile={mobileComponent} />;
  }
}

export default connector(NavigationBar);
