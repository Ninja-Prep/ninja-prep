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
import NavigationBarLoginModalTablet from './NavigationBarLogin/NavigationBarLoginModalTablet'
import NavigationBarLoginDropdown from './NavigationBarLogin/NavigationBarLoginDropdown'
import { NavBarProps } from './NavigationBarComponent'
import { NavigationBarLinks } from './NavigationBarBaseComponent'

function NavigationBarTablet(props: NavBarProps) {
    //For Shortcuts Icon
    const [showModalShortcuts, setShowModalShortcuts] = useState(false)
    const handleCloseModalShortcuts = () => setShowModalShortcuts(false)
    const handleShowModalShortcuts = () => setShowModalShortcuts(true)

    return (
        <Navbar fixed="top" expand="lg" className="px-5 py-3 navigation-bar" variant="dark">
            <div className="container p-0">
                <Navbar.Brand as={Link} to="/">
                    <LightNavbarNinjaPrepLogo height={40} width={100} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavigationBarLinks />
                        <NavigationBarLoginDropdown user={props.user} handleShow={handleShowModalShortcuts} />
                    </Nav>
                </Navbar.Collapse>
                <NavigationBarLoginModalTablet showShortcuts={showModalShortcuts} handleClose={handleCloseModalShortcuts} />
            </div>
        </Navbar>
    )
}

export default NavigationBarTablet
