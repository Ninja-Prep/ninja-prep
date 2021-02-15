import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, Row, Col } from 'react-bootstrap'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import './code-editor-navbar.css'

function CodeEditorNavbar(props) {
    function renderLoginLink() {
        if (props.user) {
            return (
                <Nav.Link href="/auth/logout" className="pl-3 text-light">
                    Sign Out
                </Nav.Link>
            )
        } else {
            return (
                <Nav.Link as={Link} to="/login" className="pl-3 d-inline text-light">
                    sign in
                </Nav.Link>
            )
        }
    }
    return (
        <Row className="problem-navigation-bar m-0 p-0 align-items-center ">
            <Col>
                <Nav.Link as={Link} to="/" className="">
                    <img className="mr-3 " src="./images/NinjaPrep-Logo.png" alt="logo" width="25" height="25" />
                    <p className="d-inline font-weight-bold text-light">NinjaPrep</p>
                </Nav.Link>
            </Col>

            <Col className="text-center">
                <p className="font-weight-bold text-light">1. Two Sum</p>
            </Col>
            <Col className="d-inline text-right">
                <Nav.Link as={Link} to="/challenges" className="pl-3 d-inline text-light">
                    Problems
                </Nav.Link>
                <Nav.Link as={Link} to="#" className="pl-3 d-inline text-light">
                    <AccessAlarmIcon />
                </Nav.Link>

                {renderLoginLink()}

                <Nav.Link as={Link} to="/premium" className="pl-3 d-inline">
                    <Button className="py-1 px-2 get-premium-btn">Get Premium</Button>
                </Nav.Link>
            </Col>
        </Row>
    )
}

export default CodeEditorNavbar
