import React from 'react'
import { Tab, Container } from 'react-bootstrap'
import { INPUT_TEXT } from './TestCaseAreaStringIds'
import _ from 'lodash'
import './TestCaseArea.css'

interface Props {
    testCases: Array<string>
    judgedTestCases: Array<any>
}

interface StyleProps {
    header: string
    content?: string
}

const StyleTestCaseData = ({ header, content }: StyleProps) => {
    return (
        <div className="pt-3">
            <p className="text-dark font-weight-bold">{header}</p>
            <p style={{ whiteSpace: 'pre-wrap', fontFamily: 'Fira Code' }} className="p-3 bg-dark">
                {content}
            </p>
        </div>
    )
}

const StyleStatus = ({ status }: { status: string }) => {
    switch (status) {
        case 'ACCEPTED': {
            return <p className="text-success font-weight-bold h5">{status}</p>
        }
        default: {
            return <p className="text-danger font-weight-bold h5">{status}</p>
        }
    }
}

const TestCaseTabContent = ({ testCases, judgedTestCases }: Props) => {
    if (_.some(judgedTestCases)) {
        return judgedTestCases.map((testCase, index) => {
            return (
                <Tab.Pane className="pr-3 py-3 test-case-tab-content" eventKey={index.toString()}>
                    <StyleStatus status={testCase.status as string} />
                    <StyleTestCaseData header={INPUT_TEXT} content={testCase.test_case} />
                    <StyleTestCaseData header="Your Output" content={testCase.user_output} />
                    <StyleTestCaseData header="Expected Output" content={testCase.expected_output} />
                </Tab.Pane>
            )
        })
    }
    return testCases.map((testCase, index) => {
        return (
            <Tab.Pane className="pr-3 py-3 test-case-tab-content" eventKey={index.toString()}>
                <StyleTestCaseData header={INPUT_TEXT} content={testCase} />
            </Tab.Pane>
        )
    })
}

export default TestCaseTabContent
