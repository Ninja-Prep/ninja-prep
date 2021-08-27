import React, {Component} from 'react';

import Error404Component from 'components/Error404/Error404';
import ChallengesPage from 'pages/ChallengesPage/ChallengesPage';
import LandingPage from 'pages/LandingPage';
import MeetTheTeamPage from 'pages/MeetTheTeamPage';
import PremiumPage from 'pages/PremiumPage';
import ProblemSubmissionPage from 'pages/ProblemSubmissionPage/ProblemSubmissionPage';
import OrderSuccess from 'containers/OrderSuccess/OrderSuccess';
import ReactGA from 'react-ga';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {HeaderLayout, HeaderandFooterLayout} from 'utils/routing/Layouts';
import ProtectedRoute from 'utils/routing/ProtectedRoute';
import {connect, ConnectedProps} from 'react-redux';
import {loadingUser, loadingUserSuccess, setUser} from 'redux/auth/actions';
import {getUser} from 'services/auth/authService';
import UnsubscribedRoute from 'utils/routing/UnsubscribedRoute';
import DefaultRoute from 'utils/routing/DefaultRoute';

const connector = connect(null, {loadingUser, setUser, loadingUserSuccess});

class App extends Component<ConnectedProps<typeof connector>> {
  async componentDidMount(): Promise<void> {
    ReactGA.initialize('UA-196048314-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.props.loadingUser();
    const user = await getUser();
    this.props.setUser(user);
    this.props.loadingUserSuccess();
  }

  render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <ProtectedRoute path="/" exact authComponent={ChallengesPage} component={LandingPage} layout={HeaderLayout} />
          <ProtectedRoute path="/order/success" exact fallbackRedirectTo="/" authComponent={OrderSuccess} layout={HeaderLayout} />
          <DefaultRoute path="/about" exact component={MeetTheTeamPage} layout={HeaderandFooterLayout} />
          <DefaultRoute path="/challenges" exact component={ChallengesPage} layout={HeaderLayout} />
          <UnsubscribedRoute path="/premium" exact unsubscribedComponent={PremiumPage} fallbackRedirectTo="/" layout={HeaderandFooterLayout} />
          <Route path="/problem/:id" exact component={ProblemSubmissionPage} />
          <DefaultRoute exact component={Error404Component} layout={HeaderLayout} />
        </Switch>
      </Router>
    );
  }
}

export default connector(App);
