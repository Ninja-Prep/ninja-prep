import React from 'react';

import {Status, VerdictStatus} from 'utils/enums/userSubmission';
import {SUBMIT_YOUR_CODE, TEST_CASES_PASSED} from 'utils/stringIds.json';

import {Accepted, Default, Incorrect} from './styled';

interface Props {
  verdict: string;
  status: Status;
  correctRatio: string;
}

function CodeSubmissionVerdict({
  verdict,
  status,
  correctRatio,
}: Props): JSX.Element {
  if (status === Status.SUBMITTED) {
    switch (verdict) {
      case VerdictStatus.ACCEPTED: {
        return <Accepted>{verdict}</Accepted>;
      }
      case VerdictStatus.Wrong_Answer: {
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
  } else {
    return <Default>{SUBMIT_YOUR_CODE}</Default>;
  }
}

export default CodeSubmissionVerdict;
