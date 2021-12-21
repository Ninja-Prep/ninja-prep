import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import TestCaseTabs from 'components/ProblemSubmission/Submission/TestCaseTabs/TestCaseTabs';

const mapStateToProps = (state: RootState) => {
  return {
    status: state.userSubmission.submissionStatus,
    testCases: state.problemDetails.details?.testCases || [],
    judgedTestCases: state.userSubmission.output?.judgedTestCases || [],
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class TestCaseTabsContainer extends Component<Props> {
  render(): JSX.Element {
    return <TestCaseTabs judgedTestCases={this.props.judgedTestCases} testCases={this.props.testCases} status={this.props.status} />;
  }
}

export default connector(TestCaseTabsContainer);
