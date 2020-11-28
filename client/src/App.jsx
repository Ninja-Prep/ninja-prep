import React from 'react'
import { LandingPage } from './views/LandingPage'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/login" exact component={Login} />
				</Switch>
			</Router>
		</div>
	)
}
export default App
