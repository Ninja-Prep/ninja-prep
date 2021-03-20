import React from 'react'
import { Row, Col, Tabs, Tab, Nav } from 'react-bootstrap'

//THIS IS NOT USED IN THE CodeEditorDesktop.jsx FILE!!

function TestCases() {
    return (
        <div>
            <Tabs defaultActiveKey="output" id="uncontrolled-tab-example" className="header-area">
                <Tab eventKey="output" title="Test Case">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Test Case 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Test Case 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Test Case 3</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Test Case 4</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Test Case 4</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p>{this.state.verdict}</p>
                                        <p>Input: {this.state.inputTestCase}</p>
                                        <p>Output: {this.state.userOutput}</p>
                                        <p>Expected Output: {this.state.expectedOutput}</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>{this.state.verdict}</p>
                                        <p>Input: {this.state.inputTestCase}</p>
                                        <p>Output: {this.state.userOutput}</p>
                                        <p>Expected Output: {this.state.expectedOutput}</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>{this.state.verdict}</p>
                                        <p>Input: {this.state.inputTestCase}</p>
                                        <p>Output: {this.state.userOutput}</p>
                                        <p>Expected Output: {this.state.expectedOutput}</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <p>{this.state.verdict}</p>
                                        <p>Input: {this.state.inputTestCase}</p>
                                        <p>Output: {this.state.userOutput}</p>
                                        <p>Expected Output: {this.state.expectedOutput}</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Tab>
                <Tab eventKey="customInput" title="Custom Input">
                    this is where users can customize test case / input
                </Tab>
            </Tabs>
        </div>
    )
}

export default TestCases
export { default as TestCases } from './TestCases'
