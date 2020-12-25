import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'

function FooterBarTablet() {
    return (
        <Navbar sticky="bottom" className="px-5 border-top">
            <Row className="py-5 mx-auto container">
                <Col className="my-auto p-0">
                    <img
                        src="./images/NinjaPrep-Logo.png"
                        alt="logo"
                        width="70"
                        height="70"
                    />
                </Col>
                <Col>
                    <p className="font-weight-bold text-secondary">NINJAPREP</p>
                    <Nav.Link as={Link} to="/about" className="pl-0 text-dark">
                        About Us
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/premium"
                        className="pl-0 text-dark"
                    >
                        Get Premium
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/roadmap"
                        className="pl-0 text-dark"
                    >
                        Roadmap
                    </Nav.Link>
                </Col>
                <Col>
                    <p className="font-weight-bold text-secondary">COURSES</p>
                    <Nav.Link as={Link} to="/about" className="pl-0 text-dark">
                        Stacks
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/premium"
                        className="pl-0 text-dark"
                    >
                        Queues
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/roadmap"
                        className="pl-0 text-dark"
                    >
                        Linked List
                    </Nav.Link>
                </Col>
                <Col>
                    <p className="font-weight-bold text-secondary">RESOURCES</p>
                    <Nav.Link as={Link} to="/about" className="pl-0 text-dark">
                        Articles
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/premium"
                        className="pl-0 text-dark"
                    >
                        Challenges
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/roadmap"
                        className="pl-0 text-dark"
                    >
                        Cheatsheets
                    </Nav.Link>
                </Col>
            </Row>
        </Navbar>
    )
}

export default FooterBarTablet
export { default as FooterBarTablet } from './FooterBarTablet'
