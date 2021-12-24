import * as React from 'react';
import CodeSubmissionLoadBar from 'components/ProblemSubmission/CodeSubmissionLoadBar/CodeSubmissionLoadBar';
import TestCaseTabsContainer from 'components/ProblemSubmission/containers/TestCaseTabs/TestCaseTabsContainer';

import {SubmissionStatus, VerdictStatus} from 'utils/enums/userSubmission';
import SubmissionHeader from '../SubmissionHeader/SubmissionHeader';
import SubmissionTestCaseErrorOutput from '../SubmissionTestCaseErrorOutput/SubmissionTestCaseErrorOutput';
import {SubmissionThrottleMessage} from '../SubmissionThrottleMessage/SubmissionThrottleMessage';

interface Props {
  status: SubmissionStatus;
  verdict: VerdictStatus;
  stderr: string;
  throttleError: boolean;
}

function SubmissionContent(props: Props): JSX.Element {
  switch (props.status) {
    case SubmissionStatus.LOADING:
      return <CodeSubmissionLoadBar />;
    case SubmissionStatus.SUBMITTED:
      if (props.verdict !== VerdictStatus.ACCEPTED && props.verdict !== VerdictStatus.WRONG_ANSWER)
        return (
          <React.Fragment>
            <SubmissionHeader />
            <SubmissionTestCaseErrorOutput content={props.stderr} />
          </React.Fragment>
        );
  }
  return (
    <React.Fragment>
      {props.throttleError && <SubmissionThrottleMessage />}
      <SubmissionHeader />
      <TestCaseTabsContainer />
    </React.Fragment>
  );
}

export default SubmissionContent;
