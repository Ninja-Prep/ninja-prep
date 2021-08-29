import React, {Component, Fragment} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {isPremiumUser} from 'redux/auth/reducer';

const mapStateToProps = (state: RootState) => {
  return {
    isPremiumUser: isPremiumUser(state),
    isFree: state.problemDetails.details?.isFree,
  };
};

const connector = connect(mapStateToProps);

type Props = {
  children: React.ReactChild | React.ReactChild[];
  lockedComponent?: JSX.Element;
} & ConnectedProps<typeof connector>;

class ProtectedProblemContent extends Component<Props> {
  render(): JSX.Element {
    if (this.props.isPremiumUser || this.props.isFree) {
      return <Fragment>{this.props.children}</Fragment>;
    } else if (this.props.lockedComponent) {
      return this.props.lockedComponent;
    }
    return <Fragment />;
  }
}

export default connector(ProtectedProblemContent);
