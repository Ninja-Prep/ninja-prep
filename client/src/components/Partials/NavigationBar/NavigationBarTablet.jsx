import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import "./NavigationBar.css"
import {
  GET_PREMIUM_NAVIGATION,
  NINJA_PREP_NAVIGATION,
  CHALLENGES_NAVIGATION,
  MEET_THE_TEAM_NAVIGATION,
  SIGN_IN_NAVIGATION,
} from "./NavigationBarStringIds"

function NavigationBarMobile() {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="px-5 py-3 navigation-bar"
      variant="dark"
    >
      <div className="container p-0">
        <Navbar.Brand as={Link} to="/">
          <img
            className="mr-3"
            src="./images/NinjaPrep-Logo.png"
            alt="logo"
            width="40"
            height="40"
          />
          {NINJA_PREP_NAVIGATION}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/premium" className="pl-3">
              {GET_PREMIUM_NAVIGATION}
            </Nav.Link>
            <Nav.Link as={Link} to="/challenges" className="pl-3">
              {CHALLENGES_NAVIGATION}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="pl-3">
              {MEET_THE_TEAM_NAVIGATION}
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="pl-3">
              {SIGN_IN_NAVIGATION}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavigationBarMobile
