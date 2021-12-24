import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import SubmissionContent from 'components/ProblemSubmission/Submission/SubmissionContent/SubmissionContent';

const mapStateToProps = (state: RootState) => {
  return {
    status: state.userSubmission.submissionStatus,
    verdict: state.userSubmission.output?.verdict,
    stderr: state.userSubmission.output?.stderr || '',
    throttleError: state.userSubmission.throttleError,
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class SubmisssionContentContainer extends Component<Props> {
  render(): JSX.Element {
    return <SubmissionContent stderr={this.props.stderr} status={this.props.status} verdict={this.props.verdict} throttleError={this.props.throttleError} />;
  }
}

export default connector(SubmisssionContentContainer);
