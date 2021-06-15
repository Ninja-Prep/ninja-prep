import React from 'react';

import {Col, Row} from 'react-bootstrap';

import LanguageDropdown from './LanguageDropdown';

const CodeEditorUserSettings = () => {
  return (
    <Row className="p-1 code-editor-settings-area">
      <Col className="align-self-center">
        <LanguageDropdown />
      </Col>
    </Row>
  );
};

export default CodeEditorUserSettings;
