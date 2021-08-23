import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {isPremiumUser} from 'redux/auth/reducer';
import NavLinks from 'components/NavigationBar/links/NavLinks';

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class NavigationBar extends Component<Props> {
  render(): JSX.Element {
    return <NavLinks isPremiumUser={this.props.isPremiumUser} />;
  }
}

export default connector(NavigationBar);
