import React, {Component} from 'react';

import CodeSubmissionLoadBar from 'components/ProblemSubmission/CodeSubmissionLoadBar/CodeSubmissionLoadBar';
import TestCaseOutput from 'components/SubmissionContent/TestCaseOutput/TestCaseOutput';
import TestCaseTabs from 'containers/TestCaseTabs/TestCaseTabs';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {SubmissionStatus} from 'utils/enums/userSubmission';

import TestCaseErrorOutput from '../../components/SubmissionContent/TestCaseErrorOutput/TestCaseErrorOutput';
import {VerdictStatus} from '../../utils/enums/userSubmission';

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
        const ACCEPTED = VerdictStatus.ACCEPTED;
        const WrongAnswer = VerdictStatus.Wrong_Answer;
        if (verdict !== ACCEPTED && verdict !== WrongAnswer)
          return (
            <TestCaseOutput>
              <TestCaseErrorOutput content={this.props.stderr} />
            </TestCaseOutput>
          );
    }
    return (
      <TestCaseOutput>
        <TestCaseTabs />
      </TestCaseOutput>
    );
  }
}

export default connector(SubmisssionContentContainer);
