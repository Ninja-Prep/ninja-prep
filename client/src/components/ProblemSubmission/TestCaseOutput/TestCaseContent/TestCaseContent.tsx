import React, {Fragment} from 'react';

import {Tab} from 'react-bootstrap';
import {VerdictStatus} from 'utils/enums/userSubmission';
import {INPUT_TEXT} from 'utils/stringIds.json';
import {UserSubmissionOutput} from 'utils/types/challenges';

import ContentDetailBlock from './ContentDetailBlock/ContentDetailBlock';
import {AcceptedStatus, ErrorStatus} from './styled';

export interface ContentProps {
  userSubmission?: UserSubmissionOutput;
  testCases: string[];
}

function TestCaseContent({
  userSubmission,
  testCases,
}: ContentProps): JSX.Element {
  let HeaderStatus = <Fragment />;
  if (userSubmission?.verdict === VerdictStatus.ACCEPTED) {
    HeaderStatus = <AcceptedStatus>{userSubmission.verdict}</AcceptedStatus>;
  } else if (userSubmission?.verdict) {
    HeaderStatus = <ErrorStatus>{userSubmission.verdict}</ErrorStatus>;
  }

  const judgedContentDetails =
    userSubmission?.verdict &&
    userSubmission.judgedTestCases.map((testCase, index) => {
      return (
        <div>
          <ContentDetailBlock
            blockHeader="Your Output"
            blockContent={testCase.userOutput}
          />
          <ContentDetailBlock
            blockHeader="Expected Output"
            blockContent={testCase.expectedOutput}
          />
        </div>
      );
    });

  return (
    <Fragment>
      {testCases.map((testCase, index) => {
        return (
          <Tab.Pane eventKey={index.toString()}>
            {HeaderStatus}
            <ContentDetailBlock
              blockHeader={INPUT_TEXT}
              blockContent={testCase}
            />
            {judgedContentDetails}
          </Tab.Pane>
        );
      })}
    </Fragment>
  );
}

export default TestCaseContent;
