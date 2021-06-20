import React, {Component} from 'react';

import QuestionList from 'components/QuestionList/QuestionList';
import {findChallengeLinks} from 'services/challenges/challengesService';
import {ChallengeLink} from 'utils/types/challenges';

interface State {
  challengeLinks: ChallengeLink[];
}

class QuestionListContainer extends Component<Record<string, never>, State> {
  state: State = {
    challengeLinks: [],
  };

  async componentDidMount(): Promise<void> {
    const links = await findChallengeLinks();
    console.log(links);
    this.setState({challengeLinks: links});
  }

  render(): JSX.Element {
    return <QuestionList challengeLinks={this.state.challengeLinks} />;
  }
}

export default QuestionListContainer;
