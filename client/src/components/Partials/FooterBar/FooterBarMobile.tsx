import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function FooterBarMobile() {
    return (
        <Navbar className=" px-auto py-3 m-auto border-top d-absolute">
            <div className="mx-auto container">
                <p className="text-secondary m-0">Copyright &copy; 2020 NinjaPrep</p>
                <p className="text-secondary m-0 px-2">|</p>
                <Nav.Link as={Link} to="/about" className="p-0 text-dark">
                    About
                </Nav.Link>
                <p className="text-secondary m-0 px-2">|</p>
                <Nav.Link as={Link} to="/premium" className="p-0 text-dark">
                    Premium
                </Nav.Link>
                <p className="text-secondary m-0 px-2">|</p>
                <Nav.Link as={Link} to="/roadmap" className="p-0 text-dark">
                    Roadmap
                </Nav.Link>
            </div>
        </Navbar>
    )
}

export default FooterBarMobile
