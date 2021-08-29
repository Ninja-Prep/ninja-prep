import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {toggleLoginModal} from 'redux/loginModal/actions';
import NavigationBarContent from 'components/NavigationBarContent/NavigationBarContent';

const mapStateToProps = (state: RootState) => {
  return {
    isLoadingUser: state.authReducer.isLoadingUser,
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal});

type Props = ConnectedProps<typeof connector>;

class NavigationBarContentContainer extends Component<Props> {
  render(): JSX.Element {
    return <NavigationBarContent isLoadingUser={this.props.isLoadingUser} />;
  }
}

export default connector(NavigationBarContentContainer);
