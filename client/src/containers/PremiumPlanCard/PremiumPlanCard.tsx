import React, {Component} from 'react';

import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PremiumPlanCard from 'components/Premium/PremiumPlanCard/PremiumPlanCard';
import {STRIPE_KEY} from 'config/keys';
import {redirectToCheckoutForm} from 'services/stripe/stripeService';
import {PurchasePlan} from 'utils/types/plans/plans';

interface PremiumPlanCardContainerProps {
  purchasePlan: PurchasePlan;
}

class PremiumPlanCardContainer extends Component<PremiumPlanCardContainerProps> {
  stripePromise: Promise<import('@stripe/stripe-js').Stripe | null>;

  constructor(props: Readonly<PremiumPlanCardContainerProps>) {
    super(props);
    this.stripePromise = loadStripe(STRIPE_KEY);
  }

  render(): JSX.Element {
    return (
      <Elements stripe={this.stripePromise}>
        <ElementsConsumer>{({elements, stripe}) => <PremiumPlanCard purchasePlan={this.props.purchasePlan} purchaseHandler={() => redirectToCheckoutForm(stripe)} />}</ElementsConsumer>
      </Elements>
    );
  }
}

export default PremiumPlanCardContainer;
