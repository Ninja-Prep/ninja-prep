import React from 'react';

import {Tab} from 'react-bootstrap';

import SubmissionTestCaseContentContainer from '../../containers/SubmissionTestCaseContent/SubmissionTestCaseContentContainer';
import SubmissionTestCaseLabelsContainer from '../../containers/SubmissionTestCaseLabels/SubmissionTestCaseLabelsContainer';
import {SubmissionTestCaseRow, SubmissionTestCaseColumn, NavPills, SubmissionTestCaseTabContent} from './styled';

function SubmissionTestCases(): JSX.Element {
  return (
    <Tab.Container defaultActiveKey="0">
      <SubmissionTestCaseRow>
        <SubmissionTestCaseColumn sm={3}>
          <NavPills variant="pills">
            <SubmissionTestCaseLabelsContainer />
          </NavPills>
        </SubmissionTestCaseColumn>
        <SubmissionTestCaseColumn sm={9}>
          <SubmissionTestCaseTabContent>
            <SubmissionTestCaseContentContainer />
          </SubmissionTestCaseTabContent>
        </SubmissionTestCaseColumn>
      </SubmissionTestCaseRow>
    </Tab.Container>
  );
}

export default SubmissionTestCases;
