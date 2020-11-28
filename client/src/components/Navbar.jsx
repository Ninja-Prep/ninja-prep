import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<Link className="navbar-brand" to="/">
					<img className="logo" src="./images/NinjaPrep-Logo.png" alt="logo" />
					NinjaPrep
				</Link>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav ml-auto right-tabs">
						<li className="nav-item right">
							<Link className="nav-link" to="#">
								<p className="premium">Get Premium</p>
							</Link>
						</li>
						<li className="nav-item right">
							<Link className="nav-link" to="#">
								<p>Challenges</p>
							</Link>
						</li>
						<li className="nav-item right">
							<Link className="nav-link" to="#">
								<p>Resources</p>
							</Link>
						</li>
						<li className="nav-item right">
							<Link className="nav-link" to="/login">
								<p>Sign In</p>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
export { default as Navbar } from './Navbar'
