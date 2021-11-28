import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {SubmissionStatus} from 'utils/enums/userSubmission';

import DefaultTestCaseLabels from '../../Submission/SubmissionTestCaseLabels/DefaultTestCaseLabels';
import JudgedSubmissionTestCaseLabels from '../../Submission/SubmissionTestCaseLabels/JudgedSubmissionTestCaseLabels';

const mapStateToProps = (state: RootState) => {
  return {
    status: state.userSubmission.submissionStatus,
    testCases: state.problemDetails.details?.testCases || [],
    judgedTestCases: state.userSubmission.output?.judgedTestCases || [],
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class SubmissionTestCaseLabelsContainer extends Component<Props> {
  render(): JSX.Element {
    if (this.props.status === SubmissionStatus.SUBMITTED) {
      return <JudgedSubmissionTestCaseLabels judgedTestCases={this.props.judgedTestCases} />;
    } else {
      return <DefaultTestCaseLabels testCases={this.props.testCases} />;
    }
  }
}

export default connector(SubmissionTestCaseLabelsContainer);
