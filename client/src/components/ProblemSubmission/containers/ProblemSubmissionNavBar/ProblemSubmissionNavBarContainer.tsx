import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {isPremiumUser} from 'reducers/auth/reducer';
import ProblemSubmissionNavBar from 'components/ProblemSubmission/ProblemSubmissionNavBar/ProblemSubmissionNavBar';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
    isPremiumUser: isPremiumUser(state),
    problemDetails: state.problemDetails.details,
  };
};

const connector = connect(mapStateToProps);

class ProblemSubmissionNavBarContainer extends Component<ConnectedProps<typeof connector>> {
  render(): JSX.Element {
    return <ProblemSubmissionNavBar authUser={this.props.authUser} isPremiumUser={!!this.props.isPremiumUser} title={this.props.problemDetails.title} />;
  }
}

export default connector(ProblemSubmissionNavBarContainer);
