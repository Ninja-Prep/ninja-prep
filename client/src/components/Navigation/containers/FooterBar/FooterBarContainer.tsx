import {FooterBarMobile} from 'components/Navigation/mobile/FooterBar/FooterBarMobile';
import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from 'reducers/rootReducer';
import {withMobileSizing} from 'utils/hocs/withMediaSizing';
import {FooterBar} from '../../FooterBar/FooterBar';

const mapStateToProps = (state: RootState) => {
  return {
    displayFooter: state.footer.displayFooter,
  };
};

const connector = connect(mapStateToProps);

type FooterBarProps = {
  isMobile?: boolean;
} & ConnectedProps<typeof connector>;

class FooterBarContainer extends Component<FooterBarProps> {
  render(): JSX.Element {
    return this.props.isMobile ? <FooterBarMobile displayFooter={this.props.displayFooter} /> : <FooterBar displayFooter={this.props.displayFooter} />;
  }
}

export default withMobileSizing(connector(FooterBarContainer));
