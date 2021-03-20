import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from '../../views/LandingPage'
import PremiumPage from '../../views/PremiumPage'
import ChallengesPage from '../../views/ChallengesPage'
import MeetTheTeamPage from '../../views/MeetTheTeamPage'
import LoginPage from '../../views/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../Routes/ProtectedRoute'
import RouteWrapper from '../Routes/RouteWrapper'
import { HeaderandFooterLayout } from '../Routes/Layouts'
import ProblemTemplatePage from '../../views/ProblemTemplatePage'

class App extends Component {
    render() {
        return (
            <Router>
                {/* <NavigationBarComponent /> */}
                <Switch>
                    <ProtectedRoute
                        path="/login"
                        exact
                        authComponent={ChallengesPage}
                        component={LoginPage}
                        layout={HeaderandFooterLayout}
                    />
                    <ProtectedRoute
                        path="/"
                        exact
                        authComponent={ChallengesPage}
                        component={LandingPage}
                        layout={HeaderandFooterLayout}
                    />
                    <RouteWrapper path="/challenges" exact component={ChallengesPage} layout={FooterLayout} />
                    <RouteWrapper path="/about" exact component={MeetTheTeamPage} layout={FooterLayout} />
                    <RouteWrapper path="/premium" exact component={PremiumPage} layout={FooterLayout} />
                    <Route path="/challenges" exact component={ChallengesPage} />
                    <Route path="/about" exact component={MeetTheTeamPage} />
                    <Route path="/problem/:id" exact component={ProblemTemplatePage} />
                </Switch>
            </Router>
        )
    }
}

export default App
