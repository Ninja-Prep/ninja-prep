import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RouteProps} from 'react-router-dom';
import {getAndSetUser} from 'reducers/auth/actions';
import {RootState} from 'reducers/rootReducer';
import Cookies from 'universal-cookie';

import {HeaderandFooterLayout} from './Layouts';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
  };
};

const connector = connect(mapStateToProps, {getAndSetUser});

type Props = {
  routeComponent: JSX.Element;
  hasFooter?: boolean;
} & RouteProps &
  ConnectedProps<typeof connector>;

class HeaderNavbarRoute extends React.Component<Props> {
  async componentDidMount() {
    const cookies = new Cookies();
    if (!this.props.authUser && cookies.get('session')) {
      await this.props.getAndSetUser();
    }
  }
  render(): JSX.Element {
    const Component = this.props.routeComponent;

    return <HeaderandFooterLayout hasFooter={this.props.hasFooter}>{Component}</HeaderandFooterLayout>;
  }
}

export default connector(HeaderNavbarRoute);
