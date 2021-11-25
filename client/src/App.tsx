import React, {Component} from 'react';

import ProblemSubmissionPage from './pages/ProblemSubmissionPage/ProblemSubmissionPage';
import ReactGA from 'react-ga';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {getAndSetUser} from 'reducers/auth/actions';
import DefaultRoute from 'routing/DefaultRoute';
import HeaderNavbarRoute from 'routing/HeaderNavbarRoute';
import {ChallengesRoute, Error404Route, LandingPageRoute, OrderSuccessRoute, PremiumRoute, SettingsPageRoute} from 'routing/routes';
import {displayFooter} from 'reducers/footer/actions';

const connector = connect(null, {getAndSetUser, displayFooter});

class App extends Component<ConnectedProps<typeof connector>> {
  async componentDidMount() {
    this.props.displayFooter(false);
    ReactGA.initialize('UA-196048314-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
    await this.props.getAndSetUser();
    this.props.displayFooter(true);
  }

  render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <HeaderNavbarRoute path="/" exact routeComponent={LandingPageRoute} hasFooter />
          <HeaderNavbarRoute path="/challenges" exact routeComponent={ChallengesRoute} hasFooter />
          <HeaderNavbarRoute path="/order/success" exact routeComponent={OrderSuccessRoute} hasFooter />
          <HeaderNavbarRoute path="/premium" exact routeComponent={PremiumRoute} hasFooter />
          <HeaderNavbarRoute path="/settings" exact routeComponent={SettingsPageRoute} hasFooter />
          <DefaultRoute path="/problem/:id" exact component={ProblemSubmissionPage} />
          <HeaderNavbarRoute routeComponent={Error404Route} />
        </Switch>
      </Router>
    );
  }
}

export default connector(App);
