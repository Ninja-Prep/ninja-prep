import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBarComponent from '../Partials/NavigationBar/NavigationBarComponent'
import LandingPage from '../../views/LandingPage'
import PremiumPage from '../../views/PremiumPage'
import ChallengesPage from '../../views/ChallengesPage'
import MeetTheTeamPage from '../../views/MeetTheTeamPage'
import LoginPage from '../../views/LoginPage'
import FooterBarComponent from '../Partials/FooterBar/FooterBarComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../Routes/ProtectedRoute'
import ProblemTemplatePage from '../../views/ProblemTemplatePage'

class App extends Component {
    render() {
        return (
            <Router>
                <NavigationBarComponent />
                <Switch>
                    <ProtectedRoute path="/login" exact authComponent={ChallengesPage} component={LoginPage} />
                    <ProtectedRoute path="/" exact authComponent={ChallengesPage} component={LandingPage} />
                    <Route path="/premium" exact component={PremiumPage} />
                    <Route path="/challenges" exact component={ChallengesPage} />
                    <Route path="/about" exact component={MeetTheTeamPage} />
                    <Route path="/problem/:id" exact component={ProblemTemplatePage} />
                </Switch>
                <FooterBarComponent />
            </Router>
        )
    }
}

export default App
