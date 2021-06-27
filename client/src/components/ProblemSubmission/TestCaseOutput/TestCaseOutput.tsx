import React from 'react';

import CodeSubmissionButtons from 'containers/CodeSubmissionButtons/CodeSubmissionButtons';
import CodeSubmissionVerdictContainer from 'containers/CodeSubmissionVerdict/CodeSubmissionVerdict';
import {Row, Col, Tab, Nav} from 'react-bootstrap';
import FadeIn from 'react-fade-in';

import TestCaseContent from './TestCaseContent/TestCaseContent';
import {ContentProps} from './TestCaseContent/TestCaseContent';
import TestCaseLabels, {LabelProps} from './TestCaseLabels/TestCaseLabels';

type OutputProps = LabelProps & ContentProps;

function TestCaseOutput(props: OutputProps): JSX.Element {
  return (
    <div>
      <div>
        <CodeSubmissionVerdictContainer />
        <CodeSubmissionButtons />
      </div>
      <Tab.Container defaultActiveKey="0">
        <FadeIn>
          <Row>
            <Col sm={3} className="pr-0">
              <Nav variant="pills" className="flex-column">
                <TestCaseLabels {...props} />
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <TestCaseContent {...props} />
              </Tab.Content>
            </Col>
          </Row>
        </FadeIn>
      </Tab.Container>
    </div>
  );
}

export default TestCaseOutput;
