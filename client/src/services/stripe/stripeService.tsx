import {Stripe} from '@stripe/stripe-js';
import axios from 'axios';

export function redirectToCheckoutForm(
  urlString: string,
  stripe: Stripe | null,
): void {
  stripe &&
    axios({
      method: 'POST',
      url: urlString,
    }).then((res) => {
      stripe?.redirectToCheckout({
        sessionId: res.data.sessionId,
      });
    });
}
