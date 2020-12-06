import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function NavigationBar() {
	return (
		<Navbar fixed="top" bg="dark" expand="lg" className="px-5" variant="dark">
			<Navbar.Brand as={Link} to="/" className="pl-5 ml-5">
				<img
					className="logo ml-5"
					src="./images/NinjaPrep-Logo.png"
					alt="logo"
					width="60"
					height="60"
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
					<Nav.Link as={Link} to="/premium" className="pl-3">
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

export default NavigationBar
