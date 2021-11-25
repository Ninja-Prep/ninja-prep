import DefaultTestCaseLabels from 'components/ProblemSubmission/SubmissionContent/SubmissionContentTestCases/TestCaseLabels/lists/DefaultTestCaseLabels';
import JudgedTestCaseLabels from 'components/ProblemSubmission/SubmissionContent/SubmissionContentTestCases/TestCaseLabels/lists/JudgedTestCaseLabels';
import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {SubmissionStatus} from 'utils/enums/userSubmission';

const mapStateToProps = (state: RootState) => {
  return {
    status: state.userSubmission.submissionStatus,
    testCases: state.problemDetails.details?.testCases || [],
    judgedTestCases: state.userSubmission.output?.judgedTestCases || [],
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class TestCaseLabelsContainer extends Component<Props> {
  render(): JSX.Element {
    if (this.props.status === SubmissionStatus.SUBMITTED) {
      return <JudgedTestCaseLabels judgedTestCases={this.props.judgedTestCases} />;
    } else {
      return <DefaultTestCaseLabels testCases={this.props.testCases} />;
    }
  }
}

export default connector(TestCaseLabelsContainer);
