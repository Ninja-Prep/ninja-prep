import React, {Component} from 'react';

import TestCaseTabs from 'components/SubmissionContent/TestCaseTabs/TestCaseTabs';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';

const mapStateToProps = (state: RootState) => {
  return {
    testCases: state.problemDetails.details?.testCases || [],
    submissionStatus: state.userSubmission.submissionStatus,
    judgedTestCases: state.userSubmission.output?.judgedTestCases,
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class TestCaseTabsContainer extends Component<Props> {
  render(): JSX.Element {
    return (
      <TestCaseTabs
        testCases={this.props.testCases}
        submissionStatus={this.props.submissionStatus}
        judgedTestCases={this.props.judgedTestCases}
      />
    );
  }
}

export default connector(TestCaseTabsContainer);
