import React, {Component} from 'react';

import NavigationBarDesktop from 'components/NavigationBar/NavigationBarDesktop';
import NavigationBarMobile from 'components/NavigationBar/NavigationBarMobile';
import {getUser} from 'services/auth/authService';
import Responsiveness from 'utils/hocs/Responsiveness';
import {User} from 'utils/types/user';

interface State {
  readonly user: User;
}

class NavigationBar extends Component<Record<string, never>, State> {
  state: State = {
    user: null,
  };

  async componentDidMount(): Promise<void> {
    const user = await getUser();
    this.setState({user});
  }

  render(): JSX.Element {
    const desktopComponent = <NavigationBarDesktop user={this.state.user} />;
    const mobileComponent = <NavigationBarMobile user={this.state.user} />;

    return (
      <Responsiveness desktop={desktopComponent} mobile={mobileComponent} />
    );
  }
}

export default NavigationBar;
