import React, {Component, Fragment} from 'react';

import {connect, ConnectedProps} from 'react-redux';

import {RootState} from 'reducers/rootReducer';
import {toggleLoginModal} from 'reducers/loginModal/actions';
import NavigationBarContent from '../../NavigationBarContent/NavigationBarContent';

const mapStateToProps = (state: RootState) => {
  return {
    isLoadingUser: state.authReducer.isLoadingUser,
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal});

type Props = ConnectedProps<typeof connector>;

class NavigationBarContentContainer extends Component<Props> {
  render(): JSX.Element {
    if (this.props.isLoadingUser) {
      return <Fragment />;
    }
    return <NavigationBarContent />;
  }
}

export default connector(NavigationBarContentContainer);
