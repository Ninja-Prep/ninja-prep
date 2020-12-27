import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './NavigationBar.css'
import {
    GET_PREMIUM_NAVIGATION,
    NINJA_PREP_NAVIGATION,
    CHALLENGES_NAVIGATION,
    MEET_THE_TEAM_NAVIGATION,
    SIGN_IN_NAVIGATION,
} from './NavigationBarStringIds'

function NavigationBarDesktop(props) {
    function renderLoginLink() {
        if (props.user) {
            return (
                <Nav.Link href="/auth/logout" className="pl-3 mr-5">
                    {props.user.first_name}
                </Nav.Link>
            )
        } else {
            return (
                <Nav.Link as={Link} to="/login" className="pl-3 mr-5">
                    {SIGN_IN_NAVIGATION}
                </Nav.Link>
            )
        }
    }
    return (
        <Navbar fixed="top" expand="lg" className="px-5 py-3 navigation-bar" variant="dark">
            <Navbar.Brand as={Link} to="/" className="pl-5 ml-5">
                <img className="logo ml-5 mr-3" src="./images/NinjaPrep-Logo.png" alt="logo" width="40" height="40" />
                {NINJA_PREP_NAVIGATION}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto pr-5 mr-5">
                    <Nav.Link as={Link} to="/premium" className="pl-3">
                        {GET_PREMIUM_NAVIGATION}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/challenges" className="pl-3">
                        {CHALLENGES_NAVIGATION}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className="pl-3">
                        {MEET_THE_TEAM_NAVIGATION}
                    </Nav.Link>
                    {renderLoginLink()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBarDesktop
