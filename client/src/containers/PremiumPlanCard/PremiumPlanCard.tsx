import React, {Component} from 'react';

import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PremiumPlanCard from 'components/Premium/PremiumPlanCard/PremiumPlanCard';
import {redirectToCheckoutForm} from 'services/stripe/stripeService';
import {PurchasePlan} from 'utils/types/plans/plans';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import LoginModalDesktop from 'components/NavigationBar/modals/LoginModalDesktop';
import {useToggler} from 'containers/NavigationBar/hooks/useToggler';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
  };
};

const connector = connect(mapStateToProps);
type PremiumPlanCardContainerProps = {
  purchasePlan: PurchasePlan;
} & ConnectedProps<typeof connector>;

type State = {
  showModal: boolean;
};

class PremiumPlanCardContainer extends Component<PremiumPlanCardContainerProps, State> {
  stripePromise: Promise<import('@stripe/stripe-js').Stripe | null>;
  state = {
    showModal: false,
  };

  constructor(props: Readonly<PremiumPlanCardContainerProps>) {
    super(props);
    this.stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY || '');
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }
  render(): JSX.Element {
    const purchasePlan = this.props.purchasePlan;
    if (this.props.authUser) {
      const email = this.props.authUser.email;
      return (
        <Elements stripe={this.stripePromise}>
          <ElementsConsumer>
            {({elements, stripe}) => <PremiumPlanCard purchasePlan={purchasePlan} purchaseHandler={() => redirectToCheckoutForm(stripe, purchasePlan.stripePriceId, email)} />}
          </ElementsConsumer>
        </Elements>
      );
    } else
      return (
        <div>
          <PremiumPlanCard purchasePlan={purchasePlan} purchaseHandler={() => this.toggleModal()} />
          <LoginModalDesktop showModal={this.state.showModal} toggleModal={() => this.toggleModal()} />
        </div>
      );
  }
}

export default connector(PremiumPlanCardContainer);
