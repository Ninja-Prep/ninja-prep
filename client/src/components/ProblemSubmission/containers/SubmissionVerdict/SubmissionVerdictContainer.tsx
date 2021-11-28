import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {VerdictStatus} from 'utils/enums/userSubmission';
import {INTERNAL_ERROR} from 'utils/stringIds.json';
import {JudgedTestCase} from 'utils/types/challenges';

import SubmissionCodeSubmissionVerdict from '../../Submission/SubmissionVerdict/SubmissionVerdict';

const mapStateToProps = (state: RootState) => {
  return {
    submissionOutput: state.userSubmission.output,
    status: state.userSubmission.submissionStatus,
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class SubmissionVerdictContainer extends Component<Props> {
  get correctRatio(): string {
    const output = this.props.submissionOutput;
    const countFailed =
      output?.judgedTestCases?.filter((testCase: JudgedTestCase) => {
        return testCase.status === VerdictStatus.ACCEPTED;
      }).length || 0;

    const testCaseLength = this.props.submissionOutput?.judgedTestCases?.length || 0;
    return `${countFailed} / ${testCaseLength}`;
  }

  render(): JSX.Element {
    const verdict = this.props.submissionOutput?.verdict || INTERNAL_ERROR;
    const ratio = this.correctRatio;
    return <SubmissionCodeSubmissionVerdict verdict={verdict} status={this.props.status} correctRatio={ratio} />;
  }
}

export default connector(SubmissionVerdictContainer);
