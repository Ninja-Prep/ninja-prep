import { Button } from 'react-bootstrap'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import { SUBMIT_CODE, SUBMIT_YOUR_CODE } from './TestCaseAreaStringIds'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { handleSubmit } from '../CodeEditorBaseComponent'

interface MatchParams {
    id: string
}

interface Props extends RouteComponentProps<MatchParams> {
    codeSnippet: string
    mode: string
    setParentState: () => void
}

function SubmitCodeButtons({ codeSnippet, mode, match, setParentState }: Props) {
    return (
        <div>
            <Row className="px-3 pt-3 pb-2">
                <Col md="auto">
                    <p className="h5 font-weight-bold d-inline text-dark"> {SUBMIT_YOUR_CODE}</p>
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

export default SubmitCodeButtons
