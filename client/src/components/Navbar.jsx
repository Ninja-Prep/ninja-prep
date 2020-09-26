import React from 'react'
import '../css/navbar.css'

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<a className="nav-link pl-0" href="#">
								<p>Home</p>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<p>About Us</p>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<p>Courses</p>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<p>Get Premium</p>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<p>Sign In</p>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<p>Sign Up</p>
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
