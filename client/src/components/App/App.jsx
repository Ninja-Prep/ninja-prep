import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBarComponent from '../Partials/NavigationBar/NavigationBarComponent'
import LandingPage from '../../views/LandingPage'
import ChallengesPage from '../../views/ChallengesPage'
import MeetTheTeamPage from '../../views/MeetTheTeamPage'
import LoginPage from '../../views/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from '../Routes/ProtectedRoute'
import RouteWrapper from '../Routes/RouteWrapper'
import { FooterLayout } from '../Routes/Layouts'
import ProblemTemplatePage from '../../views/ProblemTemplatePage'

console.log(30)
class App extends Component {
    render() {
        return (
            <Router>
                <NavigationBarComponent />
                <Switch>
                    <ProtectedRoute
                        path="/login"
                        exact
                        authComponent={ChallengesPage}
                        component={LoginPage}
                        layout={FooterLayout}
                    />
                    <ProtectedRoute
                        path="/"
                        exact
                        authComponent={ChallengesPage}
                        component={LandingPage}
                        layout={FooterLayout}
                    />
                    <RouteWrapper path="/challenges" exact component={ChallengesPage} layout={FooterLayout} />
                    <RouteWrapper path="/about" exact component={MeetTheTeamPage} layout={FooterLayout} />
                    <Route path="/problem/:id" exact component={ProblemTemplatePage} />
                </Switch>
            </Router>
        )
    }
}

export default App
