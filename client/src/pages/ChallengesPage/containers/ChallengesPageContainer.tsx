import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {isPremiumUser} from 'reducers/auth/reducer';
import {RootState} from 'reducers/rootReducer';
import ChallengesPage from '../ChallengesPage';

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class ChallengesPageContainer extends Component<Props> {
  render(): JSX.Element {
    return <ChallengesPage isPremiumUser={this.props.isPremiumUser} />;
  }
}

export default connector(ChallengesPageContainer);
