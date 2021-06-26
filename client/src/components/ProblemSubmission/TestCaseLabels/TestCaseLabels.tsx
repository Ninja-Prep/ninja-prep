import React from 'react';

import {Status, VerdictStatus} from 'utils/enums/userSubmission';
import {JudgedTestCase} from 'utils/types/challenges';

import {AcceptedIcon, TestCaseTabLabel, WrongAnswerIcon} from './styled';

export interface LabelProps {
  submissionStatus: Status;
  judgedTestCases: JudgedTestCase[];
}

function TestCaseLabels({
  judgedTestCases,
  submissionStatus,
}: LabelProps): JSX.Element {
  return (
    <div>
      {judgedTestCases.map((_, index) => {
        if (submissionStatus === Status.None)
          return (
            <TestCaseTabLabel eventKey={index.toString()}>
              <b>Test Case {index + 1}</b>
            </TestCaseTabLabel>
          );
        else if (_.status === VerdictStatus.ACCEPTED) {
          return (
            <TestCaseTabLabel eventKey={index.toString()}>
              <AcceptedIcon />
              <b>Test Case {index + 1}</b>
            </TestCaseTabLabel>
          );
        }
        return (
          <TestCaseTabLabel eventKey={index.toString()}>
            <WrongAnswerIcon />
            <b>Test Case {index + 1}</b>
          </TestCaseTabLabel>
        );
      })}
    </div>
  );
}

export default TestCaseLabels;
