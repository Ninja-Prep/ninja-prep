import React, {Component} from 'react';

import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PremiumPlanCard from 'components/Premium/PremiumPlanCard/PremiumPlanCard';
import {STRIPE_KEY} from 'config/keys';
import {redirectToCheckoutForm} from 'services/stripe/stripeService';
import {StripeInterface} from 'utils/types/plans';

class PremiumPlanCardContainer extends Component<StripeInterface> {
  stripePromise: Promise<import('@stripe/stripe-js').Stripe | null>;

  constructor(props: StripeInterface | Readonly<StripeInterface>) {
    super(props);
    this.stripePromise = loadStripe(STRIPE_KEY);
  }

  render(): JSX.Element {
    return (
      <Elements stripe={this.stripePromise}>
        <ElementsConsumer>
          {({elements, stripe}) => (
            <PremiumPlanCard
              {...this.props}
              purchaseHandler={() =>
                redirectToCheckoutForm(this.props.url, stripe)
              }
            />
          )}
        </ElementsConsumer>
      </Elements>
    );
  }
}

export default PremiumPlanCardContainer;
