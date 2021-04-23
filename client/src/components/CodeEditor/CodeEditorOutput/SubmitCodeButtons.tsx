import { Button } from 'react-bootstrap'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import { SUBMIT_CODE, SUBMIT_YOUR_CODE } from './TestCaseAreaStringIds'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { handleSubmit } from '../CodeEditorBaseComponent'
import _ from 'lodash'
import { UserSubmissionOutput } from './TestCaseAreaHelper'
import { withRouter } from 'react-router-dom'

interface MatchParams {
    id: string
}

interface SubmitCodeButtonsProps extends RouteComponentProps<MatchParams> {
    codeSnippet: string
    mode: string
    setParentState: (state: any) => void
    userSubmissionOutput: UserSubmissionOutput
}

interface VerdictProps {
    userSubmissionOutput: UserSubmissionOutput
}

function VerdictHeader({ userSubmissionOutput }: VerdictProps) {
    if (!_.isEmpty(userSubmissionOutput)) {
        switch (userSubmissionOutput.verdict) {
            case 'ACCEPTED': {
                return <p className="h3 font-weight-bold d-inline text-success"> ACCEPTED </p>
            }
            case 'Wrong Answer': {
                const countFailed = userSubmissionOutput.judged_test_cases.filter((testCase: any) => {
                    return testCase.status === 'ACCEPTED'
                }).length
                return (
                    <p className="h4 font-weight-bold d-inline text-danger">
                        {countFailed}/{userSubmissionOutput.judged_test_cases.length} Test Cases Passed
                    </p>
                )
            }
            default: {
                return <p className="h4 font-weight-bold d-inline text-danger"> {userSubmissionOutput.verdict} </p>
            }
        }
    }
    return <p className="h5 font-weight-bold d-inline text-dark"> {SUBMIT_YOUR_CODE} </p>
}

function SubmitCodeButtons({ codeSnippet, mode, match, setParentState, userSubmissionOutput }: SubmitCodeButtonsProps) {
    return (
        <div>
            <Row className="px-3 pt-3 pb-2">
                <Col md="auto">
                    <VerdictHeader userSubmissionOutput={userSubmissionOutput} />
                </Col>
                <Col>
                    <div className="float-right">
                        <Button
                            variant="success"
                            type="submit"
                            onClick={(e) => handleSubmit(e, codeSnippet, mode, match.params.id, setParentState)}
                        >
                            <PlayArrowIcon />
                            <b>{SUBMIT_CODE}</b>
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(SubmitCodeButtons)
