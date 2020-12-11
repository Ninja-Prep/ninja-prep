import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './NavigationBar.css'

function NavigationBarMobile() {
	return (
		<Navbar
			fixed="top"
			expand="lg"
			className="px-5 py-3 navigation-bar"
			variant="dark"
		>
			<Navbar.Brand as={Link} to="/">
				<img
					className="logo"
					src="./images/NinjaPrep-Logo.png"
					alt="logo"
					width="40"
					height="40"
				/>
				NinjaPrep
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto pr-5 mr-5">
					<Nav.Link as={Link} to="/premium" className="pl-3">
						Get Premium
					</Nav.Link>
					<Nav.Link as={Link} to="/challenges" className="pl-3">
						Challenges
					</Nav.Link>
					<Nav.Link as={Link} to="/about" className="pl-3">
						Meet the Team
					</Nav.Link>
					<Nav.Link as={Link} to="/login" className="pl-3 mr-5">
						Sign In
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavigationBarMobile
