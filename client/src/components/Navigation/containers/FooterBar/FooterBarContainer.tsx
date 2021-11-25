import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from 'reducers/rootReducer';
import {FooterBar} from '../../FooterBar/FooterBar';

const mapStateToProps = (state: RootState) => {
  return {
    displayFooter: state.footer.displayFooter,
  };
};

const connector = connect(mapStateToProps);
type FooterBarProps = ConnectedProps<typeof connector>;

class FooterBarContainer extends Component<FooterBarProps> {
  render(): JSX.Element {
    return <FooterBar displayFooter={this.props.displayFooter} />;
  }
}

export default connector(FooterBarContainer);
