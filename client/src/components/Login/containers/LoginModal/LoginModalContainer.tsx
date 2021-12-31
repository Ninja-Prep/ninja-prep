import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {toggleLoginModal} from 'reducers/displayModal/actions';
import {withMobileSizing} from 'utils/hocs/withMediaSizing';

import LoginModal from '../../LoginModal/LoginModal';

const mapStateToProps = (state: RootState) => {
  return {
    showLoginModal: state.displayModal.showLoginModal,
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal});

type Props = {isMobile?: boolean} & ConnectedProps<typeof connector>;

class LoginModalContainer extends Component<Props> {
  render(): JSX.Element {
    return <LoginModal isMobile={this.props.isMobile} showModal={this.props.showLoginModal} toggleModal={this.props.toggleLoginModal} />;
  }
}

export default withMobileSizing(connector(LoginModalContainer));
