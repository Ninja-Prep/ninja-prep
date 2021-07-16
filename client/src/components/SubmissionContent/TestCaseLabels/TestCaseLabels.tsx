import React from 'react';

import {SubmissionStatus} from 'utils/enums/userSubmission';
import {JudgedTestCase} from 'utils/types/challenges';

import DefaultTestCaseLabels from './lists/DefaultTestCaseLabels';
import JudgedTestCaseLabels from './lists/JudgedTestCaseLabels';

export interface LabelProps {
  submissionStatus: SubmissionStatus;
  judgedTestCases?: JudgedTestCase[];
  testCases: string[];
}

function TestCaseLabels({
  judgedTestCases,
  submissionStatus,
  testCases,
}: LabelProps): JSX.Element {
  const judgedLabels = (judgedTestCases && (
    <JudgedTestCaseLabels judgedTestCases={judgedTestCases} />
  )) || <DefaultTestCaseLabels testCases={testCases} />;

  return (
    <div>
      {submissionStatus === SubmissionStatus.SUBMITTED ? (
        judgedLabels
      ) : (
        <DefaultTestCaseLabels testCases={testCases} />
      )}
    </div>
  );
}

export default TestCaseLabels;
