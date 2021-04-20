import { Button } from 'react-bootstrap'
import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { handleSubmit } from '../CodeEditorBaseComponent'

const SubmitCodeButtons = (codeSnippet: string, mode: string, paramsId: string) => {
    return (
        <div>
            <Button
                variant="outline-secondary"
                type="submit"
                onClick={(e) => handleSubmit(e, codeSnippet, mode, paramsId)}
                className="position-absolute run-code-btn"
                style={{ bottom: 0, right: 80 }}
            >
                <PlayArrowIcon className="mr-2" />
                Run Code
            </Button>
            <Button
                variant="success"
                type="submit"
                onClick={(e) => handleSubmit(e, codeSnippet, mode, paramsId)}
                className="position-absolute"
                style={{ bottom: 0, right: 0 }}
            >
                Submit
            </Button>
        </div>
    )
}

export default SubmitCodeButtons
