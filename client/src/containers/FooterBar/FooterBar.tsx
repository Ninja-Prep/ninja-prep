import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import FooterBarComponent from 'components/FooterBar';

const mapStateToProps = (state: RootState) => {
  return {
    displayFooter: state.footer.displayFooter,
  };
};

const connector = connect(mapStateToProps);
type FooterBarProps = ConnectedProps<typeof connector>;

class FooterBarContainer extends Component<FooterBarProps> {
  render(): JSX.Element {
    return <FooterBarComponent displayFooter={this.props.displayFooter} />;
  }
}

export default connector(FooterBarContainer);
