import React from 'react'
import LanguageDropdown from './LanguageDropdown'
import { Col, Row } from 'react-bootstrap'

const CodeEditorUserSettings = () => {
    return (
        <Row className="p-1 code-editor-settings-area">
            <Col className="align-self-center">
                <LanguageDropdown />
            </Col>
        </Row>
    )
}

export default CodeEditorUserSettings
