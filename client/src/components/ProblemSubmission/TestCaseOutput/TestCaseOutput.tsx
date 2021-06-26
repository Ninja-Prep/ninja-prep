import React from 'react';

import {Row, Col, Tab, Nav} from 'react-bootstrap';
import './TestCaseArea.css';
import FadeIn from 'react-fade-in';

import TestCaseContent from '../TestCaseContent/TestCaseContent';
import {ContentProps} from '../TestCaseContent/TestCaseContent';
import TestCaseLabels, {LabelProps} from '../TestCaseLabels/TestCaseLabels';

type OutputProps = LabelProps & ContentProps;

function TestCaseOutput(props: OutputProps): JSX.Element {
  return (
    <Tab.Container defaultActiveKey="0">
      <FadeIn>
        <Row>
          <Col sm={3} className="pr-0">
            <Nav variant="pills" className="flex-column">
              <TestCaseLabels {...props} />
            </Nav>
          </Col>
          <Col sm={9} className="selected-testcase-details">
            <Tab.Content>
              <TestCaseContent {...props} />
            </Tab.Content>
          </Col>
        </Row>
      </FadeIn>
    </Tab.Container>
  );
}

export default TestCaseOutput;
