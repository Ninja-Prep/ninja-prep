import React, {Component} from 'react';

import NavigationBarDesktop from 'components/NavigationBar/NavigationBarDesktop';
import NavigationBarMobile from 'components/NavigationBar/NavigationBarMobile';
import Responsiveness from 'utils/hocs/Responsiveness';

class NavigationBar extends Component {
  render(): JSX.Element {
    const desktopComponent = <NavigationBarDesktop />;
    const mobileComponent = <NavigationBarMobile />;

    return <Responsiveness desktop={desktopComponent} mobile={mobileComponent} />;
  }
}

export default NavigationBar;
