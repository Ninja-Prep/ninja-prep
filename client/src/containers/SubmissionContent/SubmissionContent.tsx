import React, {Component} from 'react';

import CodeSubmissionLoadBar from 'components/ProblemSubmission/CodeSubmissionLoadBar/CodeSubmissionLoadBar';
import TestCaseOutput from 'components/ProblemSubmission/TestCaseOutput/TestCaseOutput';
import {connect, ConnectedProps} from 'react-redux';
import {getLanguage} from 'redux/editorSettings/reducer';
import {RootState} from 'redux/rootReducer';
import {Status} from 'utils/enums/userSubmission';

const mapStateToProps = (state: RootState) => {
  return {
    status: state.userSubmission.status,
    textValue: state.textEditor.value,
    language: getLanguage(state),
    problemDetails: state.problemDetails.details,
    userSubmission: state.userSubmission.output,
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class SubmisssionContentContainer extends Component<Props> {
  render(): JSX.Element {
    switch (this.props.status) {
      case Status.LOADING:
        return <CodeSubmissionLoadBar />;
      case Status.NONE:
        return (
          <TestCaseOutput
            testCases={this.props.problemDetails?.testCases || []}
            submissionStatus={this.props.status}
          />
        );
      case Status.SUBMITTED:
        return (
          <TestCaseOutput
            testCases={this.props.problemDetails?.testCases || []}
            submissionStatus={this.props.status}
            userSubmission={this.props.userSubmission}
          />
        );
    }
    return <CodeSubmissionLoadBar />;
  }
}

export default connector(SubmisssionContentContainer);
