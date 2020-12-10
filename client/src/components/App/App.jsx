import React from 'react'
import NavigationBar from '../Partials/NavigationBar'
import LandingPage from '../../views/LandingPage'
import ChallengesPage from '../../views/ChallengesPage'
import MeetTheTeamPage from '../../views/MeetTheTeamPage'
import LoginPage from '../../views/LoginPage'
import FooterBar from '../Partials/FooterBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div>
			<Router>
				<NavigationBar />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/challenges" exact component={ChallengesPage} />
					<Route path="/about" exact component={MeetTheTeamPage} />
					<Route path="/login" exact component={LoginPage} />
				</Switch>
				<FooterBar />
			</Router>
		</div>
	)
}
export default App
