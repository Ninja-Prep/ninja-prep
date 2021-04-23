import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import { DarkNavbarNinjaPrepLogo } from '../Logos/NinjaPrepLogos'

function FooterBarDesktop() {
    return (
        <Navbar className="px-5 border-top">
            <Row className="py-4 mx-auto container">
                <Col className="my-auto p-0">
                    <DarkNavbarNinjaPrepLogo height={70} width={160} />
                </Col>
                <Col>
                    <p className="font-weight-bold text-secondary">NINJAPREP</p>
                    <Nav.Link as={Link} to="/about" className="pl-0 text-dark">
                        About Us
                    </Nav.Link>
                    <Nav.Link as={Link} to="/premium" className="pl-0 text-dark">
                        Get Premium
                    </Nav.Link>
                </Col>
                <Col>
                    <p className="font-weight-bold text-secondary">COURSES</p>
                    <Nav.Link as={Link} to="/about" className="pl-0 text-dark">
                        Stacks
                    </Nav.Link>
                    <Nav.Link as={Link} to="/premium" className="pl-0 text-dark">
                        Queues
                    </Nav.Link>
                </Col>
                <Col>
                    <p className="font-weight-bold text-secondary">RESOURCES</p>
                    <Nav.Link as={Link} to="/about" className="pl-0 text-dark">
                        Articles
                    </Nav.Link>
                    <Nav.Link as={Link} to="/premium" className="pl-0 text-dark">
                        Challenges
                    </Nav.Link>
                </Col>
            </Row>
        </Navbar>
    )
}

export default FooterBarDesktop
