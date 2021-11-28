import CodeSubmissionLoadBar from 'components/ProblemSubmission/CodeSubmissionLoadBar/CodeSubmissionLoadBar';
import * as React from 'react';

import {SubmissionStatus, VerdictStatus} from 'utils/enums/userSubmission';
import SubmissionHeader from '../SubmissionHeader/SubmissionHeader';
import SubmissionTestCaseErrorOutput from '../SubmissionTestCaseErrorOutput/SubmissionTestCaseErrorOutput';
import SubmissionTestCases from '../SubmissionTestCases/SubmissionTestCases';

interface Props {
  status: SubmissionStatus;
  verdict: VerdictStatus;
  stderr: string;
}

function SubmissionContent(props: Props): JSX.Element {
  switch (props.status) {
    case SubmissionStatus.LOADING:
      return <CodeSubmissionLoadBar />;
    case SubmissionStatus.SUBMITTED:
      if (props.verdict !== VerdictStatus.ACCEPTED && props.verdict !== VerdictStatus.WRONG_ANSWER)
        return (
          <div>
            <SubmissionHeader />
            <SubmissionTestCaseErrorOutput content={props.stderr} />
          </div>
        );
  }
  return (
    <div>
      <SubmissionHeader />
      <SubmissionTestCases />
    </div>
  );
}

export default SubmissionContent;
