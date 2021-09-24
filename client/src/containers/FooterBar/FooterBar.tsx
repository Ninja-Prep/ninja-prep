import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import FooterBarComponent from 'components/FooterBar';

const mapStateToProps = (state: RootState) => {
  return {
    isLoading: state.authReducer.isLoadingUser,
  };
};

const connector = connect(mapStateToProps);
type FooterBarProps = ConnectedProps<typeof connector>;

class FooterBarContainer extends Component<FooterBarProps> {
  render(): JSX.Element {
    return <FooterBarComponent isLoadingUser={this.props.isLoading} />;
  }
}

export default connector(FooterBarContainer);
