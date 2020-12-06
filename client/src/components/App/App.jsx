import React from 'react'
import Navbar from '../Partials/Navbar'
import LandingPageView from '../../views/LandingPageView'
import ChallengesView from '../../views/ChallengesView'
import LoginView from '../../views/LoginView'
import Footer from '../Partials/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={LandingPageView} />
					<Route path="/challenges" exact component={ChallengesView} />
					<Route path="/login" exact component={LoginView} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}
export default App
