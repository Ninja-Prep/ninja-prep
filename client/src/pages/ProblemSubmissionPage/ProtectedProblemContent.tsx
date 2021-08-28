import React, {Component, Fragment} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {isPremiumUser} from 'redux/auth/reducer';

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
  };
};

const connector = connect(mapStateToProps);

type Props = {
  children: React.ReactChild | React.ReactChild[];
} & ConnectedProps<typeof connector>;

class ProtectedProblemContent extends Component<Props> {
  render(): JSX.Element {
    if (this.props.isPremiumUser) {
      return <Fragment>{this.props.children}</Fragment>;
    }
    return <Fragment />;
  }
}

export default connector(ProtectedProblemContent);
