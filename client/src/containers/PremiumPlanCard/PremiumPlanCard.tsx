import React, {Component} from 'react';

import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PremiumPlanCard from 'components/Premium/PremiumPlanCard/PremiumPlanCard';
import {redirectToCheckoutForm} from 'services/stripe/stripeService';
import {PurchasePlan} from 'utils/types/plans/plans';

interface PremiumPlanCardContainerProps {
  purchasePlan: PurchasePlan;
}

class PremiumPlanCardContainer extends Component<PremiumPlanCardContainerProps> {
  stripePromise: Promise<import('@stripe/stripe-js').Stripe | null>;

  constructor(props: Readonly<PremiumPlanCardContainerProps>) {
    super(props);
    this.stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY || '');
  }

  render(): JSX.Element {
    const purchasePlan = this.props.purchasePlan;
    return (
      <Elements stripe={this.stripePromise}>
        <ElementsConsumer>
          {({elements, stripe}) => <PremiumPlanCard purchasePlan={purchasePlan} purchaseHandler={() => redirectToCheckoutForm(stripe, purchasePlan.stripePriceId)} />}
        </ElementsConsumer>
      </Elements>
    );
  }
}

export default PremiumPlanCardContainer;
