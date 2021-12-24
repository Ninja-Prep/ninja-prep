import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getLanguage} from 'reducers/editorSettings/reducer';
import {loadProblemDetails} from 'reducers/problemDetails/action';
import {RootState} from 'reducers/rootReducer';
import AsyncSpinner from 'utils/AsyncSpinner/AsyncSpinner';

import 'react-reflex/styles.css';
import {isPremiumUser} from 'reducers/auth/reducer';
import ProblemSubmissionPage from '../ProblemSubmissionPage';
import ProtectedProblemPage from 'pages/ProtectedProblemPage/ProtectedProblemPage';
import {resetProblemSubmission} from 'reducers/userSubmission/action';
import {getAndSetUser} from 'reducers/auth/actions';

interface MatchParams {
  id: string;
}

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
    problemDetails: state.problemDetails.details,
    isError: state.problemDetails.isError,
    isLoading: state.problemDetails.isLoading,
    language: getLanguage(state),
  };
};

const connector = connect(mapStateToProps, {loadProblemDetails, resetProblemSubmission, getAndSetUser});

type Props = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class ProblemSubmissionPageContainer extends Component<Props> {
  async componentDidMount(): Promise<void> {
    this.props.loadProblemDetails(this.props.match.params.id);
    this.props.resetProblemSubmission();
    await this.props.getAndSetUser();
  }

  get getStarterCode() {
    return this.props.problemDetails?.starterCode || '';
  }

  render(): JSX.Element {
    if (this.props.isLoading) return <AsyncSpinner />;
    else if (!this.props.problemDetails?.isFree && !this.props.isPremiumUser) {
      return <ProtectedProblemPage title={this.props.problemDetails?.title} />;
    }
    return <ProblemSubmissionPage starterCode={this.getStarterCode} problemDetails={this.props.problemDetails} />;
  }
}

export default withRouter(connector(ProblemSubmissionPageContainer));
