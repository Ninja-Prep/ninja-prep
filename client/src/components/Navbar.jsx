import React from 'react'
import '../css/navbar.css'

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
				<a className="navbar-brand" href="#">
					<img className="logo" src="./images/NinjaPrep-Logo.png" alt="logo" />
					NinjaPrep
				</a>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav ml-auto right-tabs">
						<li className="nav-item right">
							<a className="nav-link" href="#">
								<p className="premium">Get Premium</p>
							</a>
						</li>
						<li className="nav-item right">
							<a className="nav-link" href="#">
								<p>Challenges</p>
							</a>
						</li>
						<li className="nav-item right">
							<a className="nav-link" href="#">
								<p>Resources</p>
							</a>
						</li>
						<li className="nav-item right">
							<a className="nav-link" href="#">
								<p>Sign In</p>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
export { default as Navbar } from './Navbar'
