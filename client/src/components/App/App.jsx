import React, { Component, Fragment } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cookies from 'universal-cookie'
import NavigationBarComponent from '../Partials/NavigationBar/NavigationBarComponent'
import LandingPage from '../../views/LandingPage'
import PremiumPage from '../../views/PremiumPage'
import ChallengesPage from '../../views/ChallengesPage'
import MeetTheTeamPage from '../../views/MeetTheTeamPage'
import LoginPage from '../../views/LoginPage'
import FooterBarComponent from '../Partials/FooterBar/FooterBarComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Axios from 'axios'

const cookies = new Cookies()

async function getLoginStatus() {
    const response = await Axios.get('/auth/getLoginStatus')
    cookies.set('isLoggedIn', response.data)
}

class App extends Component {
    constructor(props) {
        super(props)
    }

    async componentWillMount() {
        await getLoginStatus()
    }
    render() {
        return (
            <Router>
                <NavigationBarComponent />
                <Switch>
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/premium" exact component={PremiumPage} />
                    <Route
                        path="/challenges"
                        exact
                        component={ChallengesPage}
                    />
                    <Route path="/about" exact component={MeetTheTeamPage} />
                </Switch>
                <FooterBarComponent />
            </Router>
        )
    }
}

export default App
