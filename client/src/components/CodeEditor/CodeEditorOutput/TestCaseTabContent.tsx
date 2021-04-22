import React from 'react'
import { Tab, Container } from 'react-bootstrap'
import { INPUT_TEXT } from './TestCaseAreaStringIds'
import './TestCaseArea.css'

interface Props {
    index: number
    testCaseInput: string
    expectedOutput?: string
    userOutput?: string
}
const TestCaseTabContent = (props: Props) => {
    return (
        <Tab.Pane className="pr-3 py-3 test-case-tab-content" eventKey={props.index.toString()}>
            <p className="text-dark">{INPUT_TEXT}</p>
            <p style={{ whiteSpace: 'pre-wrap', fontFamily: 'Fira Code' }} className="p-3 bg-dark">
                {props.testCaseInput}
            </p>
        </Tab.Pane>
    )
}

export default TestCaseTabContent
