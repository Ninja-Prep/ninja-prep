import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBarComponent from '../Partials/NavigationBar/NavigationBarComponent'
import LandingPage from '../../views/LandingPage'
import ChallengesPage from '../../views/ChallengesPage'
import MeetTheTeamPage from '../../views/MeetTheTeamPage'
import LoginPage from '../../views/LoginPage'
import FooterBarComponent from '../Partials/FooterBar/FooterBarComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div>
			<Router>
				<NavigationBarComponent />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/challenges" exact component={ChallengesPage} />
					<Route path="/about" exact component={MeetTheTeamPage} />
					<Route path="/login" exact component={LoginPage} />
				</Switch>
				<FooterBarComponent />
			</Router>
		</div>
	)
}
export default App
