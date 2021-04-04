import React from 'react'
import { Row, Col, Tabs, Tab, Nav } from 'react-bootstrap'
import './test-case-output.css'

function TestCase(props) {
    return (
        <Tabs defaultActiveKey="output" id="uncontrolled-tab-example" className="">
            <Tab eventKey="output" title="Test Case">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="text-light">
                                        Test Case 1
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="text-light">
                                        Test Case 2
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <p>{props.verdict}</p>
                                    <p>Input: {props.inputTestCase}</p>
                                    <p>Output: {props.userOutput}</p>
                                    <p>Expected Output: {props.expectedOutput}</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>{props.verdict}</p>
                                    <p>Input: {props.inputTestCase}</p>
                                    <p>Output: {props.userOutput}</p>
                                    <p>Expected Output: {props.expectedOutput}</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Tab>
            <Tab eventKey="customInput" title="Custom Input" className="test-case-tabs">
                this is where users can customize test case / input
            </Tab>
        </Tabs>
    )
}

export default TestCase
export { default as TestCase } from './TestCase'
