import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from 'reducers/rootReducer';

import Submissions from '../Submissions/Submissions';

const mapStateToProps = (state: RootState) => {
  return {
    submissionRecords: state.problemDetails.submissionRecords,
  };
};

const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

class SubmissionsContainer extends Component<Props> {
  render(): JSX.Element {
    return <Submissions submissionRecords={this.props.submissionRecords || []} />;
  }
}

export default React.memo(connector(SubmissionsContainer));
