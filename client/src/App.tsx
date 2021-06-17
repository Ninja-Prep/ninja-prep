import React, {Component} from 'react';

import Error404Component from 'components/Error404/Error404';
import ChallengesPage from 'pages/ChallengesPage';
import LandingPage from 'pages/LandingPage';
import MeetTheTeamPage from 'pages/MeetTheTeamPage';
import PremiumPage from 'pages/PremiumPage';
import ProblemTemplatePage from 'pages/ProblemTemplatePage';
import ReactGA from 'react-ga';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {HeaderLayout, HeaderandFooterLayout} from 'utils/routing/Layouts';
import ProtectedRoute from 'utils/routing/ProtectedRoute';
import RouteWrapper from 'utils/routing/RouteWrapper';

class App extends Component {
  componentDidMount(): void {
    ReactGA.initialize('UA-196048314-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <ProtectedRoute
            path="/"
            exact
            authComponent={ChallengesPage}
            component={LandingPage}
            layout={HeaderLayout}
          />
          <RouteWrapper
            path="/about"
            exact
            component={MeetTheTeamPage}
            layout={HeaderandFooterLayout}
          />
          {/* <RouteWrapper
            path="/challenges"
            exact
            component={ChallengesPage}
            layout={HeaderLayout}
          />

          <RouteWrapper
            path="/premium"
            exact
            component={PremiumPage}
            layout={HeaderandFooterLayout}
          />
          <Route path="/problem/:id" exact component={ProblemTemplatePage} />
          */}
          <RouteWrapper
            exact
            component={Error404Component}
            layout={HeaderLayout}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
