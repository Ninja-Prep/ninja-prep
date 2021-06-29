import React, {Fragment} from 'react';

import {Tab} from 'react-bootstrap';
import {INPUT_TEXT} from 'utils/stringIds.json';
import {UserSubmissionOutput} from 'utils/types/challenges';

import ContentDetailBlock from './ContentDetailBlock/ContentDetailBlock';
import FormatHeader from './FormatHeader';
import JudgedContentDetails from './JudgedContentDetails/JudgedContentDetails';

export interface ContentProps {
  userSubmission?: UserSubmissionOutput;
  testCases: string[];
}

function TestCaseContent({
  userSubmission,
  testCases,
}: ContentProps): JSX.Element {
  const judgedTestCases = userSubmission?.judgedTestCases;
  return (
    <Fragment>
      {testCases.map((testCase, index) => {
        return (
          <Tab.Pane eventKey={index.toString()} key={testCase}>
            {judgedTestCases && (
              <FormatHeader verdictStatus={judgedTestCases[index].status} />
            )}
            <ContentDetailBlock
              blockHeader={INPUT_TEXT}
              blockContent={testCase}
            />
            {userSubmission?.judgedTestCases && (
              <JudgedContentDetails
                judgedTestCases={userSubmission?.judgedTestCases}
              />
            )}
          </Tab.Pane>
        );
      })}
    </Fragment>
  );
}

export default TestCaseContent;
