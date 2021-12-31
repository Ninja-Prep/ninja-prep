import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {isPremiumUser} from 'reducers/auth/reducer';
import {RootState} from 'reducers/rootReducer';
import ChallengesPage from '../ChallengesPage';
import {withMobileSizing} from 'utils/hocs/withMediaSizing';
import ChallengesPageMobile from '../mobile/ChallengesPageMobile';

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps);

type Props = {
  isMobile?: boolean;
} & ConnectedProps<typeof connector>;

class ChallengesPageContainer extends Component<Props> {
  render(): JSX.Element {
    return this.props.isMobile ? <ChallengesPageMobile isPremiumUser={this.props.isPremiumUser} /> : <ChallengesPage isPremiumUser={this.props.isPremiumUser} />;
  }
}

export default withMobileSizing(connector(ChallengesPageContainer));
