import React from 'react';

import {SubmissionStatus, VerdictStatus} from 'utils/enums/userSubmission';
import {SUBMIT_YOUR_CODE, TEST_CASES_PASSED} from 'utils/stringIds.json';

import {Accepted, Default, Incorrect} from './styled';

interface Props {
  verdict: string;
  status: SubmissionStatus;
  correctRatio: string;
}

function CodeSubmissionVerdict({
  verdict,
  status,
  correctRatio,
}: Props): JSX.Element {
  if (status === SubmissionStatus.SUBMITTED) {
    switch (verdict) {
      case VerdictStatus.Accepted: {
        return <Accepted>{verdict}</Accepted>;
      }
      case VerdictStatus.WrongAnswer: {
        return (
          <Incorrect>
            {correctRatio} {TEST_CASES_PASSED}
          </Incorrect>
        );
      }
      default: {
        return <Incorrect>{verdict}</Incorrect>;
      }
    }
  }
  return <Default>{SUBMIT_YOUR_CODE}</Default>;
}

export default CodeSubmissionVerdict;
