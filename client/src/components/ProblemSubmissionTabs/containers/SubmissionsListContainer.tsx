import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from 'reducers/rootReducer';

import SubmissionsList from '../SubmissionsList/SubmissionsList';

const mapStateToProps = (state: RootState) => {
  return {
    submissionRecords: state.problemDetails.submissionRecords,
    authUser: state.authReducer.authUser,
  };
};

const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

class SubmissionsListContainer extends Component<Props> {
  render(): JSX.Element {
    return <SubmissionsList submissionRecords={this.props.submissionRecords || []} authUser={this.props.authUser} />;
  }
}

export default React.memo(connector(SubmissionsListContainer));
