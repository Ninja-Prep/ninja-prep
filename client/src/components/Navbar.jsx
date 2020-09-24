import React from 'react'
import '../css/navbar.css'

function Navbar() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light">
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

				<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a href="https://www.google.com/">link</a>
						</li>
						<li class="nav-item">
							<a href="https://www.google.com/">link</a>
						</li>
						<li class="nav-item">
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
