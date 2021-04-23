/*
Wrapper component to add 
- Links
- Modal
- Logged in dropdown
*/
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './NavigationBar.css'
import { LightNavbarNinjaPrepLogo } from '../Logos/NinjaPrepLogos'
import { NavBarProps } from './NavigationBarComponent'
import NavigationBarLoginModalDesktop from './NavigationBarLogin/NavigationBarLoginModalDesktop'
import NavigationBarLoginDropdown from './NavigationBarLogin/NavigationBarLoginDropdown'
import { NavigationBarLinks } from './NavigationBarBaseComponent'

function NavigationBarDesktop(props: NavBarProps) {
    //For Shortcuts Icon
    const [showModalShortcuts, setShowModalShortcuts] = useState(false)
    const handleCloseModalShortcuts = () => setShowModalShortcuts(false)
    const handleShowModalShortcuts = () => setShowModalShortcuts(true)

    return (
        <Navbar fixed="top" expand="lg" className="px-5 py-3 navigation-bar" variant="dark">
            <Navbar.Brand as={Link} to="/" className="pl-5 ml-5">
                <LightNavbarNinjaPrepLogo height={40} width={100} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto pr-5 mr-5">
                    <NavigationBarLinks />
                    <NavigationBarLoginDropdown user={props.user} handleShow={handleShowModalShortcuts} />
                </Nav>
            </Navbar.Collapse>
            <NavigationBarLoginModalDesktop showShortcuts={showModalShortcuts} handleClose={handleCloseModalShortcuts} />
        </Navbar>
    )
}

export default NavigationBarDesktop
