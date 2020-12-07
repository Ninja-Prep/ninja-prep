import React from 'react'
import NavigationBar from '../Partials/NavigationBar'
import LandingPageView from '../../views/LandingPageView'
import ChallengesView from '../../views/ChallengesView'
import LoginView from '../../views/LoginView'
import Footer from '../Partials/Footer'
import FooterBar from '../Partials/FooterBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div>
			<Router>
				<NavigationBar />
				<Switch>
					<Route path="/" exact component={LandingPageView} />
					<Route path="/challenges" exact component={ChallengesView} />
					<Route path="/about" exact component={ChallengesView} />
					<Route path="/login" exact component={LoginView} />
				</Switch>
				<Footer />
				<FooterBar />
			</Router>
		</div>
	)
}
export default App
