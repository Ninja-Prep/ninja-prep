import React, {Component} from 'react';

import QuestionList from 'components/QuestionList/QuestionList';
import {getChallengeLinks} from 'services/challenges/challengesService';
import {ChallengeLink} from 'utils/types/challenges';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {isPremiumUser} from 'redux/auth/reducer';
import {getAndSetUser} from 'redux/auth/actions';

interface State {
  challengeLinks: ChallengeLink[];
}

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps, {getAndSetUser});

type Props = ConnectedProps<typeof connector>;

class QuestionListContainer extends Component<Props, State> {
  state: State = {
    challengeLinks: [],
  };

  async componentDidMount(): Promise<void> {
    await this.props.getAndSetUser();
    const links = await getChallengeLinks();
    links.sort((link) => {
      return link.isFree ? -1 : 1;
    });
    this.setState({challengeLinks: links});
  }

  render(): JSX.Element {
    return <QuestionList challengeLinks={this.state.challengeLinks} isPremiumUser={this.props.isPremiumUser} />;
  }
}

export default connector(QuestionListContainer);
