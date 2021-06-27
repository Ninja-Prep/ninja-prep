import React from 'react';

import {Status, VerdictStatus} from 'utils/enums/userSubmission';
import {JudgedTestCase} from 'utils/types/challenges';

import {AcceptedIcon, TestCaseTabLabel, WrongAnswerIcon} from './styled';

export interface LabelProps {
  submissionStatus: Status;
  judgedTestCases?: JudgedTestCase[];
  testCases: string[];
}

function TestCaseLabels({
  judgedTestCases,
  submissionStatus,
  testCases,
}: LabelProps): JSX.Element {
  const judgedLabels =
    judgedTestCases &&
    judgedTestCases.map((_, index) => {
      if (_.status === VerdictStatus.ACCEPTED) {
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
    });

  const defaultLabels = testCases.map((_, index) => {
    return (
      <TestCaseTabLabel eventKey={index.toString()}>
        <b>Test Case {index + 1}</b>
      </TestCaseTabLabel>
    );
  });

  return (
    <div>
      {submissionStatus === Status.SUBMITTED ? judgedLabels : defaultLabels}
    </div>
  );
}

export default TestCaseLabels;
