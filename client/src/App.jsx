import React from 'react'
import { Navbar } from './components/Navbar'
import { LandingPage } from './views/LandingPage'
import { Challenges } from './views/Challenges'
import { Login } from './views/Login'
import { Footer } from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/challenges" exact component={Challenges} />
					<Route path="/login" exact component={Login} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}
export default App
