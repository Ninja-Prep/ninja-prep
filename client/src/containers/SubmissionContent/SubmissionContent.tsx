import React, {Component} from 'react';

import CodeSubmissionLoadBar from 'components/ProblemSubmission/CodeSubmissionLoadBar/CodeSubmissionLoadBar';
import SubmissionContent from 'components/SubmissionContent/SubmissionContent';
import TestCaseTabs from 'components/SubmissionContent/SubmissionContentTestCases/SubmissionContentTestCases';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {SubmissionStatus} from 'utils/enums/userSubmission';

import TestCaseErrorOutput from 'components/SubmissionContent/SubmissionContentTestCases/TestCaseErrorOutput/TestCaseErrorOutput';
import {VerdictStatus} from 'utils/enums/userSubmission';

const mapStateToProps = (state: RootState) => {
  return {
    status: state.userSubmission.submissionStatus,
    verdict: state.userSubmission.output?.verdict,
    stderr: state.userSubmission.output?.stderr || '',
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class SubmisssionContentContainer extends Component<Props> {
  render(): JSX.Element {
    switch (this.props.status) {
      case SubmissionStatus.LOADING:
        return <CodeSubmissionLoadBar />;
      case SubmissionStatus.SUBMITTED:
        const verdict = this.props.verdict;
        const Accepted = VerdictStatus.Accepted;
        const WrongAnswer = VerdictStatus.WrongAnswer;
        if (verdict !== Accepted && verdict !== WrongAnswer)
          return (
            <SubmissionContent>
              <TestCaseErrorOutput content={this.props.stderr} />
            </SubmissionContent>
          );
    }
    return (
      <SubmissionContent>
        <TestCaseTabs />
      </SubmissionContent>
    );
  }
}

export default connector(SubmisssionContentContainer);
