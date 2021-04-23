import React, { Component } from 'react'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router'
import SubmitCodeButtons from './SubmitCodeButtons'
import TestCaseTabContent, { StyleTestCaseData } from './TestCaseTabContent'
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
                <UserOutputWrapper userSubmissionOutput={this.state.userSubmissionOutput} {...this.props} />
            </div>
        )
    }
}

function UserOutputWrapper(props) {
    if (props.userSubmissionOutput.verdict == 'Compile Error') {
        return (
            <div className="px-3">
                <StyleTestCaseData header="Raw Output" content={props.userSubmissionOutput.stderr} />
            </div>
        )
    }
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <FadeIn>
                <Row className="h-75">
                    <Col sm={3} className="pr-0">
                        <Nav variant="pills" className="flex-column">
                            <TestCaseTabLabels
                                testCases={props.testCases}
                                maybeUserSubmissionOutput={props.userSubmissionOutput}
                            />
                        </Nav>
                    </Col>
                    <Col sm={9} className="selected-testcase-details">
                        <Tab.Content>
                            <TestCaseTabContent
                                testCases={props.testCases}
                                judgedTestCases={props.userSubmissionOutput.judged_test_cases}
                            />
                        </Tab.Content>
                    </Col>
                </Row>
            </FadeIn>
        </Tab.Container>
    )
}

function StyleTestCaseTabLabel({ index, children }) {
    return (
        <Nav.Link eventKey={index.toString()} className="text-dark text-center">
            {children}
            <b className="px-1">Test Case {index + 1}</b>
        </Nav.Link>
    )
}

function TestCaseTabLabels(props) {
    if (!_.isEmpty(props.maybeUserSubmissionOutput)) {
        return props.maybeUserSubmissionOutput.judged_test_cases.map((testCase, index) => {
            if (testCase.status != 'ACCEPTED') {
                return (
                    <StyleTestCaseTabLabel index={index}>
                        <CloseRoundedIcon style={{ color: 'red' }} />
                    </StyleTestCaseTabLabel>
                )
            }
            return (
                <StyleTestCaseTabLabel index={index}>
                    <CheckRoundedIcon style={{ color: 'green' }} />
                </StyleTestCaseTabLabel>
            )
        })
    }
    return props.testCases.map((testCase, index) => {
        return <StyleTestCaseTabLabel index={index} />
    })
}

export default withRouter(TestCaseArea)
