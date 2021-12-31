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
import {withMobileSizing} from 'utils/hocs/withMediaSizing';
import ProtectedProblemPageMobile from 'pages/ProtectedProblemPage/mobile/ProtectedProblemPageMobile';

interface MatchParams {
  id: string;
}

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
    problemDetails: state.problemDetails.details,
    isError: state.problemDetails.isError,
    isLoadingProblemDetails: state.problemDetails.isLoading,
    language: getLanguage(state),
  };
};

const connector = connect(mapStateToProps, {loadProblemDetails, resetProblemSubmission, getAndSetUser});

type Props = {
  isMobile: boolean;
} & ConnectedProps<typeof connector> &
  RouteComponentProps<MatchParams>;
type State = {
  isMounted: boolean;
};

class ProblemSubmissionPageContainer extends Component<Props, State> {
  state = {
    isMounted: false,
  };
  async componentDidMount(): Promise<void> {
    this.props.resetProblemSubmission();
    this.props.loadProblemDetails(this.props.match.params.id);
    await this.props.getAndSetUser();
    this.setState({isMounted: true});
  }

  get getStarterCode() {
    return this.props.problemDetails?.starterCode || '';
  }

  render(): JSX.Element {
    if (this.props.isLoadingProblemDetails || !this.state.isMounted) return <AsyncSpinner />;
    else if (!this.props.problemDetails?.isFree && !this.props.isPremiumUser) {
      return this.props.isMobile ? <ProtectedProblemPageMobile title={this.props.problemDetails?.title} /> : <ProtectedProblemPage title={this.props.problemDetails?.title} />;
    }
    return <ProblemSubmissionPage starterCode={this.getStarterCode} problemDetails={this.props.problemDetails} />;
  }
}

export default withMobileSizing(withRouter(connector(ProblemSubmissionPageContainer)));
