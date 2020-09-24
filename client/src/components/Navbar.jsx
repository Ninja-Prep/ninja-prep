import React from 'react'
import '../css/navbar.css'

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light">
				<a href="https://www.google.com/">
					<img src="./images/logo.png" alt="logo" />
				</a>
				{/* <button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button> */}

				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a href="https://www.google.com/">link</a>
						</li>
						<li className="nav-item">
							<a href="https://www.google.com/">link</a>
						</li>
						<li className="nav-item">
							<a href="https://www.google.com/">link</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
export { default as Navbar } from './Navbar'
