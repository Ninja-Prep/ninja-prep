import {Stripe} from '@stripe/stripe-js';
import axios from 'axios';

export function redirectToCheckoutForm(stripe: Stripe | null, stripePriceId: string): void {
  stripe &&
    axios({
      method: 'POST',
      url: '/api/payment/create-checkout-session/',
      data: {
        stripePriceId,
      },
    }).then((res) => {
      stripe?.redirectToCheckout({
        sessionId: res.data.sessionId,
      });
    });
}
