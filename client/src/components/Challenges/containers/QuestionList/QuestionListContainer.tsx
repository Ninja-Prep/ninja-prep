import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {getChallengeLinks} from 'services/challenges';
import {ChallengeLink} from 'utils/types/challenges';
import {RootState} from 'reducers/rootReducer';
import {isPremiumUser} from 'reducers/auth/reducer';
import {displayFooter} from 'reducers/footer/actions';

import QuestionList from '../../QuestionList/QuestionList';

interface State {
  challengeLinks: ChallengeLink[];
}

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps, {displayFooter});

type Props = ConnectedProps<typeof connector>;

class QuestionListContainer extends Component<Props, State> {
  state: State = {
    challengeLinks: [],
  };

  async componentDidMount(): Promise<void> {
    this.props.displayFooter(false);
    const links = await getChallengeLinks();
    links.sort((link) => {
      return link.isFree ? -1 : 1;
    });
    this.props.displayFooter(true);
    this.setState({challengeLinks: links});
  }

  render(): JSX.Element {
    return <QuestionList challengeLinks={this.state.challengeLinks} isPremiumUser={this.props.isPremiumUser} />;
  }
}

export default connector(QuestionListContainer);
