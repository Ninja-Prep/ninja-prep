import React from 'react';

import LanguageDropdown from 'components/ProblemSubmission/containers/LanguageDropdown/LanguageDropdownContainer';
import {Col, Row} from 'react-bootstrap';

const CodeEditorUserSettings = (): JSX.Element => {
  return (
    <Row className="p-1">
      <Col className="align-self-center">
        <LanguageDropdown />
      </Col>
    </Row>
  );
};

export default CodeEditorUserSettings;
