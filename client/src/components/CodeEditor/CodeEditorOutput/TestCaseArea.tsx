import React, { Component } from 'react'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import SubmitCodeButtons from './SubmitCodeButtons'
import TestCaseTabContent, { StyleTestCaseData } from './TestCaseTabContent'
import './TestCaseArea.css'

import CodeSubmissionLoadBar from './CodeSubmissionLoadBar'
import TestCaseTabLabels, { UserSubmissionOutput } from './TestCaseAreaHelper'
import FadeIn from 'react-fade-in'
import _ from 'lodash'

interface State {
    isPendingSubmission?: boolean
    userSubmissionOutput: UserSubmissionOutput
}

interface Props {
    mode: string
    testCases: Array<string>
    codeSnippet: string
}

class TestCaseArea extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isPendingSubmission: false,
            userSubmissionOutput: {} as UserSubmissionOutput
        }
        this.setParentState = this.setParentState.bind(this)
    }

    setParentState(state: State) {
        this.setState(state)
    }

    render() {
        if (this.state.isPendingSubmission) {
            return <CodeSubmissionLoadBar />
        }
        return (
            <div>
                <SubmitCodeButtons
                    mode={this.props.mode}
                    codeSnippet={this.props.codeSnippet}
                    userSubmissionOutput={this.state.userSubmissionOutput}
                    setParentState={this.setParentState}
                />
                <UserOutputWrapper userSubmissionOutput={this.state.userSubmissionOutput} {...this.props} />
            </div>
        )
    }
}

interface UserOutputWrapperProps {
    userSubmissionOutput: UserSubmissionOutput
    testCases: Array<string>
}

function UserOutputWrapper(props: UserOutputWrapperProps) {
    if (!_.isEmpty(props.userSubmissionOutput)) {
        const userSubmissionOutput = props.userSubmissionOutput
        if (userSubmissionOutput.verdict == 'Compile Error') {
            return (
                <div className="px-3">
                    <StyleTestCaseData header="Raw Output" content={userSubmissionOutput.stderr} />
                </div>
            )
        }
    }

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <FadeIn>
                <Row className="h-75">
                    <Col sm={3} className="pr-0">
                        <Nav variant="pills" className="flex-column">
                            <TestCaseTabLabels testCases={props.testCases} userSubmissionOutput={props.userSubmissionOutput} />
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

export default TestCaseArea
