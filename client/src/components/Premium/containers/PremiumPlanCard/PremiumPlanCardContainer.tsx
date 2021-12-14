import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import {PurchasePlan} from 'utils/types/plans/plans';
import {redirectToCheckoutForm} from 'services/stripe/stripeService';
import {toggleLoginModal} from 'reducers/loginModal/actions';
import {RootState} from 'reducers/rootReducer';
import PremiumPlanCard from '../../PremiumPlanCard/PremiumPlanCard';
import {LoginModalContainer} from 'components/Login';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal});
type PremiumPlanCardContainerProps = {
  purchasePlan: PurchasePlan;
} & ConnectedProps<typeof connector>;

class PremiumPlanCardContainer extends Component<PremiumPlanCardContainerProps> {
  stripePromise: Promise<import('@stripe/stripe-js').Stripe | null>;

  constructor(props: Readonly<PremiumPlanCardContainerProps>) {
    super(props);
    this.stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY || '');
  }

  render(): JSX.Element {
    const purchasePlan = this.props.purchasePlan;
    if (this.props.authUser) {
      const email = this.props.authUser.email;
      return (
        <Elements stripe={this.stripePromise}>
          <ElementsConsumer>
            {({elements, stripe}) => (
              <PremiumPlanCard purchasePlan={purchasePlan} purchaseHandler={() => redirectToCheckoutForm(stripe, purchasePlan.stripePriceId, email, purchasePlan.premiumTime)} />
            )}
          </ElementsConsumer>
        </Elements>
      );
    } else
      return (
        <div>
          <PremiumPlanCard purchasePlan={purchasePlan} purchaseHandler={() => this.props.toggleLoginModal()} />
          <LoginModalContainer />
        </div>
      );
  }
}

export default connector(PremiumPlanCardContainer);
