import React, { Component } from 'react'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router'
import SubmitCodeButtons from './SubmitCodeButtons'
import TestCaseTabContent from './TestCaseTabContent'
import './TestCaseArea.css'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import LoadingCodeSubmission from './LoadingCodeSubmission'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import FadeIn from 'react-fade-in'
import _ from 'lodash'

class TestCaseArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPendingSubmission: false,
            userSubmissionOutput: []
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
            <div>
                <SubmitCodeButtons
                    mode={this.props.mode}
                    codeSnippet={this.props.codeSnippet}
                    {...this.props}
                    userSubmissionOutput={this.state.userSubmissionOutput}
                    setParentState={this.setParentState}
                />
                <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <FadeIn>
                        <Row className="h-75">
                            <Col sm={3} className="pr-0">
                                <Nav variant="pills" className="flex-column">
                                    <TestCaseTabLabels
                                        testCases={this.props.testCases}
                                        judgedTestCases={this.state.userSubmissionOutput.judged_test_cases}
                                    />
                                </Nav>
                            </Col>
                            <Col sm={9} className="selected-testcase-details">
                                <Tab.Content>
                                    <TestCaseTabContent
                                        testCases={this.props.testCases}
                                        judgedTestCases={this.state.userSubmissionOutput.judged_test_cases}
                                    />
                                </Tab.Content>
                            </Col>
                        </Row>
                    </FadeIn>
                </Tab.Container>
            </div>
        )
    }
}

function TestCaseTabLabels(props) {
    if (!_.isEmpty(props.judgedTestCases)) {
        return props.judgedTestCases.map((testCase, index) => {
            if (testCase.status != 'ACCEPTED') {
                return (
                    <Nav.Link eventKey={index.toString()} className="text-dark text-center">
                        <CloseRoundedIcon style={{ color: 'red' }} />
                        <b className="px-1">Test Case {index + 1}</b>
                    </Nav.Link>
                )
            }
            return (
                <Nav.Link eventKey={index.toString()} className="text-dark text-center">
                    <CheckRoundedIcon style={{ color: 'green' }} />
                    <b className="px-1">Test Case {index + 1}</b>
                </Nav.Link>
            )
        })
    }
    return props.testCases.map((testCase, index) => {
        return (
            <Nav.Link eventKey={index.toString()} className="text-dark text-center">
                <b>Test Case {index + 1}</b>
            </Nav.Link>
        )
    })
}

export default withRouter(TestCaseArea)
