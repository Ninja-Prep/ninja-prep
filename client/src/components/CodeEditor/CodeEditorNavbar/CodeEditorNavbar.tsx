import './CodeEditorNavbar.css';

import React from 'react';

import {Button, Col, Nav, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {LightNinjaPrepLogo} from 'utils/NinjaPrepLogos';

interface Props {
  title: string;
}

/**
 *
 */
function CodeEditorNavbar(props: Props) {
  // ToDo: Add Signed in/out user logic
  /**
   *
   */
  function LoginLink() {
    return (
      <Nav.Link as={Link} to="/login" className="pl-3 d-inline text-light">
        Sign in
      </Nav.Link>
    );
  }
  return (
    <Row className="problem-navigation-bar m-0 p-0 align-items-center">
      <Col className="">
        <Nav.Link as={Link} to="/" className="d-inline-block">
          <LightNinjaPrepLogo height={25} width={100} />
        </Nav.Link>
      </Col>

      <Col className="text-center">
        <p className="font-weight-bold text-light">{props.title}</p>
      </Col>

      <Col className="d-inline text-right">
        <Nav.Link
          as={Link}
          to="/challenges"
          className="pl-3 d-inline text-light"
        >
          Problems
        </Nav.Link>
        <LoginLink />

        <Nav.Link as={Link} to="/premium" className="pl-3 d-inline">
          <Button className="py-1 px-2 get-premium-btn">Get Premium</Button>
        </Nav.Link>
      </Col>
    </Row>
  );
}

export default CodeEditorNavbar;
