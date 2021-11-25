import React, {Component} from 'react';

import CodeSubmissionVerdict from 'components/ProblemSubmission/SubmissionContent/SubmissionContentHeader/CodeSubmissionVerdict/CodeSubmissionVerdict';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {VerdictStatus} from 'utils/enums/userSubmission';
import {INTERNAL_ERROR} from 'utils/stringIds.json';
import {JudgedTestCase} from 'utils/types/challenges';

const mapStateToProps = (state: RootState) => {
  return {
    submissionOutput: state.userSubmission.output,
    status: state.userSubmission.submissionStatus,
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class CodeSubmissionVerdictContainer extends Component<Props> {
  get correctRatio(): string {
    const output = this.props.submissionOutput;
    const countFailed =
      output?.judgedTestCases?.filter((testCase: JudgedTestCase) => {
        return testCase.status === VerdictStatus.Accepted;
      }).length || 0;

    const testCaseLength = this.props.submissionOutput?.judgedTestCases?.length || 0;
    return `${countFailed} / ${testCaseLength}`;
  }

  render(): JSX.Element {
    const verdict = this.props.submissionOutput?.verdict || INTERNAL_ERROR;
    const ratio = this.correctRatio;
    return <CodeSubmissionVerdict verdict={verdict} status={this.props.status} correctRatio={ratio} />;
  }
}

export default connector(CodeSubmissionVerdictContainer);
