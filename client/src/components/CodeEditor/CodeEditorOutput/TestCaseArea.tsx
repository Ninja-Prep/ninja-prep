import React, { Component } from 'react'
import './TestCaseArea.css'
import CodeSubmissionLoadBar from './CodeSubmissionLoadBar'
import { UserSubmissionOutput, SubmissionStatus } from './TestCaseAreaHelper'
import TestCaseOutputWrapper from './TestCaseOutputWrapper'
import { CompletedTestCaseTabLabels, DefaultTestCaseTabLabels } from './TestCaseTabLabels'
import { CompletedTabContent, DefaultTabContent } from './TestCaseTabContent'
import SubmitCodeButtons from './SubmitCodeButtons'

interface State {
    testCases: Array<string>
    submissionOutput?: UserSubmissionOutput
    submissionStatus: SubmissionStatus
    setUserSubmission: (submission: UserSubmissionOutput) => void
    setSubmissionStatus: (status: SubmissionStatus) => void
}

export const UserSubmissionContext = React.createContext<State>({} as State)

interface Props {
    mode: string
    testCases: Array<string>
    codeSnippet: string
}

class TestCaseArea extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            testCases: this.props.testCases,
            submissionOutput: undefined,
            submissionStatus: SubmissionStatus.None,
            setUserSubmission: (userSubmission) => {
                this.setState({ submissionOutput: userSubmission })
            },
            setSubmissionStatus: (status) => {
                this.setState({ submissionStatus: status })
            }
        }
    }
    render() {
        return (
            <UserSubmissionContext.Provider value={this.state}>
                <SubmissionStatusHandler submissionStatus={this.state.submissionStatus} {...this.props} />
            </UserSubmissionContext.Provider>
        )
    }
}

function SubmissionStatusHandler({
    submissionStatus,
    mode,
    codeSnippet
}: {
    submissionStatus: SubmissionStatus
    mode: string
    codeSnippet: string
}) {
    switch (submissionStatus) {
        case SubmissionStatus.Pending:
            return <CodeSubmissionLoadBar />
        case SubmissionStatus.None:
            return (
                <div className="h-100">
                    <SubmitCodeButtons mode={mode} codeSnippet={codeSnippet} />
                    <TestCaseOutputWrapper TabLabels={<DefaultTestCaseTabLabels />} TabContent={<DefaultTabContent />} />
                </div>
            )
        case SubmissionStatus.Completed:
            return (
                <div className="h-100">
                    <SubmitCodeButtons mode={mode} codeSnippet={codeSnippet} />
                    <TestCaseOutputWrapper TabLabels={<CompletedTestCaseTabLabels />} TabContent={<CompletedTabContent />} />
                </div>
            )
        default:
            return (
                <div className="h-100">
                    <SubmitCodeButtons mode={mode} codeSnippet={codeSnippet} />
                    <TestCaseOutputWrapper TabLabels={<DefaultTestCaseTabLabels />} TabContent={<DefaultTabContent />} />
                </div>
            )
    }
}

export default TestCaseArea
