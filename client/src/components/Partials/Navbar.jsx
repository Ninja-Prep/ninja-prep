import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	const [collapsedCss, setIsNavCollapsed] = useState('')
	const handleNavCollapse = () => {
		if (collapsedCss == '') setIsNavCollapsed('collapse')
		else setIsNavCollapsed('')
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				<img
					className="logo"
					src="./images/NinjaPrep-Logo.png"
					alt="logo"
					width="60"
					height="60"
				/>
				NinjaPrep
			</Link>
			<button
				className="custom-toggler navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded={collapsedCss}
				aria-label="Toggle navigation"
				onClick={handleNavCollapse}
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div
				className={`${collapsedCss} navbar-collapse justify-content-end`}
				id="navbarTogglerDemo03"
			>
				<div class="navbar-nav">
					<Link className="nav-link" color="white" textDecoration="none" to="#">
						Get Premium
					</Link>

					<Link className="nav-link" to="/challenges">
						Challenges
					</Link>

					<Link className="nav-link" to="#">
						Resources
					</Link>

					<Link className="nav-link" to="/login">
						Sign In
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
