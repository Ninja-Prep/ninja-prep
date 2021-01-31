import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Image, Dropdown } from 'react-bootstrap'
import LockIcon from '@material-ui/icons/Lock'
import SettingsIcon from '@material-ui/icons/Settings'
import BugReportIcon from '@material-ui/icons/BugReport'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import './NavigationBar.css'
import {
    GET_PREMIUM_NAVIGATION,
    NINJA_PREP_NAVIGATION,
    CHALLENGES_NAVIGATION,
    MEET_THE_TEAM_NAVIGATION,
    SIGN_IN_NAVIGATION,
} from './NavigationBarStringIds'

function NavigationBarTablet(props) {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
      ));

    function renderLoginLink() {
        if (props.user) {
            
            return (
                <div>
                    <Dropdown menuAlign="right" className="pl-3">
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
                            <Image roundedCircle className="profile-picture" src={props.user.profile_picture} alt="ProfilePhoto"/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Dropdown.Item href="/Premium"><p className="get-premium"><LockIcon className="mr-3 my-2"/>Get Premium</p></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><p className="text-secondary"><BugReportIcon className="mr-3 my-2"/>Bug Report</p></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><p className="text-secondary"><SettingsIcon className="mr-3 my-2"/>Settings</p></Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="/auth/logout"><p className="text-secondary"><ExitToAppIcon className="mr-3 my-2"/>Sign Out</p></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
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
            <div className="container p-0">
                <Navbar.Brand as={Link} to="/">
                    <img className="mr-3" src="./images/NinjaPrep-Logo.png" alt="logo" width="40" height="40" />
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
                        {renderLoginLink()}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavigationBarTablet
