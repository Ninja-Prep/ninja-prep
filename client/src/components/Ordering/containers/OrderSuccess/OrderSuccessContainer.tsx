import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {withRouter} from 'react-router-dom';
import qs from 'query-string';

import {RootState} from 'reducers/rootReducer';
import {getAndSetUser} from 'reducers/auth/actions';
import AsyncSpinner from 'utils/AsyncSpinner/AsyncSpinner';
import {MatchProps} from 'utils/types/routing';
import {getCheckoutSession} from 'services/stripe/stripeService';

import OrderSuccess from '../../OrderSuccess';
import OrderSuccessNotFound from '../../OrderSuccessNotFound';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
  };
};

const connector = connect(mapStateToProps, {getAndSetUser});
type OrderSuccessProps = {} & MatchProps & ConnectedProps<typeof connector>;
type State = {
  isLoadingCheckoutSession: boolean;
  email: string;
  expirationDate: string;
  error?: Error;
};

class OrderSuccessContainer extends Component<OrderSuccessProps, State> {
  state: State = {
    isLoadingCheckoutSession: true,
    email: '',
    expirationDate: '',
  };
  async componentDidMount() {
    const query = qs.parse(this.props.location.search);
    const sessionId = query.session_id as string;
    try {
      const checkoutSession = await getCheckoutSession(sessionId);
      await this.props.getAndSetUser();
      this.setState({isLoadingCheckoutSession: false, email: checkoutSession.email, expirationDate: checkoutSession.expirationDate});
    } catch (error: any) {
      this.setState({isLoadingCheckoutSession: false, error: error});
    }
  }
  render(): JSX.Element {
    if (this.state.isLoadingCheckoutSession) {
      return <AsyncSpinner />;
    } else if (this.props.authUser && !this.state.error) {
      return <OrderSuccessNotFound />;
    } else {
      return <OrderSuccess email={this.state.email} expirationDate={this.state.expirationDate} provider={this.props?.authUser?.oauthProvider || 'Google'} />;
    }
  }
}

export default withRouter(connector(OrderSuccessContainer));
