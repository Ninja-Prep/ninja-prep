import React, { Fragment } from 'react'
import { Nav } from 'react-bootstrap'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import _ from 'lodash'

interface StyleTestCaseTabLabelProps {
    index: number
    children?: React.ReactNode
}

function StyleTestCaseTabLabel({ index, children }: StyleTestCaseTabLabelProps) {
    return (
        <Nav.Link eventKey={index.toString()} className="text-dark text-center">
            {children}
            <b className="px-1">Test Case {index + 1}</b>
        </Nav.Link>
    )
}

type JudgedTestCase = {
    status: string
    stderr: string
    user_stdout: string
    user_output: string
    test_case: string
    expected_output: string
}

export type UserSubmissionOutput = {
    verdict: string
    stderr: string
    judged_test_cases: Array<JudgedTestCase>
}

interface TestCaseTabLabelsProps {
    userSubmissionOutput: UserSubmissionOutput
    testCases: Array<string>
}

export default function TestCaseTabLabels(props: TestCaseTabLabelsProps) {
    if (!_.isEmpty(props.userSubmissionOutput)) {
        const userSubmissionOutput = props.userSubmissionOutput
        return (
            <Fragment>
                {userSubmissionOutput.judged_test_cases.map((testCase, index) => {
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
                })}
            </Fragment>
        )
    }
    return (
        <Fragment>
            {props.testCases.map((testCase, index) => {
                return <StyleTestCaseTabLabel index={index} />
            })}
        </Fragment>
    )
}
