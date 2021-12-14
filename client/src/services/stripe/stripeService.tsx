import {Stripe} from '@stripe/stripe-js';
import axios from 'axios';

export function redirectToCheckoutForm(stripe: Stripe | null, stripePriceId: string, userEmail: string, premiumTime: number): void {
  stripe &&
    axios({
      method: 'POST',
      url: '/api/payment/create-checkout-session/',
      data: {
        stripePriceId,
        userEmail,
        premiumTime,
      },
    }).then((res) => {
      stripe?.redirectToCheckout({
        sessionId: res.data.sessionId,
      });
    });
}

export async function getCheckoutSession(checkoutSessionId: string): Promise<{email: string; expirationDate: string}> {
  const checkoutSession = await axios({
    method: 'POST',
    url: '/api/payment/checkoutSession/',
    data: {
      checkoutSessionId,
    },
  });
  return checkoutSession.data;
}
