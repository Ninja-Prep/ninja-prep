import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {isPremiumUser} from 'reducers/auth/reducer';
import NavLinks from '../../NavigationBarLinks/NavigationBarLinks';

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class NavigationLinksContainer extends Component<Props> {
  render(): JSX.Element {
    return <NavLinks isPremiumUser={this.props.isPremiumUser} />;
  }
}

export default connector(NavigationLinksContainer);
