import React, { Component } from 'react'
import { Row, Col, Tab, Nav, Container } from 'react-bootstrap'
import { withRouter } from 'react-router'
import SubmitCodeButtons from './SubmitCodeButtons'
import TestCaseTabContent from './TestCaseTabContent'
import './TestCaseArea.css'
import LoadingCodeSubmission from './LoadingCodeSubmission'

class TestCaseArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPendingSubmission: false
        }
        this.setParentState = this.setParentState.bind(this)
    }

    setParentState(state) {
        this.setState(state)
    }

    render() {
        if (this.state.isPendingSubmission) {
            return <LoadingCodeSubmission />
        }
        return (
            <div className="h-100">
                <SubmitCodeButtons
                    mode={this.props.mode}
                    codeSnippet={this.props.codeSnippet}
                    {...this.props}
                    setParentState={this.setParentState}
                />
                <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <Row className="h-75">
                        <Col sm={3} className="pr-0">
                            <Nav variant="pills" className="flex-column">
                                {this.props.testCases.map((testCase, index) => {
                                    return (
                                        <Nav.Link eventKey={index.toString()} className="text-dark">
                                            <b>Test Case {index + 1}</b>
                                        </Nav.Link>
                                    )
                                })}
                            </Nav>
                        </Col>
                        <Col sm={9} className="selected-testcase-details">
                            <Tab.Content>
                                {this.props.testCases.map((testCase, index) => {
                                    return <TestCaseTabContent testCaseInput={testCase} index={index} />
                                })}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default withRouter(TestCaseArea)
