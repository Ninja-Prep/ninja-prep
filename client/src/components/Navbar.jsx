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
					<img className="logo" src="./images/logo.png" alt="logo" />
				</a>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto left-tabs">
						<li className="nav-item left ">
							<a className="nav-link" href="#">
								<p>Home</p>
							</a>
						</li>
						<li className="nav-item left">
							<a className="nav-link" href="#">
								<p>About Us</p>
							</a>
						</li>
						<li className="nav-item left">
							<a className="nav-link" href="#">
								<p>Courses</p>
							</a>
						</li>
					</ul>
						<ul className="navbar-nav ml-auto right-tabs">
						<li className="nav-item right">
							<a className="nav-link" href="#">
								<p className="premium bold">Get Premium</p>
							</a>
						</li>
						<li className="nav-item right">
							<a className="nav-link" href="#">
								<p>Sign In</p>
							</a>
						</li>
						<li className="nav-item right">
							<a className="nav-link" href="#">
								<p className="bold">Sign Up</p>
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
