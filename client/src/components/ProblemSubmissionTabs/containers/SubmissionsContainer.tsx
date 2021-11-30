import React, {Component} from 'react';

import {RouteComponentProps, withRouter} from 'react-router-dom';

import {getSubmissionRecords} from 'services/challenges';
import {SubmissionRecord} from 'utils/types/challenges';
import Submissions from '../Submissions/Submissions';

interface MatchParams {
  id: string;
}

interface State {
  submissionRecords?: SubmissionRecord[];
}

class SubmissionsContainer extends Component<RouteComponentProps<MatchParams>, State> {
  state = {
    submissionRecords: [],
  };
  async componentDidMount(): Promise<void> {
    const submissionRecords = await getSubmissionRecords(this.props.match.params.id);
    this.setState({submissionRecords});
  }

  render(): JSX.Element {
    return <Submissions submissionRecords={this.state.submissionRecords} />;
  }
}

export default withRouter(SubmissionsContainer);
