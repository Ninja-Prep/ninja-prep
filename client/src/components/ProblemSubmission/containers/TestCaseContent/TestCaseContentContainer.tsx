import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {SubmissionStatus} from 'utils/enums/userSubmission';
import JudgedTestCaseContent from 'components/ProblemSubmission/SubmissionContent/SubmissionContentTestCases/JudgedTestCaseContent/JudgedTestCaseContent';
import TestCaseContent from 'components/ProblemSubmission/SubmissionContent/SubmissionContentTestCases/TestCaseContent/TestCaseContent';

const mapStateToProps = (state: RootState) => {
  return {
    status: state.userSubmission.submissionStatus,
    testCases: state.problemDetails.details?.testCases || [],
    judgedTestCases: state.userSubmission.output?.judgedTestCases || [],
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class TestCaseContentContainer extends Component<Props> {
  render(): JSX.Element {
    if (!!this.props.judgedTestCases.length && this.props.status === SubmissionStatus.SUBMITTED) {
      return <JudgedTestCaseContent judgedTestCases={this.props.judgedTestCases} testCases={this.props.testCases} />;
    }

    return <TestCaseContent testCases={this.props.testCases} />;
  }
}

export default connector(TestCaseContentContainer);
