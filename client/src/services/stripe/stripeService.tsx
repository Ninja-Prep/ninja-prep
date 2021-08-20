import {Stripe} from '@stripe/stripe-js';
import axios from 'axios';

export function redirectToCheckoutForm(stripe: Stripe | null): void {
  stripe &&
    axios({
      method: 'POST',
      url: '/api/payment/create-checkout-session/',
    }).then((res) => {
      stripe?.redirectToCheckout({
        sessionId: res.data.sessionId,
      });
    });
}
