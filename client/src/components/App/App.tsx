import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from '../../views/LandingPage'
import PremiumPage from '../../views/PremiumPage'
import ChallengesPage from '../../views/ChallengesPage'
import MeetTheTeamPage from '../../views/MeetTheTeamPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../Routes/ProtectedRoute'
import RouteWrapper from '../Routes/RouteWrapper'
import { HeaderandFooterLayout, HeaderLayout } from '../Routes/Layouts'
import ProblemTemplatePage from '../../views/ProblemTemplatePage'
import Error404Component from '../Error404/Error404Component'

import ReactGA from 'react-ga'

class App extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-196048314-3')
        ReactGA.pageview(window.location.pathname + window.location.search)
    }
    render() {
        return (
            <Router>
                <Switch>
                    <ProtectedRoute path="/" exact authComponent={ChallengesPage} component={LandingPage} layout={HeaderLayout} />
                    <RouteWrapper path="/challenges" exact component={ChallengesPage} layout={HeaderLayout} />
                    <RouteWrapper path="/about" exact component={MeetTheTeamPage} layout={HeaderandFooterLayout} />
                    <RouteWrapper path="/premium" exact component={PremiumPage} layout={HeaderandFooterLayout} />
                    <RouteWrapper path="/about" exact component={MeetTheTeamPage} layout={HeaderandFooterLayout} />
                    <Route path="/problem/:id" exact component={ProblemTemplatePage} />
                    <RouteWrapper exact component={Error404Component} layout={HeaderLayout} />
                </Switch>
            </Router>
        )
    }
}

export default App
